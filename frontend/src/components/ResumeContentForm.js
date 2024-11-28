import React from "react";

const ResumeContentForm = ({ resumeDetails, setResumeDetails }) => {
  return (
    <div>
      <p>Enter resume content below:</p>
      <textarea
        name="resume-content"
        value={resumeDetails}
        onChange={(e) => setResumeDetails(e.target.value)}
        placeholder="Resume Details"
        required
        rows={5}
        cols={40}
      />
    </div>
  );
};

export default ResumeContentForm;
