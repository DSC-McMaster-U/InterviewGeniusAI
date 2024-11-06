from flask import Flask, request, jsonify
from models.resume_data_cleaner import ResumeDataCleaner
import os
import time

app = Flask(__name__)

# Define the directories for resumes and job descriptions
BASE_DIR = os.path.dirname(os.path.abspath(__file__))  # Get the directory of the current file
DATA_DIR = os.path.join(BASE_DIR, '..', 'data')  # Navigate to the parent directory to reach 'data'
RESUME_DIR = os.path.join(DATA_DIR, 'sample_resumes')  # Directory for sample resumes
JOB_DESC_DIR = os.path.join(DATA_DIR, 'job_descriptions')  # Directory for job descriptions

class DataFetcherAPI:
    def __init__(self):
        self.data_cleaner = ResumeDataCleaner(RESUME_DIR, JOB_DESC_DIR)

    def fetch_data(self):
        # Simulate a network delay
        time.sleep(2)  # Simulates network latency

        # Clean the data
        cleaned_data = self.data_cleaner.process_data()
        
        return cleaned_data

@app.route('/api/clean_data', methods=['POST'])
def clean_data():
    try:
        data = request.json  # Get JSON data from the request
        if not data:
            return jsonify({'error': 'No data provided'}), 400
        
        # Initialize the DataFetcherAPI
        data_fetcher = DataFetcherAPI()

        # Fetch and clean data
        cleaned_results = data_fetcher.fetch_data()

        # Return the cleaned data as JSON
        return jsonify(cleaned_results), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
