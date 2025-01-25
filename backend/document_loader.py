from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.document_loaders import WebBaseLoader
from langchain.vectorstores import Chroma
from langchain.embeddings import HuggingFaceEmbeddings
import os
from dotenv import load_dotenv

load_dotenv()

def create_db():
    # URLs to scrape
    urls = [
        "https://www.concordia.ca/academics.html",
        "https://www.concordia.ca/students/success.html",
        "https://www.concordia.ca/students/financial-support.html",
        "https://www.concordia.ca/admissions.html",
        "https://www.concordia.ca/campus-life/clubs.html",
    ]

    # Load documents
    loader = WebBaseLoader(urls)
    documents = loader.load()

    # Split documents
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=1000,
        chunk_overlap=200
    )
    splits = text_splitter.split_documents(documents)

    # Create vector store
    embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
    vectordb = Chroma.from_documents(
        documents=splits,
        embedding=embeddings,
        persist_directory="./chroma_db"
    )
    
    return vectordb

if __name__ == "__main__":
    create_db() 