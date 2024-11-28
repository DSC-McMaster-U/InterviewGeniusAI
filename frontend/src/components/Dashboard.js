import React, { useState } from 'react';
import { submitUserInput } from '../api';
const Dashboard = () => {
  const [inputText, setInputText] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { text: inputText };

    try {
      const result = await submitUserInput(userData);
      setResponse(result); // Handle response from the backend
    } catch (error) {
      console.error('Submission failed:', error);
    }
  };

    return (
        <div>
            <h2>Dashboard</h2>
            {/* If userData exists, pass it to UserInfo component */}
            {userData ? (
                <UserInfo userData={userData} />
            ) : (
                <p>Loading user data...</p>  
            )}
        </div>
    );
}

export default Dashboard;
