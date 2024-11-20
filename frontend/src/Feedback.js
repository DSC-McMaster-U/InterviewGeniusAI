import { submitUserInput } from './api'; 

// Handles the submission of feedback
export const submitFeedback = async (feedback, setResponse) => {
  const userData = { feedback };

  try {
    const result = await submitUserInput(userData); // Send feedback to backend
    setResponse(result); // Set the response in the component state
  } catch (error) {
    console.error('Feedback submission failed:', error); // Catch errors during submission
  }
};
