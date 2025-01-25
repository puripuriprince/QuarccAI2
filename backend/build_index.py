from embeddings import VectorStore

urls = [
    # Academic
    "https://www.concordia.ca/academics.html",
    "https://www.concordia.ca/students/registration.html",
    "https://www.concordia.ca/students/your-sis.html",
    
    # Student Life
    "https://www.concordia.ca/campus-life.html",
    "https://www.concordia.ca/campus-life/clubs.html",
    "https://www.concordia.ca/students/success.html",
    
    # Services
    "https://www.concordia.ca/students/services.html",
    "https://www.concordia.ca/students/financial-support.html",
    "https://www.concordia.ca/students/health.html",
    
    # Research
    "https://www.concordia.ca/research.html",
    "https://www.concordia.ca/research/students.html",
    
    # Add more URLs as needed...
]

def build_index():
    store = VectorStore()
    store.add_concordia_pages(urls)
    store.create_index()
    store.save()

if __name__ == "__main__":
    build_index() 