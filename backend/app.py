from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from dotenv import load_dotenv
import os
from openai import OpenAI
import requests
from bs4 import BeautifulSoup
from langchain.vectorstores import Chroma
from langchain.embeddings import HuggingFaceEmbeddings
from werkzeug.security import generate_password_hash, check_password_hash
import jwt
import datetime
from models import db, User
from course_api import CourseAPI

load_dotenv()

app = Flask(__name__, static_folder='../build', static_url_path='/')

# Configure CORS for API routes only
CORS(app, resources={r"/api/*": {"origins": "*"}})

# Database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///quarcc.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

# Create tables
with app.app_context():
    db.create_all()

# Initialize OpenAI client
client = OpenAI(api_key=os.getenv('OPENAI_API_KEY'))

# Initialize vector store from existing database
embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
try:
    vectorstore = Chroma(persist_directory="./chroma_db", embedding_function=embeddings)
    print("Successfully loaded existing vector store")
except Exception as e:
    print(f"Error loading vector store: {str(e)}")
    print("Please run build_db.py first to create the vector store")
    vectorstore = None

# Load environment variables
load_dotenv()

if not os.getenv('JWT_SECRET_KEY'):
    print("Warning: JWT_SECRET_KEY not set in environment. Using default key - not secure for production!")

app.config['SECRET_KEY'] = os.getenv('JWT_SECRET_KEY', 'development-secret-key-change-me')

# Add this at the top with other global variables
content_cache = {}

def scrape_concordia_pages():
    if content_cache.get('data'):
        return content_cache
    
    base_urls = [
        "https://www.concordia.ca/students.html",
        "https://www.concordia.ca/academics.html",
        "https://www.concordia.ca/students/success.html",
        "https://www.concordia.ca/students/financial-support.html",
        "https://www.concordia.ca/admissions.html",
        "https://theconcordian.com/",
        "https://csu.qc.ca/",
        "https://en.wikipedia.org/wiki/Concordia_University"
    ]
    
    all_content = []
    
    for url in base_urls:
        try:
            response = requests.get(url)
            soup = BeautifulSoup(response.text, 'html.parser')
            
            # Remove script and style elements
            for script in soup(["script", "style"]):
                script.decompose()
            
            # Get text and clean it
            text = soup.get_text(separator=' ', strip=True)
            all_content.append(text)
            
        except Exception as e:
            print(f"Error scraping {url}: {e}")
    
    content_cache['data'] = ' '.join(all_content)
    return content_cache

def verify_token():
    auth_header = request.headers.get('Authorization')
    if not auth_header or not auth_header.startswith('Bearer '):
        return None
    
    try:
        token = auth_header.split(' ')[1]
        data = jwt.decode(token, app.config['SECRET_KEY'], algorithms=["HS256"])
        user = User.query.filter_by(email=data['email']).first()
        return user.email if user else None
    except Exception as e:
        print(f"Token verification failed: {str(e)}")
        return None

