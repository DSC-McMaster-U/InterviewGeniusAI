from models.model import ResumeDataCleaner
from prompt import PromptAppender

def main():
    # Paths for resumes, job descriptions, and the prompt file
    resume_dir = 'data/sample_resumes/'
    job_desc_dir = 'data/job_descriptions/'
    prompt_file = 'data/prompt.txt'

    cleaner = ResumeDataCleaner(resume_dir, job_desc_dir)
    
    cleaned_data = cleaner.process_data()

    prompt_appender = PromptAppender(cleaned_data, prompt_file)
    
    # Append the prompt to the cleaned data
    final_data = prompt_appender.append_prompt()
    
    # Print the final appended data for verification
    print("Final Appended Resumes:")
    for resume in final_data['resumes']:
        print(resume)
    
    print("\nFinal Appended Job Descriptions:")
    for job_desc in final_data['job_descriptions']:
        print(job_desc)

if __name__ == '__main__':
    main()