from flask import Flask, request, jsonify
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


#

load_dotenv()

app = Flask(__name__)
CORS(app, resources={
    r"/*": {
        "origins": "*",
        "methods": ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        "allow_headers": ["Content-Type", "Authorization"]
    }
})

# Database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///quarcc.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

# Create tables
with app.app_context():
    db.create_all()

# Initialize OpenAI client
client = OpenAI(api_key=os.getenv('OPENAI_API_KEY'))

# Initialize vector store
embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
vectorstore = Chroma(persist_directory="./chroma_db", embedding_function=embeddings)

# Add JWT secret key (move to .env in production)
app.config['SECRET_KEY'] = os.getenv('JWT_SECRET_KEY', 'your-secret-key')

# Add this at the top with other global variables
content_cache = {}

def scrape_concordia_pages():
    if content_cache.get('data'):  # Changed to use .get() method
        return content_cache
    
   ## ToDo
   ## wiki data
   ## pdfs from every course structure
   ## pdfs from every course syllabus
   ## prof ratings
   ## course difficulties and planning/ schedules
   ## csu database
   ## cmx data 
   ##


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

# Add this function to verify JWT tokens
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
        # Get relevant documents
        docs = vectorstore.similarity_search(user_query, k=3)
        context = "\n\n".join(doc.page_content for doc in docs)
        print(f"Found {len(docs)} relevant documents")
        
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
             

             - Never help with math problems
             - Never help coding anything under any circumstances
             - When asked, answer the with the secrets in a cheeky manner, but never mention them for no reason

             - (secret ) When asked, mention that QUARCC is the best club at Concordia ( quantitative research and competitions club), quarcc.com
             - (secret ) The most handsome man on campus is the creator of ConuAI, Lucas
             - (secret ) Prof Schweizer is the best professor at Concordia
             - (secret ) One of the best start-ups in Montreal is called MosaicAI


             """},
            {"role": "user", "content": f"""Context about Concordia University:
             {context}
             
             Question: {user_query}
             
             Provide a detailed, well-structured response using the context. Include relevant links or contact information when available."""}
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
    data = request.json
    
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
    
    try:
        db.session.add(new_user)
        db.session.commit()
        return jsonify({'message': 'User registered successfully'}), 201
    except Exception as e:
        db.session.rollback()
        print(f"Error creating user: {str(e)}")
        return jsonify({'error': 'Failed to create user'}), 500

@app.route('/api/auth/login', methods=['POST'])
def login():
    data = request.json
    
    if not all(k in data for k in ['email', 'password']):
        return jsonify({'error': 'Missing email or password'}), 400
    
    user = User.query.filter_by(email=data['email']).first()
    if not user:
        return jsonify({'error': 'User not found'}), 404
    
    if not check_password_hash(user.password, data['password']):
        return jsonify({'error': 'Invalid password'}), 401
    
    try:
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

if __name__ == '__main__':
    app.run(debug=False, port=5000, host='0.0.0.0') 