import React, { useState, useRef, useContext, useEffect } from 'react';
import axios from 'axios';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import './BackgroundChanger.css';
import { BackgroundContext } from '../../../../context/BackgroundContext';

function BackgroundChanger() {
  const { backgrounds, setBackgrounds } = useContext(BackgroundContext);
  const [selectedImage, setSelectedImage] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const cropperRef = useRef(null);

  useEffect(() => {
    console.log('Selected image:', selectedImage);
    console.log('Image file:', imageFile);
    console.log('Backgrounds:', backgrounds);
  }, [selectedImage, imageFile, backgrounds]);

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedImage(selectedValue);
    console.log(`Selected value: ${selectedValue}`);

    if (selectedValue && backgrounds[selectedValue]) {
      setImageFile(backgrounds[selectedValue]);
    } else {
      setImageFile(null); // Clear the image file if no valid selection
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageFile(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const updateOrPostBackground = async (backgroundType, newImageFile) => {
    try {
      const formData = new FormData();
      formData.append('image', newImageFile); 
      formData.append('backgroundType', backgroundType);
  
      const response = await axios.post('/api/backgroundimage/uploadBackground', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (response.data.newImagePath) {
        console.log(response.data.updated ? 'Background updated successfully' : 'Background posted successfully');
        const updatedBackgrounds = { ...backgrounds, [backgroundType]: response.data.newImagePath };
        setBackgrounds(updatedBackgrounds);
      } else {
        console.error('Failed to post/update background');
      }
    } catch (error) {
      console.error('Error updating or posting background:', error);
    }
  };
  
  const handleUpload = () => {
    if (selectedImage && cropperRef.current && cropperRef.current.cropper) {
      const canvas = cropperRef.current.cropper.getCroppedCanvas();
      canvas.toBlob((blob) => {
        const blobWithExtension = new File([blob], `${selectedImage}.png`, { type: 'image/png' }); // Add file extension
        updateOrPostBackground(selectedImage, blobWithExtension);
      }, 'image/png'); // Specify the MIME type
    }
  };
      
  return (
    <div className="bgd-change-cont">
      <select className="bgd-select" onChange={handleSelectChange}>
        <option value="">Choose a picture</option>
        <option value="background1">Background 1</option>
        <option value="background2">Background 2</option>
        <option value="background3">Background 3</option>
        <option value="background4">Background 4</option>
        <option value="background5">Background 5</option>
      </select>
      {imageFile && (
        <div className="bg-preview">
          <h3>Preview:</h3>
          <Cropper
            src={imageFile}
            style={{ height: 200, width: '100%' }}
            aspectRatio={16 / 9}
            guides={false}
            ref={cropperRef}
            viewMode={1}
            cropBoxResizable={false}
            dragMode="move"
          />
        </div>
      )}
      <input type="file" accept="image/*" id="fileInput" onChange={handleImageChange} />
      <label className="file-label" htmlFor="fileInput">Choose File</label>
      <button className="bgd-change-btn" onClick={handleUpload} disabled={!selectedImage || !imageFile}>Upload</button>
    </div>
  );
}

export default BackgroundChanger;
