import React, { useState, useEffect } from 'react';
import { submitUserInput, fetchUserData } from '../api'; // Import backend-related functions
import UserInfo from './UserInfo'; // Ensure the UserInfo component is imported

const Dashboard = () => {
  const [inputText, setInputText] = useState('');
  const [response, setResponse] = useState(null);
  const [userData, setUserData] = useState(null); // State to hold user data
  const [loading, setLoading] = useState(true); // Loading state for user data

  // Fetch user data on component mount
  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await fetchUserData(); // Fetch user data from API
        setUserData(data);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      } finally {
        setLoading(false); // Stop loading after attempt
      }
    };

    getUserData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userInput = { text: inputText };

    try {
      const result = await submitUserInput(userInput);
      setResponse(result); // Handle response from the backend
    } catch (error) {
      console.error('Submission failed:', error);
    }
  };

  return (
    <div>
      <h2>Dashboard</h2>

      {/* User Input Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter some text"
        />
        <button type="submit">Submit</button>
      </form>

      {/* Display response from the backend */}
      {response && <p>Response: {response}</p>}

      {/* Display user data or loading state */}
      {loading ? (
        <p>Loading user data...</p>
      ) : userData ? (
        <UserInfo userData={userData} />
      ) : (
        <p>No user data available.</p>
      )}
    </div>
  );
};

export default Dashboard;
