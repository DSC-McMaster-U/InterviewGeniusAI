import React, { useState } from "react";

function ResumeUpload() {
  const [resume, setResume] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  const handleResumeUpload = (e) => {
    e.preventDefault();

    // Placeholder logic for submitting resume
    console.log("Resume uploaded:", resume);
  };

  const handleJobUpload = (e) => {
    e.preventDefault();

    // Placeholder logic for submitting job description
    console.log("Job Description uploaded:", jobDescription);
    }

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      if (name === "resume-content") {
        setResume(value);
      } else if (name === "job-description") {
        setJobDescription(value);
      }
    };

    return (
      <div>
        <h2>Resume Upload</h2>
        <form onSubmit={handleResumeUpload}>
          <p> Enter resume context below:</p>
            <textarea
              name="resume-content"
              value={resume}
              onChange={handleInputChange}
              placeholder="Resume Text"
              rows={5}
              cols={40}
            />
          <button type="submit">Upload Resume</button>
        </form>

        <form onSubmit={handleJobUpload}>
          <p> Enter job description below:</p>
            <textarea
              name="job-description"
              value={jobDescription}
              onChange={handleInputChange}
              placeholder="Job Description Text"
              rows={5}
              cols={40}
            />
          <button type="submit">Upload Job Description</button>
      </form>
      </div>
    );
  };

export default ResumeUpload;
