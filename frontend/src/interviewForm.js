import React, { useState } from 'react';

const InterviewForm = ({ onSubmit }) => {
  const [interviewFeedback, setInterviewFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ feedback: interviewFeedback });  // Send data to component (InterviewSimulation)
    setInterviewFeedback('');  // Clear form after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={interviewFeedback}
        onChange={(e) => setInterviewFeedback(e.target.value)}
        placeholder="Enter your feedback"
        required
      />
      <button type="submit">Submit Feedback</button>
    </form>
  );
};

export default InterviewForm;



