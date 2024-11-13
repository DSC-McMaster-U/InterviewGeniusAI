import React, { useState } from "react";
import { submitUserInput } from "../api.js";
import ResumeContentForm from "./ResumeContentForm"; 
import JobDescriptionForm from "./JobDescriptionForm";

const ResumeUpload = () => {
  const [resumeDetails, setResumeDetails] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get the name of the button that was clicked
    const { name } = e.nativeEvent.submitter;

    let dataToSend; // Declare a variable to hold the data to send

    // Use if statements to determine what data to send
    if (name === "upload-resume") {
        dataToSend = { resumeDetails }; // If the resume button was clicked, send resume data
    } else if (name === "upload-job-description") {
        dataToSend = { jobDescription }; // If the job description button was clicked, send job description data
    }

    try {
        const result = await submitUserInput(dataToSend);
        setResponse(result); // Handle response from the backend
    } catch (error) {
      console.error("Resume upload failed:", error);
    }
  };

  return (
    <div>
      <h1>Upload Resume</h1>
      <form onSubmit={handleSubmit}>
        <ResumeContentForm 
          resumeDetails={resumeDetails}
          setResumeDetails={setResumeDetails} 
        />
        <button type="submit" name="upload-resume">Upload Resume</button>

        <JobDescriptionForm 
          jobDescription={jobDescription}
          setJobDescription={setJobDescription} 
        />
        <button type="submit" name="upload-job-description">Upload Job Description</button>
      </form>
      
      {response && <p>Response from backend: {JSON.stringify(response)}</p>}
    </div>
  );
};

export default ResumeUpload;