# API Routes
@app.route('/api/query', methods=['POST'])
def query():
    try:
        print("Received query request")
        print("Headers:", request.headers)
        
        user_email = verify_token()
        print(f"Verified user email: {user_email}")
        
        if not user_email:
            print("Token verification failed")
            return jsonify({
                'response': "I apologize, but you need to sign in to use ConuAI."
            }), 401
        
        user = User.query.filter_by(email=user_email).first()
        print(f"Found user: {user.email if user else 'None'}")
        user_name = user.firstName
        
        data = request.json
        print(f"Request data: {data}")
        user_query = data.get('query')
        
        if not user_query:
            print("No query provided in request")
            return jsonify({'error': 'No query provided'}), 400
        
        print(f"Processing query: {user_query}")
        
        # Get relevant documents from vector store
        if vectorstore is None:
            return jsonify({
                'response': "I apologize, but the knowledge base is not currently available. Please contact the administrator."
            }), 503
            
        docs = vectorstore.similarity_search(user_query, k=3)
        context = "\n\n".join(doc.page_content for doc in docs)
        # print(f"Found {len(docs)} relevant documents")
        
        # Search for relevant course information
        try:
            print("\n========== Query Endpoint Debug ==========")
            print(f"Processing query: '{user_query}'")
            
            # Search for courses
            print("\nCalling CourseAPI.search()...")
            course_info = CourseAPI.search(user_query, limit=5)
            
            print(f"\nReceived {len(course_info) if course_info else 0} courses from search")
            if course_info:  # course_info is already a list of courses
                print("\nFormatting course information for context...")
                formatted_courses = []
                for i, course in enumerate(course_info, 1):
                    if isinstance(course, dict):
                        course_text = (
                            f"Course {i}:\n"
                            f"  Course: {course.get('subject', '')} {course.get('catalog', '')}\n"
                            f"  Title: {course.get('title', '')}\n"
                            f"  Description: {course.get('description', '')}\n"
                            f"  Prerequisites: {course.get('prerequisites', 'None')}\n"
                            f"  Credits: {course.get('credits', 'N/A')}\n"
                            f"  Department: {course.get('department', 'N/A')}\n"
                            f"  Terms Offered: {', '.join(course.get('terms', []))}"
                        )
                        formatted_courses.append(course_text)
                        print(f"\n{course_text}")
                
                course_context = "\n\n".join(formatted_courses)
                print("\nAdding course information to context...")
                context += "\n\nRelevant Course Information:\n" + course_context
            else:
                print("\nNo course information to add to context")
            
            print("\n========== End Query Endpoint Debug ==========\n")
        except Exception as e:
            print("\n========== Error in Course Search ==========")
            print(f"Error type: {type(e)}")
            print(f"Error message: {str(e)}")
            import traceback
            print(f"Traceback:\n{traceback.format_exc()}")
            print("========== End Error Report ==========\n")
            # Continue without course data if there's an error
        
        messages = [
            {"role": "system", "content": f"""You are ConuAI, Concordia University's knowledgeable AI assistant. 
             Key traits:
             - Address the user as {user_name}
             - Friendly and professional tone
             - Provide specific, actionable information
             - Structure responses clearly with headings when appropriate in markdown format
             - Include relevant links or contact information when available
             - If unsure, acknowledge limitations and suggest official resources
             - Focus on accurate, up-to-date Concordia-specific information
             - When discussing courses, include specific course codes, prerequisites, and credit information
             - Provide balanced information about course difficulty and workload when available
             
             - Never help with math problems
             - Never help coding anything under any circumstances
             """},
            {"role": "user", "content": f"""Context about Concordia University and Courses:
             {context}
             
             Question: {user_query}
             
             Provide a detailed, well-structured response using the context. Include relevant course information and requirements when applicable."""}
        ]
        
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=messages,
            temperature=0.7,
            max_tokens=800,
            presence_penalty=0.6,
            frequency_penalty=0.3
        )
        
        return jsonify({'response': response.choices[0].message.content.strip()})
    
    except Exception as e:
        print(f"Detailed error in query endpoint: {str(e)}")
        print(f"Error type: {type(e)}")
        import traceback
        print(f"Traceback: {traceback.format_exc()}")
        return jsonify({'error': 'Something went wrong'}), 500

@app.route('/api/auth/signup', methods=['POST'])
def signup():
    try:
        data = request.get_json()
        if not data:
            return jsonify({'error': 'No JSON data received'}), 400
        
        if not all(k in data for k in ['email', 'password', 'firstName', 'lastName', 'role']):
            return jsonify({'error': 'Missing required fields'}), 400
        
        if User.query.filter_by(email=data['email']).first():
            return jsonify({'error': 'Email already registered'}), 409
        
        new_user = User(
            email=data['email'],
            password=generate_password_hash(data['password']),
            firstName=data['firstName'],
            lastName=data['lastName'],
            role=data['role'],
            isConcordiaAffiliate=data.get('isConcordiaAffiliate', False)
        )
        
        db.session.add(new_user)
        db.session.commit()
        return jsonify({'message': 'User registered successfully'}), 201
    except Exception as e:
        db.session.rollback()
        print(f"Error creating user: {str(e)}")
        return jsonify({'error': 'Failed to create user'}), 500

@app.route('/api/auth/login', methods=['POST'])
def login():
    try:
        data = request.get_json()
        if not data:
            return jsonify({'error': 'No JSON data received'}), 400
        
        if not all(k in data for k in ['email', 'password']):
            return jsonify({'error': 'Missing email or password'}), 400
        
        user = User.query.filter_by(email=data['email']).first()
        if not user:
            return jsonify({'error': 'User not found'}), 404
        
        if not check_password_hash(user.password, data['password']):
            return jsonify({'error': 'Invalid password'}), 401
        
        token = jwt.encode({
            'email': user.email,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=24)
        }, app.config['SECRET_KEY'])
        
        if isinstance(token, bytes):
            token = token.decode('utf-8')
        
        return jsonify({
            'token': token,
            'user': {
                'email': user.email,
                'firstName': user.firstName,
                'lastName': user.lastName,
                'role': user.role
            }
        }), 200
    except Exception as e:
        print(f"Login error: {str(e)}")
        return jsonify({'error': 'Authentication failed'}), 500

@app.route('/api/auth/verify', methods=['GET'])
def verify_auth():
    try:
        user_email = verify_token()
        if not user_email:
            return jsonify({'error': 'Invalid token'}), 401
            
        user = User.query.filter_by(email=user_email).first()
        if not user:
            return jsonify({'error': 'User not found'}), 401
            
        return jsonify({
            'user': {
                'email': user.email,
                'firstName': user.firstName,
                'lastName': user.lastName,
                'role': user.role
            }
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 401

# Serve React App - these routes must be last
@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/<path:path>')
def serve_path(path):
    if path.startswith('api/'):
        return jsonify({'error': 'Not found'}), 404
    
    file_path = os.path.join(app.static_folder, path)
    if os.path.exists(file_path):
        return send_from_directory(app.static_folder, path)
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=False, port=5000, host='0.0.0.0')