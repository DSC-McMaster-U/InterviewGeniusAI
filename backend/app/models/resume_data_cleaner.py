import os
import re
from typing import List, Dict, Union
from dataclasses import dataclass, asdict
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from models.cleaned_data import CleanedData

class ResumeDataCleaner:
    def __init__(self, resume_dir: str, job_desc_dir: str):
        self.resume_dir = resume_dir
        self.job_desc_dir = job_desc_dir
        self.stop_words = set(stopwords.words('english'))

    def load_text_files(self, directory: str) -> List[str]:
        # loads all text files from given directory
        
        texts = []
        for file in os.listdir(directory):
            if file.endswith('.txt'):
                with open(os.path.join(directory, file), 'r', encoding = 'utf-8') as file:
                    texts.append(file.read())
        return texts
    
    def clean_text_file(self, text: str) -> str:
        # Remove special characters and extra white space
        
        text = re.sub(r'\W+', ' ', text)
        text = re.sub(r'\s+', ' ', text).strip()

        # convert text to lowercase for normalization
        text = text.lower()

        #used NLP to remove stop words for more refined output# Optionally remove stopwords
        tokens = word_tokenize(text)
        text = ' '.join([word for word in tokens if word not in self.stop_words])

        return text
    
    def clean_files(self, file_paths: List[str]) -> List[CleanedData]:
        cleaned_data = []
        for text in file_paths:
            cleaned_text = self.clean_text_file(text)
            cleaned_data.append(CleanedData(content=cleaned_text))
        return cleaned_data

    def process_data(self) -> Dict[str, List[Dict[str, str]]]:
        # Load resume and job description text
        resume_texts = self.load_text_files(self.resume_dir)
        job_desc_texts = self.load_text_files(self.job_desc_dir)

        # Clean the text
        cleaned_resumes = [asdict(data) for data in self.clean_files(resume_texts)]
        cleaned_job_descs = [asdict(data) for data in self.clean_files(job_desc_texts)]

        # Return processed data
        return {
            "resumes": cleaned_resumes,
            "job_descriptions": cleaned_job_descs
        }
