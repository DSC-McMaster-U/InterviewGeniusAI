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
      <h1>Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter your text"
          required
        />
        <button type="submit">Submit</button>
      </form>
      {response && <p>Response from backend: {JSON.stringify(response)}</p>}
    </div>
  );
};

export default Dashboard;
