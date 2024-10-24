import React, { useState } from 'react';

function Authentication() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Placeholder logic for login
        console.log('Logging in with:', email, password);
    };

    const handleSignup = (e) => {
        e.preventDefault();
        // Placeholder logic for signup
        console.log('Signing up with:', email, password);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    return (
        <div>
            <h2>Authentication</h2>
            <form onSubmit={handleLogin}>
                <input 
                    type="email" 
                    name="email" 
                    value={email} 
                    onChange={handleInputChange} 
                    placeholder="Email"
                />
                <input 
                    type="password" 
                    name="password" 
                    value={password} 
                    onChange={handleInputChange} 
                    placeholder="Password"
                />
                <button type="submit">Login</button>
                <button type="button" onClick={handleSignup}>Sign Up</button>
            </form>
        </div>
    );
}

export default Authentication;
