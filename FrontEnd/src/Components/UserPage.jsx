import React from 'react';
import { useNavigate } from 'react-router-dom';

function UserPage() {

    const navigate = useNavigate(); // Initialize useNavigate

    const handleLogout = () => {
        // Clear tokens from both localStorage and sessionStorage
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        
        navigate('/');
    };

    return (
        <div>
            <h1>User Page</h1>
            <p>Welcome, User! You have access to this page.</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default UserPage;