import logging
from models.resume_data_cleaner import ResumeDataCleaner
from prompt import PromptAppender

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

def main():
    # Paths for resumes, job descriptions, and the prompt file
    resume_dir = 'data/sample_resumes/'
    job_desc_dir = 'data/job_descriptions/'
    prompt_file = 'data/prompt.txt'

    # Create an instance of ResumeDataCleaner
    cleaner = ResumeDataCleaner(resume_dir, job_desc_dir)
    cleaned_data = cleaner.process_data()

    # Create an instance of PromptAppender 
    prompt_appender = PromptAppender(cleaned_data, prompt_file)
    final_data = prompt_appender.append_prompt()
    
    # Log the final appended data for verification
    logging.info("Final Appended Resumes:")
    for resume in final_data['resumes']:
        logging.info(resume)
    
    logging.info("\nFinal Appended Job Descriptions:")
    for job_desc in final_data['job_descriptions']:
        logging.info(job_desc)

if __name__ == '__main__':
    main()
