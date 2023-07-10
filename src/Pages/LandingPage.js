import React, { useEffect, useState } from 'react';
import Navbar from "../components/Navbar";
import SelectionBox from "../components/SelectionBox";
import './LandingPage.css';
import AuthVerification from "../Services/AuthVerification";

const Selection = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthVerification onAuthChange={setIsAuthenticated}>
      {isAuthenticated && (
        <div className='app'>
          <Navbar />
          <SelectionBox />
        </div>
      )}
    </AuthVerification>
  );
};

export default Selection;
