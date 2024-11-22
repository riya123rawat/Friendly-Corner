import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user'); // Default value set to 'user'

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://localhost:7177/api/auth/register', { username, password, role });
            alert('User registered successfully');
            // Redirect to login or handle accordingly
        } catch (error) {
            if (error.response && error.response.status === 400) {
                const errorMessage = error.response.data;
                if (errorMessage === "User already exists") {
                    alert(errorMessage); // Show the specific error message
                } else {
                    alert('Failed to register, please try again.');
                }
            } else {
                console.error('Registration failed', error);
                alert('Registration failed, please try again.');
            }
        }
    };

    return (
        <div className='wrap'>
            <div className="register-text text">
                <h1>Register new colleagues</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <select 
                    value={role} 
                    onChange={(e) => setRole(e.target.value)} 
                    required
                >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>
                <button className='reg-btn' type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterPage;
