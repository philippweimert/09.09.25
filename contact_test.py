#!/usr/bin/env python3
"""
Contact Form Testing
Tests the contact form email functionality specifically.
"""

import requests
import json
import sys

# Get backend URL from frontend .env file
def get_backend_url():
    try:
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    base_url = line.split('=')[1].strip()
                    return f"{base_url}/api"
        return "https://acencia-redesign-1.preview.emergentagent.com/api"
    except Exception as e:
        print(f"Error reading frontend .env: {e}")
        return "https://acencia-redesign-1.preview.emergentagent.com/api"

BASE_URL = get_backend_url()
print(f"Testing contact form at: {BASE_URL}")

def test_contact_form():
    """Test POST /api/contact endpoint"""
    print("\n=== Testing Contact Form Submission ===")
    try:
        test_data = {
            "name": "Max Mustermann",
            "email": "max.mustermann@example.com",
            "company": "Mustermann GmbH",
            "phone": "+49 123 456789",
            "message": "Dies ist eine Testnachricht für die Kontaktformular-Funktionalität."
        }
        
        response = requests.post(
            f"{BASE_URL}/contact", 
            json=test_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if (data.get("status") == "success" and 
                "message" in data):
                print("✅ Contact form submission working correctly")
                return True
            else:
                print("❌ Contact form returned unexpected response structure")
                return False
        else:
            print(f"❌ Contact form failed with status {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Contact form request failed: {e}")
        return False
    except Exception as e:
        print(f"❌ Contact form test failed: {e}")
        return False

if __name__ == "__main__":
    success = test_contact_form()
    sys.exit(0 if success else 1)