import React from 'react';

const AuthenticationForm = ({ 
  username, 
  password, 
  onUsernameChange, 
  onPasswordChange, 
  onSubmit, 
  responseMessage 
}) => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    
    // !!! This code causes runtime errors!!!
    // if (onSubmit) {
    //   onSubmit(); // Invoke the provided onSubmit callback 
    // }
    
  };

  return (
    <div>
      <h2>Authentication</h2>
      {/* Form element with onSubmit event listener */}
      <form onSubmit={handleSubmit}>
        {/* Input field for username */}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={onUsernameChange} // Update username state on input change
          required
        />
        {/* Input field for password */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={onPasswordChange} // Update password state on input change
          required
        />
        <button type="submit">Login</button> {/* Submit button */}
      </form>
      {/* Display response message after form submission */}
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default AuthenticationForm;
