import React, { useState } from 'react';
import { submitUserInput } from './api';

const InterviewSimulation = () => {
  const [interviewFeedback, setInterviewFeedback] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { feedback: interviewFeedback };

    try {
      const result = await submitUserInput(userData);
      setResponse(result); // Handle response from the backend
    } catch (error) {
      console.error('Feedback submission failed:', error);
    }
  };

  return (
    <div>
      <h1>Interview Simulation</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={interviewFeedback}
          onChange={(e) => setInterviewFeedback(e.target.value)}
          placeholder="Enter your feedback"
          required
        />
        <button type="submit">Submit Feedback</button>
      </form>
      {response && <p>Response from backend: {JSON.stringify(response)}</p>}
    </div>
  );
};

export default InterviewSimulation;
