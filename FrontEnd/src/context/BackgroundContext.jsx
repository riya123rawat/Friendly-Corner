import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../config';  // Import the base URL

export const BackgroundContext = createContext();

export function BackgroundProvider({ children }) {
  const [backgrounds, setBackgrounds] = useState({});


    // const baseURL = 'https://localhost:7177';
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSavedImages = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/backgroundimage/getSavedImages');
  
        if (response.data && response.data.length > 0) {
          
          const updatedBackgrounds = { ...backgrounds };
          response.data.forEach(image => {
            if (image.backgroundType && image.imagePath) {
                updatedBackgrounds[image.backgroundType] = `${BASE_URL}${image.imagePath}`;
              }
          });
  
          setBackgrounds(updatedBackgrounds);
        } else {

          setBackgrounds((prevBackgrounds) => ({
            ...prevBackgrounds,
              background1: '/Images/bgd-main.png',
              background2: '/Images/bgd-office.jpg',
              background3: '/Images/bgd-meeting.jpg',
              background4: '/Images/bgd-meeting-2.jpg',
              background5: '/Images/bgd-butik.jpg'
            
          }));
  
        }
      } catch (error) {
        console.error('Error fetching saved images:', error);
        
        setBackgrounds((prevBackgrounds) => ({
          ...prevBackgrounds,
            background1: '/Images/bgd-main.png',
            background2: '/Images/bgd-office.jpg',
            background3: '/Images/bgd-meeting.jpg',
            background4: '/Images/bgd-meeting-2.jpg',
            background5: '/Images/bgd-butik.jpg'
        }
      ));
      }
      finally {
        setLoading(false);
      }
    };
    fetchSavedImages();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <BackgroundContext.Provider value={{ backgrounds, setBackgrounds }}>
      {children}
    </BackgroundContext.Provider>
  );
};
