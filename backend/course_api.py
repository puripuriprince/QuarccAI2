import requests
import logging
import json
import re

logger = logging.getLogger(__name__)

class CourseAPI:
    BASE_URL = "https://concordia-courses-production.up.railway.app"
    
    @staticmethod
    def parse_course_code(query):
        """Parse course code from query (e.g., 'COMP 352' -> 'COMP352')"""
        # Match pattern like "COMP 352" or "COMP352"
        pattern = r'([A-Za-z]+)\s*(\d{3})'
        match = re.search(pattern, query.upper())
        if match:
            return f"{match.group(1)}{match.group(2)}"
        return None
    
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
            
            # Parse course code if present
            course_id = CourseAPI.parse_course_code(query)
            if course_id:
                print(f"Detected course code: {course_id}")
                
                # Use the direct course endpoint
                url = f"{CourseAPI.BASE_URL}/api/v1/courses/{course_id}"
                headers = {
                    'Accept': 'application/json'
                }
                
                print(f"\nRequest URL: {url}")
                
                response = requests.get(url, headers=headers)
                print(f"\nResponse Status: {response.status_code}")
                
                try:
                    result = response.json()
                    print(f"\nRaw Response Body:")
                    print(json.dumps(result, indent=2))
                    
                    if result.get('status') == 'OK' and result.get('payload'):
                        print(f"\nFound exact match for {course_id}")
                        return [result['payload']]  # Return as list for consistency
                    
                    print(f"\nNo exact match found for {course_id}")
                    
                except json.JSONDecodeError:
                    print(f"\nInvalid JSON Response. Raw Text:")
                    print(response.text)
                    return []
            
            # Fall back to general search if no course code or exact match not found
            url = f"{CourseAPI.BASE_URL}/api/v1/search/course"
            params = {
                "query": query,
                "limit": limit
            }
            headers = {
                'Accept': 'application/json'
            }
            
            print(f"\nFalling back to search endpoint")
            print(f"URL: {url}")
            print(f"Parameters: {json.dumps(params, indent=2)}")
            
            response = requests.get(url, params=params, headers=headers)
            print(f"\nResponse Status: {response.status_code}")
            
            try:
                result = response.json()
                if result.get('status') == 'OK' and isinstance(result.get('payload'), list):
                    courses = result['payload']
                    print(f"\nFound {len(courses)} courses in search")
                    return courses[:limit]
            except:
                return []
            
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
