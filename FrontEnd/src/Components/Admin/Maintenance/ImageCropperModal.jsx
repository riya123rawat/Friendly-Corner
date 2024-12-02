import React from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import './Modal.css';

const ImageCropperModal = ({ show, onClose, onSave, image, cropperRef }) => {
    if (!show) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <Cropper
                    className='cropper'
                    src={image}
                    style={{ height: '300px', width: '200px' }}
                    aspectRatio={2 / 3}
                    guides={true}
                    ref={cropperRef}
                    viewMode={1}
                    cropBoxResizable={false}
                    dragMode="move"
                />
                <div className="modal-buttons">
                    <button className="modal-button" onClick={onSave}>OK</button>
                    <button className="modal-button" onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default ImageCropperModal;
