import React from "react";

const JobDescriptionForm = ({ jobDescription, setJobDescription }) => {
  return (
    <div>
      <p>Enter job description below:</p>
      <textarea
        name="job-description"
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        placeholder="Job Description"
        required
        rows={5}
        cols={40}
      />
    </div>
  );
};

export default JobDescriptionForm;
