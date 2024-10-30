import React, { useState } from 'react';
import { submitUserInput } from './services/apiService';

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
      {/* Form element with onSubmit event listener */}
      <form onSubmit={handleSubmit}>
        {/* Input field for username */}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Update username state on input change
          required
        />
        {/* Input field for password */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update password state on input change
          required
        />
        <button type="submit">Login</button> {/* Submit button */}
      </form>
      {/* Display response message after form submission */}
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default Authentication;
