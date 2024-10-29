import os

class PromptAppender:
    def __init__(self, cleaned_data: dict, prompt_file: str):
        self.cleaned_data = cleaned_data
        self.prompt_file = prompt_file

    def load_prompt(self) -> str:
        # Load the prompt text from the file
        if not os.path.exists(self.prompt_file):
            raise FileNotFoundError(f"Prompt file not found: {self.prompt_file}")
        
        with open(self.prompt_file, 'r', encoding='utf-8') as file:
            return file.read().strip()

    def append_prompt(self) -> dict:
        prompt_text = self.load_prompt()
        
        # Combine cleaned resumes and job descriptions with the prompt
        combined_data = {
            "resumes": [],
            "job_descriptions": []
        }
        
        for resume in self.cleaned_data['resumes']:
            combined_data['resumes'].append(resume['content'] + " " + prompt_text)

        for job_desc in self.cleaned_data['job_descriptions']:
            combined_data['job_descriptions'].append(job_desc['content'] + " " + prompt_text)

        return combined_data