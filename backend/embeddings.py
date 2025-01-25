from sentence_transformers import SentenceTransformer
import faiss
import numpy as np
import os
import json
from bs4 import BeautifulSoup
import requests

class VectorStore:
    def __init__(self):
        self.model = SentenceTransformer('all-MiniLM-L6-v2')
        self.index = None
        self.texts = []
        self.sources = []
        
    def add_concordia_pages(self, urls):
        for url in urls:
            try:
                response = requests.get(url)
                soup = BeautifulSoup(response.text, 'html.parser')
                
                # Remove script and style elements
                for script in soup(["script", "style"]):
                    script.decompose()
                
                # Get text and clean it
                text = soup.get_text(separator=' ', strip=True)
                
                # Split into chunks of roughly 1000 characters
                chunks = [text[i:i+1000] for i in range(0, len(text), 1000)]
                
                for chunk in chunks:
                    self.texts.append(chunk)
                    self.sources.append(url)
                    
            except Exception as e:
                print(f"Error scraping {url}: {e}")
    
    def create_index(self):
        # Create embeddings
        embeddings = self.model.encode(self.texts)
        
        # Initialize FAISS index
        dimension = embeddings.shape[1]
        self.index = faiss.IndexFlatL2(dimension)
        
        # Add vectors to the index
        self.index.add(np.array(embeddings).astype('float32'))
        
    def save(self, folder_path='vector_store'):
        os.makedirs(folder_path, exist_ok=True)
        
        # Save the index
        faiss.write_index(self.index, f"{folder_path}/index.faiss")
        
        # Save texts and sources
        with open(f"{folder_path}/data.json", 'w') as f:
            json.dump({
                'texts': self.texts,
                'sources': self.sources
            }, f)
    
    def load(self, folder_path='vector_store'):
        # Load the index
        self.index = faiss.read_index(f"{folder_path}/index.faiss")
        
        # Load texts and sources
        with open(f"{folder_path}/data.json", 'r') as f:
            data = json.load(f)
            self.texts = data['texts']
            self.sources = data['sources']
    
    def search(self, query, k=5):
        # Create query embedding
        query_vector = self.model.encode([query])
        
        # Search the index
        distances, indices = self.index.search(np.array(query_vector).astype('float32'), k)
        
        # Return relevant texts and their sources
        results = []
        for idx in indices[0]:
            results.append({
                'text': self.texts[idx],
                'source': self.sources[idx]
            })
        
        return results 