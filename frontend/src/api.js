import axios from 'axios';

const API_URL = 'http://localhost:3000/api/submit'; // backend URL for the API endpoint

/**
 * Submits user input data to the backend.
 * @param {Object} userData - The user input data to be sent, e.g., { username, password }.
 * @returns {Promise<Object>} - The response data from the backend.
 * @throws Will throw an error if the request fails.
 */
export const submitUserInput = async (userData) => {
  try {
    // Send a POST request with userData using Axios
    const response = await axios.post(API_URL, userData);
    
    // Return the response data from the backend for further processing in the component
    return response.data;
  } catch (error) {
    // Log the error to the console for debugging purposes
    console.error('Error submitting user input:', error);
    
    // Rethrow the error so that it can be handled by the calling component
    throw error;
  }
};
