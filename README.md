# QUARCC AI

Frontend is the looks, backend has users and the AI stuff.

## Setup & Running

1. First time setup:

Create a `.env` file in the backend directory with:
```
JWT_SECRET_KEY=your-super-secret-key-change-in-production
OPENAI_API_KEY=your-openai-api-key
```

Then run:
```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd backend
pip install -r requirements.txt
python build_db.py  # Build the initial vector database
cd ..
```

2. Build frontend:
```bash
npm run build
```

3. Run the application:
```bash
cd backend
python app.py

serve build -s
```

The application will be served at http://localhost:5000. The Flask server will serve both the API endpoints and the static frontend files.