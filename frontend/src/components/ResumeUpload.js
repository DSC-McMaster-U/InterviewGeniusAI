import React, { useState } from 'react';
import { submitUserInput } from './api';

const ResumeUpload = () => {
  const [resumeDetails, setResumeDetails] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { resumeDetails }; // Prepare your data

    try {
      const result = await submitUserInput(userData);
      setResponse(result); // Handle response from the backend
    } catch (error) {
      console.error('Resume upload failed:', error);
    }
  };

  return (
    <div>
      <h1>Upload Resume</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={resumeDetails}
          onChange={(e) => setResumeDetails(e.target.value)}
          placeholder="Enter resume details"
          required
        />
        <button type="submit">Upload Resume</button>
      </form>
      {response && <p>Response from backend: {JSON.stringify(response)}</p>}
    </div>
  );
};

export default ResumeUpload;
