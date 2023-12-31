import React, { useEffect } from 'react';
import { authenticate } from './Requests';
import { useNavigate } from 'react-router-dom';

const AuthVerification = ({ userObj, children, onAuthChange, setUserObj, afterAuthCallback }) => {  // afterAuthCallback is an optional prop
  const navigator = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      const storedToken = sessionStorage.getItem('adaniCloudOpsAuthToken'); // Retrieve token from session storage

      if (storedToken) {
        try {
          // Send API request to verify token
          let response = await authenticate(storedToken);
          setUserObj(response.data.user);
          

          if (afterAuthCallback) {
            await afterAuthCallback(); // Execute the callback function after authentication
          }
          onAuthChange(true); // Notify the parent component about successful authentication
        } catch (error) {
          // Handle API error
          console.error(error);
          onAuthChange(false); // Notify the parent component about authentication failure
        }
      } else {
        // Token doesn't exist in storage, handle accordingly
        // e.g., setAuthenticated(false);
        navigator('/');
        console.log('Token doesn\'t exist in storage, handle accordingly');
        onAuthChange(false); // Notify the parent component about authentication failure
      }
    };

    verifyToken(); // Execute token verification logic on component mount, happens only once
  }, []);

  return <>{children}</>; // Render the child components
};

export default AuthVerification;
