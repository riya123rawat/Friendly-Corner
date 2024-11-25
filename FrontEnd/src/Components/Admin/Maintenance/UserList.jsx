import React, { useState } from 'react';
import './UserList.css';
import axios from 'axios';
import { FaTrash, FaSave } from 'react-icons/fa';
import { GrUpdate } from "react-icons/gr";

const UserList = ({ users, fetchUsers }) => {
    const [editId, setEditId] = useState(null);
    const [editData, setEditData] = useState({
        username: '',
        email: '',
        name: '',
        pictureUrl: '',
        webUrl: '',
        description: '',
        password: '' // New field for password
    });

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`https://localhost:7177/api/auth/delete/${id}`);
            if (response.status === 200) {
                fetchUsers();
                alert('User deleted successfully');
            } else {
                alert('Failed to delete user, please try again.');
            }
        } catch (error) {
            console.error('Error deleting user:', error);
            alert('Failed to delete user, please try again.');
        }
    };

    const handleEditClick = (user) => {
        setEditId(user.id);
        setEditData({
            username: user.username,
            email: user.email,
            name: user.name,
            pictureUrl: user.pictureUrl,
            webUrl: user.webUrl,
            description: user.description,
            password: '' // Initialize password field
        });
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditData({
            ...editData,
            [name]: value
        });
    };

    const handleUpdate = async (id) => {
        try {
            const response = await axios.put(`https://localhost:7177/api/auth/update/${id}`, editData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.status === 200) {
                fetchUsers();
                setEditId(null);
                alert('User updated successfully');
            } else {
                alert('Failed to update user, please try again.');
            }
        } catch (error) {
            console.error('Error updating user:', error);
            alert('Failed to update user, please try again.');
        }
    };

    return (
        <div className="user-list cont">
            <h2>Registered Users</h2>
            <table className='user-tbl'>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Picture URL</th>
                        <th>Web URL</th>
                        <th>Description</th>
                        <th className="sticky-column">Actions</th>
                    </tr>
                </thead>
                <tbody className='user-bdy'>
                    {users.map(user => (
                        <tr key={user.id} className={editId === user.id ? "editing" : ""}>
                            {editId === user.id ? (
                                <>
                                    <td><input type="text" name="username" value={editData.username} onChange={handleEditChange} className="input-field" /></td>
                                    <td><input type="email" name="email" value={editData.email} onChange={handleEditChange} className="input-field" /></td>
                                    <td><input type="text" name="name" value={editData.name} onChange={handleEditChange} className="input-field" /></td>
                                    <td><input type="text" name="pictureUrl" value={editData.pictureUrl} onChange={handleEditChange} className="input-field" /></td>
                                    <td><input type="text" name="webUrl" value={editData.webUrl} onChange={handleEditChange} className="input-field" /></td>
                                    <td><input type="text" name="description" value={editData.description} onChange={handleEditChange} className="input-field" /></td>
                                    <td className="sticky-column">
                                        <input type="password" name="password" placeholder="New Password" value={editData.password} onChange={handleEditChange} className="input-field" /><br/>
                                        <button className='user-btn update' onClick={() => handleUpdate(user.id)}><FaSave /></button> {/* Save Icon */}
                                        <button className='user-btn cancel' onClick={() => setEditId(null)}>Cancel</button>
                                    </td>
                                </>
                            ) : (
                                <>
                                    <td>{user.username || "N/A"}</td>
                                    <td>{user.email || "N/A"}</td>
                                    <td>{user.name || "N/A"}</td>
                                    <td>{user.pictureUrl || "N/A"}</td>
                                    <td>{user.webUrl || "N/A"}</td>
                                    <td>{user.description || "N/A"}</td>
                                    <td className="sticky-column">
                                        <button className='user-btn edit' onClick={() => handleEditClick(user)}><GrUpdate /></button> {/* Edit Icon */}
                                        <button className='user-btn delete' onClick={() => handleDelete(user.id)}><FaTrash /></button> {/* Delete Icon */}
                                    </td>
                                </>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
