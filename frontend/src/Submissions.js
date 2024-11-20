import { submitUserInput } from '../api'; 

// Handles the submission of either resume or job description data
export const submitResumeOrJobDescription = async (data, setResponse) => {
  try {
    const result = await submitUserInput(data);
    setResponse(result); // Handle response from the backend
} catch (error) {
    console.error('Upload failed:', error); 
  }
};
