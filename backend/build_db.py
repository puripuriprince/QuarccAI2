from document_loader import create_db

def main():
    print("Creating vector database...")
    try:
        create_db()
        print("Database created successfully!")
    except Exception as e:
        print(f"Error creating database: {str(e)}")
        exit(1)

if __name__ == "__main__":
    main()