import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

function Authentication() {
    const [isLogin, setIsLogin] = useState(true);

    const handleToggle = () => {
        setIsLogin(!isLogin);
    };

    const handleLogin = (e) => {
        console.log('Logging in with:', email, password); //placeholder logic for login api call
    };

    const handleSignup = (e) => {
        // Placeholder logic for signup
        console.log('Signing up with:', email, password);
    };

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     if (name === 'email') {
    //         setEmail(value);
    //     } else if (name === 'password') {
    //         setPassword(value);
    //     }
    // };

    return (
        <div>
            <h2>Authentication</h2>
            {isLogin ? (
                <LoginForm onLogin={handleLogin} />
            ) : (
                <SignupForm onSignup={handleSignup} />
            )}
            <button onClick={handleToggle}>
                {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
            </button>
        </div>
    );
}

export default Authentication;
