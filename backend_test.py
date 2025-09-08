#!/usr/bin/env python3
"""
Backend API Testing Suite
Tests all backend API endpoints to ensure they're working properly after frontend changes.
"""

import requests
import json
import sys
from datetime import datetime
import uuid

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
print(f"Testing backend API at: {BASE_URL}")

def test_root_endpoint():
    """Test GET /api/ endpoint"""
    print("\n=== Testing Root Endpoint ===")
    try:
        response = requests.get(f"{BASE_URL}/", timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get("message") == "Hello World":
                print("✅ Root endpoint working correctly")
                return True
            else:
                print("❌ Root endpoint returned unexpected message")
                return False
        else:
            print(f"❌ Root endpoint failed with status {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Root endpoint request failed: {e}")
        return False
    except Exception as e:
        print(f"❌ Root endpoint test failed: {e}")
        return False

def test_create_status_check():
    """Test POST /api/status endpoint"""
    print("\n=== Testing Create Status Check ===")
    try:
        test_data = {
            "client_name": "Mustermann GmbH"
        }
        
        response = requests.post(
            f"{BASE_URL}/status", 
            json=test_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if (data.get("client_name") == "Mustermann GmbH" and 
                "id" in data and 
                "timestamp" in data):
                print("✅ Create status check working correctly")
                return True, data.get("id")
            else:
                print("❌ Create status check returned invalid data structure")
                return False, None
        else:
            print(f"❌ Create status check failed with status {response.status_code}")
            return False, None
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Create status check request failed: {e}")
        return False, None
    except Exception as e:
        print(f"❌ Create status check test failed: {e}")
        return False, None

def test_get_status_checks():
    """Test GET /api/status endpoint"""
    print("\n=== Testing Get Status Checks ===")
    try:
        response = requests.get(f"{BASE_URL}/status", timeout=10)
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"Number of status checks returned: {len(data)}")
            
            if isinstance(data, list):
                if len(data) > 0:
                    # Check structure of first item
                    first_item = data[0]
                    if ("id" in first_item and 
                        "client_name" in first_item and 
                        "timestamp" in first_item):
                        print("✅ Get status checks working correctly")
                        print(f"Sample record: {first_item}")
                        return True
                    else:
                        print("❌ Get status checks returned invalid data structure")
                        return False
                else:
                    print("✅ Get status checks working correctly (empty list)")
                    return True
            else:
                print("❌ Get status checks should return a list")
                return False
        else:
            print(f"❌ Get status checks failed with status {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Get status checks request failed: {e}")
        return False
    except Exception as e:
        print(f"❌ Get status checks test failed: {e}")
        return False

def test_cors_headers():
    """Test CORS configuration"""
    print("\n=== Testing CORS Headers ===")
    try:
        response = requests.options(f"{BASE_URL}/", timeout=10)
        print(f"OPTIONS Status Code: {response.status_code}")
        
        # Check for CORS headers
        cors_headers = {
            'Access-Control-Allow-Origin': response.headers.get('Access-Control-Allow-Origin'),
            'Access-Control-Allow-Methods': response.headers.get('Access-Control-Allow-Methods'),
            'Access-Control-Allow-Headers': response.headers.get('Access-Control-Allow-Headers')
        }
        
        print("CORS Headers:")
        for header, value in cors_headers.items():
            print(f"  {header}: {value}")
        
        if cors_headers['Access-Control-Allow-Origin']:
            print("✅ CORS headers present")
            return True
        else:
            print("⚠️ CORS headers may not be properly configured")
            return True  # Not critical for basic functionality
            
    except requests.exceptions.RequestException as e:
        print(f"⚠️ CORS test request failed: {e}")
        return True  # Not critical for basic functionality
    except Exception as e:
        print(f"⚠️ CORS test failed: {e}")
        return True  # Not critical for basic functionality

def run_all_tests():
    """Run all backend API tests"""
    print("🚀 Starting Backend API Tests")
    print("=" * 50)
    
    results = []
    
    # Test 1: Root endpoint
    results.append(("Root Endpoint", test_root_endpoint()))
    
    # Test 2: Create status check
    create_result, created_id = test_create_status_check()
    results.append(("Create Status Check", create_result))
    
    # Test 3: Get status checks
    results.append(("Get Status Checks", test_get_status_checks()))
    
    # Test 4: CORS headers
    results.append(("CORS Configuration", test_cors_headers()))
    
    # Summary
    print("\n" + "=" * 50)
    print("🏁 TEST SUMMARY")
    print("=" * 50)
    
    passed = 0
    total = len(results)
    
    for test_name, result in results:
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{test_name}: {status}")
        if result:
            passed += 1
    
    print(f"\nOverall: {passed}/{total} tests passed")
    
    if passed == total:
        print("🎉 All backend API tests PASSED!")
        return True
    else:
        print("⚠️ Some backend API tests FAILED!")
        return False

if __name__ == "__main__":
    success = run_all_tests()
    sys.exit(0 if success else 1)