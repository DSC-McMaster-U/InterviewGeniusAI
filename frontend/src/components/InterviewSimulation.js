import React, { useState } from 'react';
import { submitUserInput } from '../api';
import InterviewForm from './interviewForm';

const InterviewSimulation = () => {
  const [response, setResponse] = useState(null);

  const submitUserData = async (userData) => {
    try {
      const result = await submitUserInput(userData); 
      setResponse(result);
    } catch (error) {
      console.error('Feedback submission failed:', error);
    }
  };

  return (
    <div>
      <h1>Interview Simulation</h1>
      <InterviewForm onSubmit={submitUserData} />  
      {response && <p>Response from backend: {JSON.stringify(response)}</p>}
    </div>
  );
};

export default InterviewSimulation;
