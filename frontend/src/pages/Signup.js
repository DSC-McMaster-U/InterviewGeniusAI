const Signup = ({onSignup}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSignup = (e) => {
        e.preventDefault();
        // Placeholder logic for signup
        console.log('Signing up with:', email, password);
    };

    return (
        <div>
            <h2>Authentication</h2>
            <form onSubmit={handleSignup}>
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
                <button type="button" onClick={handleSignup}>Sign Up</button>
            </form>
        </div>
    );
};