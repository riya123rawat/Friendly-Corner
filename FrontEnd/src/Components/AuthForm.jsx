import React,{useState} from 'react'
import axios from 'axios';
import './AuthForm.css';


function AuthForm() {
    const [isLogin,setIsLogin]=useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('https://localhost:7279/api/auth/login', {
                email,
                password,
            });
            // Handle successful login (e.g., store token, redirect, etc.)
            console.log('Login successful:', response.data);
        } catch (error) {
            setErrorMessage('Login failed. Please check your credentials.');
            console.error('Login error:', error);
        }
    };

    const handleRegister = async () => {
        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match.');
            return;
        }
        try {
            const response = await axios.post('https://localhost:7279/api/auth/register', {
                email,
                password,
            });
            // Handle successful registration (e.g., redirect, show success message, etc.)
            console.log('Registration successful:', response.data);
        } catch (error) {
            setErrorMessage('Registration failed. Please try again.');
            console.error('Registration error:', error);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isLogin) {
            handleLogin();
        } else {
            handleRegister();
        }
    };
    return (
        <div className='container'>
            <div className='form-container'>
                <div className='form-toggle'>
                    <button className={isLogin ? 'active' : ""} onClick={() => setIsLogin(true)}>Logga In</button>
                    <button className={!isLogin ? 'active' : ""} onClick={() => setIsLogin(false)}>Skapa Konto</button>
                </div>
                <form className='form' onSubmit={handleSubmit}>
                    <h2>{isLogin ? 'Logga In' : 'Skapa Konto'}</h2>
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Lösenord"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {!isLogin && (
                        <input
                            type="password"
                            placeholder="Bekräfta Lösenord"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    )}
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                    <button type="submit">{isLogin ? 'Logga In' : 'Skapa Konto'}</button>
                    {isLogin ? (
                        <p>Inte Medlem? <a href='register' onClick={() => setIsLogin(false)}>Skapa konto Now</a></p>
                    ) : (
                        <p>Redan Medlem? <a href='Login' onClick={() => setIsLogin(true)}>Logga In</a></p>
                    )}
                </form>
            </div>
        </div>
       
    );
}

export default AuthForm;