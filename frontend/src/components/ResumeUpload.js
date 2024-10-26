import React, { useState } from 'react';

function ResumeUpload() {
    const [resume, setResume] = useState(null);
    const [preview, setPreview] = useState('');

    const handleResumeUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setResume(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder logic for submitting resume
        console.log('Resume uploaded:', resume.name);
    };

    return (
        <div>
            <h2>Resume Upload</h2>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleResumeUpload} />
                <button type="submit">Upload Resume</button>
            </form>
            {preview && (
                <div>
                    <h3>Resume Preview:</h3>
                    <iframe 
                        src={preview} 
                        title="Resume Preview" 
                        style={{ width: '100%', height: '500px' }}
                    />
                </div>
            )}
        </div>
    );
}

export default ResumeUpload;
