import React, { useState } from 'react';
import { submitUserInput } from './services/apiService';
import AuthenticationForm from './src/AuthenticationForm';

const Authentication = () => {
  // State for managing username, password input fields and the response message
  const [username, setUsername] = useState(''); // Stores the username input
  const [password, setPassword] = useState(''); // Stores the password input
  const [responseMessage, setResponseMessage] = useState(''); // Stores response message from backend

  /**
   * Handles form submission event.
   * Prevents default form submission behavior and sends user input to backend.
   * Updates responseMessage state based on the backend's response.
   * @param {Object} e - The form submission event.
   */
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    
    try {
      // Call API service to send username and password
      const response = await submitUserInput({ username, password });
      
      // Update response message from the backend response, or show a success message
      setResponseMessage(response.message || 'Submitted successfully');
    } catch (error) {
      // Display an error message if API request fails
      setResponseMessage('Failed to submit. Please try again.');
    }
  };

  return (
      <div>
        <h2>Authentication</h2>
        <AuthenticationForm
          username={username}
          password={password}
          onUsernameChange={(e) => setUsername(e.target.value)}
          onPasswordChange={(e) => setPassword(e.target.value)}
          onSubmit={handleSubmit}
          responseMessage={responseMessage} // Display the response message
        />
      </div>
    );
  };
  

export default Authentication;
