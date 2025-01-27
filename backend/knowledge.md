# Backend Architecture

## RAG Database Setup

The backend is split into two parts:
1. Main application (app.py) - Handles API requests and serves responses
2. Database builder (build_db.py) - Builds the RAG database

### Initial Setup
1. Run `python build_db.py` to create the vector store
2. Start the application with `python app.py`

### Updating the Knowledge Base
To update the knowledge base:
1. Modify the URLs in build_index.py
2. Run `python build_db.py` to rebuild the database
3. Restart the application

Note: The main application will continue serving requests with the existing knowledge base while you rebuild the database.

## Course API Integration

The backend integrates with Concordia's course API at https://concordia-courses-production.up.railway.app

### Search Endpoint
Use only the main search endpoint:
- GET /api/v1/search - Full text search across reviews and courses
  - Required: query (string)
  - Optional: limit (int, default: 15)

Important: 
- Let the frontend handle all filtering and processing of search results
- Pass through the raw query text from the user
- Include the full response payload in the context
