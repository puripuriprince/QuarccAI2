import requests
import logging
import json

logger = logging.getLogger(__name__)

class CourseAPI:
    BASE_URL = "https://concordia-courses-production.up.railway.app"
    
    @staticmethod
    def search(query, limit=5):
        """
        Search courses using the course search endpoint.
        
        Args:
            query (str): The search query
            limit (int): Maximum number of results to return (default: 3)
            
        Returns:
            dict: Response object with status and payload, or None if error
        """
        try:
            print("\n========== Course Search Debug ==========")
            print(f"Query: '{query}'")
            print(f"Limit: {limit}")
            
            url = f"{CourseAPI.BASE_URL}/api/v1/search/course"
            print(f"URL: {url}")
            
            params = {
                "query": query,
                "limit": limit
            }
            headers = {
                'Accept': 'application/json'
            }
            
            print(f"\nRequest Parameters: {json.dumps(params, indent=2)}")
            print(f"Request Headers: {json.dumps(headers, indent=2)}")
            
            response = requests.get(url, params=params, headers=headers)
            
            print(f"\nResponse Status: {response.status_code}")
            print(f"Response Headers: {json.dumps(dict(response.headers), indent=2)}")
            
            try:
                result = response.json()
                print(f"\nRaw Response Body:")
                print(json.dumps(result, indent=2))
            except json.JSONDecodeError:
                print(f"\nInvalid JSON Response. Raw Text:")
                print(response.text)
                return []
            
            response.raise_for_status()
            
            if result.get('status') == 'OK' and isinstance(result.get('payload'), list):
                courses = result['payload']
                print(f"\nFound {len(courses)} courses:")
                for i, course in enumerate(courses, 1):
                    print(f"\nCourse {i} Details:")
                    print(json.dumps(course, indent=2))
                return courses
            else:
                print(f"\nUnexpected response format:")
                print(json.dumps(result, indent=2))
                return []
                
        except requests.RequestException as e:
            print(f"\nRequest Error: {str(e)}")
            return []
        except Exception as e:
            print(f"\nUnexpected Error: {str(e)}")
            print(f"Error Type: {type(e)}")
            import traceback
            print(f"Traceback:\n{traceback.format_exc()}")
            return []
        finally:
            print("\n========== End Course Search Debug ==========\n")
