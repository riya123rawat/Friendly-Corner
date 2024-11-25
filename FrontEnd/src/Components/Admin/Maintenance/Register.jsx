import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Register.css';
import UserList from './UserList';

const RegisterPage = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('https://localhost:7177/api/auth/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user');
    const [name, setName] = useState('');
    const [pictureUrl, setPictureUrl] = useState('');
    const [email, setEmail] = useState('');
    const [webUrl, setWebUrl] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://localhost:7177/api/auth/register', { 
                username, password, role, name, pictureUrl, email, webUrl, description 
            });
            alert('User registered successfully');
            fetchUsers(); // Call fetchUsers after registration
            
            // Reset form state 
            setUsername(''); 
            setPassword(''); 
            setRole('user'); 
            setName(''); 
            setPictureUrl(''); 
            setEmail(''); 
            setWebUrl(''); 
            setDescription('');

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
        <>
        <div className='register-wrap'>
            <div className="register-text text">
                <h1>Register new colleagues</h1>
            </div>

            <div className="register-cont">
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
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Picture URL"
                        value={pictureUrl}
                        onChange={(e) => setPictureUrl(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="url"
                        placeholder="Web URL"
                        value={webUrl}
                        onChange={(e) => setWebUrl(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                    <button className='reg-btn' type="submit">Register</button>
                </form>
                <UserList users={users} fetchUsers={fetchUsers} />
            </div>

        </div>
        </>
    );
};

export default RegisterPage;
