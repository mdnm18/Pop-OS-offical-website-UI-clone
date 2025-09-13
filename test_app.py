import requests
from bs4 import BeautifulSoup
import time

# Give the server a moment to start up
time.sleep(5)

URL = "http://localhost:8080"


def test_website_loads():
    """Tests if the website loads and returns a 200 OK status."""
    try:
        response = requests.get(URL)
        # Assert that the status code is 200 (OK)
        assert response.status_code == 200
        print("✅ SUCCESS: Website loaded successfully (Status 200 OK).")
    except requests.ConnectionError as e:
        assert False, f"🔥 FAILURE: Could not connect to the server. Error: {e}"


def test_website_title():
    """Tests if the website has the correct title."""
    try:
        response = requests.get(URL)
        soup = BeautifulSoup(response.content, "html.parser")
        expected_title = "Pop!_OS by System76"
        # Assert that the <title> tag contains the expected text
        assert soup.title.string == expected_title
        print(f"✅ SUCCESS: Website title is correct: '{soup.title.string}'.")
    except Exception as e:
        assert False, f"🔥 FAILURE: Could not verify the title. Error: {e}"


# Run the tests
test_website_loads()
test_website_title()
