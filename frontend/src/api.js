import axios from 'axios';

const API_URL = 'http://localhost:3000/api/submit'; // backend URL for submitting user input
const USER_DATA_URL = 'http://localhost:3000/api/user-data'; // backend URL for fetching user data

/**
 * Submits user input data to the backend.
 * @param {Object} userData - The user input data to be sent, e.g., { username, password }.
 * @returns {Promise<Object>} - The response data from the backend.
 * @throws Will throw an error if the request fails.
 */
export const submitUserInput = async (userData) => {
  try {
    const response = await axios.post(API_URL, userData);
    return response.data;
  } catch (error) {
    console.error('Error submitting user input:', error);
    throw error;
  }
};

/**
 * Fetches user data from the backend.
 * @returns {Promise<Object>} - The fetched user data from the backend.
 * @throws Will throw an error if the request fails.
 */
export const fetchUserData = async () => {
  try {
    const response = await axios.get(USER_DATA_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};
