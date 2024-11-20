import React, { useState } from 'react';
import { submitFeedback } from './Feedback'; 

const InterviewSimulation = () => {
  const [interviewFeedback, setInterviewFeedback] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    submitFeedback(interviewFeedback, setResponse);
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
