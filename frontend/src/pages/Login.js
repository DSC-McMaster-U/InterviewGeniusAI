const Login = ({onLogin}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
}   
    const handleLogin = (e) => {
        e.preventDefault();
        // Placeholder logic for login
        console.log('Logging in with:', email, password);
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
            </form>
        </div>
    );

export default Login