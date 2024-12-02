import React, { useEffect, useState, useRef } from 'react';
import './UserList.css';
import axios from 'axios';
import { GrClose, GrCheckmark, GrTrash, GrUpdate } from "react-icons/gr";
import ConfirmationDialog from '../ConfirmationDialog'; // Dialog component
import Modal from './UserModal'; // Modal component
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

import { BASE_URL } from '../../../config';  // Import the base URL

const UserList = () => {
    const [editId, setEditId] = useState(null);
    const [editData, setEditData] = useState({
        username: '',
        email: '',
        name: '',
        pictureUrl: '',
        webUrl: '',
        description: '',
        password: ''
    });
    const [users, setUsers] = useState([]);
    const [showDialog, setShowDialog] = useState(false);
    const [deleteUserId, setDeleteUserId] = useState(null);
    const [alert, setAlert] = useState({ message: '', show: false });
    const [showModal, setShowModal] = useState(false);
    const [modalImageUrl, setModalImageUrl] = useState('');
    const [newImageFile, setNewImageFile] = useState(null);
    const cropperRef = useRef(null);

    const fetchUsers = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/api/auth/users`);
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const showAlert = (message) => {
        setAlert({ message, show: true });
        setTimeout(() => {
            setAlert({ message: '', show: false });
        }, 5000); // Hide the alert after 5 seconds
    };

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`${BASE_URL}/api/auth/delete/${id}`);
            if (response.status === 200) {
                fetchUsers();
                showAlert('User deleted successfully');
            } else {
                showAlert('Failed to delete user, please try again.');
            }
        } catch (error) {
            console.error('Error deleting user:', error);
            showAlert('Failed to delete user, please try again.');
        }
    };

    const handleConfirmDelete = () => {
        if (deleteUserId !== null) {
            handleDelete(deleteUserId);
            setShowDialog(false);
            setDeleteUserId(null);
        }
    };

    const handleCancelDelete = () => {
        setShowDialog(false);
        setDeleteUserId(null);
    };

    const handleDeleteClick = (id) => {
        setDeleteUserId(id);
        setShowDialog(true);
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
            let updatedPictureUrl = editData.pictureUrl;
            if (cropperRef.current && cropperRef.current.cropper) {
                const canvas = cropperRef.current.cropper.getCroppedCanvas({
                    width: 200, // max width
                    height: 300, // max height (200 * 3/2 aspect ratio)
                });

                canvas.toBlob(async (blob) => {
                    const formData = new FormData();
                    formData.append('image', blob, `${editData.username}.png`);
                    const uploadResponse = await axios.post(`${BASE_URL}/api/auth/uploadProfileImage`, formData);
                    updatedPictureUrl = `${BASE_URL}/${uploadResponse.data.path}`;
                    await updateUser(id, updatedPictureUrl);
                });
            } else {
                await updateUser(id, updatedPictureUrl);
            }
        } catch (error) {
            console.error('Error updating user:', error);
            showAlert('Failed to update user, please try again.');
        }
    };

    const updateUser = async (id, imagePath) => {
        await axios.put(`${BASE_URL}/api/auth/update/${id}`, { ...editData, pictureUrl: imagePath }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        fetchUsers();
        setEditId(null);
        showAlert('User updated successfully');
    };

    const handleImageClick = (url) => {
        const baseUrl = `${BASE_URL}`;
        setModalImageUrl(`${url}`);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setModalImageUrl('');
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewImageFile(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    
    return (
        <div className="user-list">
            <div className="user-text text">
                <h1>Registered Users</h1>
                {alert.show && <div className="alert">{alert.message}</div>}
            </div>
            <table className='user-tbl'>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Picture</th> {/* Updated to show the picture */}
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
                                    <td className='picture-btns'>
                                        {/* <input type="text" name="pictureUrl" value={editData.pictureUrl} onChange={handleEditChange} className="input-field" /> */}
                                        <input type="file" accept="image/*" id="fileInput" onChange={handleImageChange} />
                                        <label htmlFor="fileInput" className="update-file-input-label">Change Picture</label>
                                        {newImageFile && (
                                            <Cropper
                                                className='cropper'
                                                src={newImageFile}
                                                style={{ height: '200px', width: '300px' }}
                                                aspectRatio={2 / 3}
                                                guides={true}
                                                ref={cropperRef}
                                                viewMode={1}
                                                cropBoxResizable={false}
                                                dragMode="move"
                                            />
                                        )}
                                    </td>
                                    <td><input type="text" name="webUrl" value={editData.webUrl} onChange={handleEditChange} className="input-field" /></td>
                                    <td><input type="text" name="description" value={editData.description} onChange={handleEditChange} className="input-field" /></td>
                                    <td className="sticky-column">
                                        <input type="text" name="password" placeholder="New Password" value={editData.password} onChange={handleEditChange} className="input-field" /><br/>
                                        <button className='user-btn update' onClick={() => handleUpdate(user.id)}><GrCheckmark /></button> {/* Save Icon */}
                                        <button className='user-btn cancel' onClick={() => setEditId(null)}><GrClose /></button>
                                    </td>
                                </>
                            ) : (
                                <>
                                    <td>{user.username || "N/A"}</td>
                                    <td>{user.email || "N/A"}</td>
                                    <td>{user.name || "N/A"}</td>
                                    <td>
                                        {/* {user.pictureUrl} */}
                                        <button className='user-btn view' onClick={() => handleImageClick(user.pictureUrl)}>View</button>
                                    </td>
                                    <td>{user.webUrl || "N/A"}</td>
                                    <td>{user.description || "N/A"}</td>
                                    <td className="sticky-column">
                                        <button className='user-btn edit' onClick={() => handleEditClick(user)}><GrUpdate /></button> {/* Edit Icon */}
                                        <button className='user-btn delete' onClick={() => handleDeleteClick(user.id)}><GrTrash /></button> {/* Delete Icon */}
                                    </td>
                                </>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
            <ConfirmationDialog
                show={showDialog}
                message="Are you sure you want to delete this user?"
                onConfirm={handleConfirmDelete}
                onCancel={handleCancelDelete}
            />
            <Modal show={showModal} onClose={closeModal}>
                <img src={modalImageUrl} alt="User" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </Modal>
        </div>
    );
};

export default UserList;
