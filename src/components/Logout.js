import React from 'react';
import './Logout.css';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigator = useNavigate()

    function handleLogout() {
        // Remove token from session storage
        sessionStorage.removeItem('adaniCloudOpsAuthToken');   
        navigator('/')
    }

  return (
    <button className="logout-button" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;
