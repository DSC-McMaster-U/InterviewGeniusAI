import logging
from services.api import DataFetcherAPI

class Orchestrator:
    def process_data(self, cleaned_resumes, cleaned_job_descriptions):
        logging.info(f"Processing {len(cleaned_resumes)} resumes and {len(cleaned_job_descriptions)} job descriptions.")
        # Add additional processing logic here
        for resume in cleaned_resumes:
            logging.info(f"Cleaned Resume: {resume['content']}")
        for job_desc in cleaned_job_descriptions:
            logging.info(f"Cleaned Job Description: {job_desc['content']}")

def main():
    logging.basicConfig(level=logging.INFO)

    api = DataFetcherAPI()
    try:
        data = api.fetch_data()
        if 'resumes' in data and 'job_descriptions' in data:
            cleaned_resumes = data['resumes']
            cleaned_job_descriptions = data['job_descriptions']

            logging.info(f"Fetched data successfully: {len(cleaned_resumes)} resumes and {len(cleaned_job_descriptions)} job descriptions.")

            orchestrator = Orchestrator()
            orchestrator.process_data(cleaned_resumes, cleaned_job_descriptions)
        else:
            logging.error("Fetched data does not contain expected keys.")
    except Exception as e:
        logging.error("Error fetching data: %s", e)

if __name__ == "__main__":
    main()
