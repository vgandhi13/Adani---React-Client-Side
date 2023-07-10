import React, { useEffect } from 'react';
import { authenticate } from './Requests';
import { useNavigate } from 'react-router-dom';

const AuthVerification = ({ children }) => {
  const navigator = useNavigate();
  useEffect(() => {
    const verifyToken = async () => {
      const storedToken = sessionStorage.getItem('adaniCloudOpsAuthToken'); // Retrieve token from session storage
      
      if (storedToken) {
        try {
          // Send API request to verify token
          let response = await authenticate(storedToken)
          console.log(response)
        } catch (error) {
          // Handle API error
          console.error(error);
        }
      } else {
        // Token doesn't exist in storage, handle accordingly
        // e.g., setAuthenticated(false);
        navigator('/')
        console.log('Token doesnt exist in storage, handle accordingly')
      }
    };

    verifyToken(); // Execute token verification logic on component mount, happens only once
  }, []);

  return <>{children}</>; // Render the child components
};

export default AuthVerification;
