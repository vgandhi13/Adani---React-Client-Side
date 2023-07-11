import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import SelectionBox from "../components/SelectionBox";
import './LandingPage.css';
import AuthVerification from "../Services/AuthVerification";

const Selection = ({userObj, setUserObj}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthVerification userObj={userObj} onAuthChange={setIsAuthenticated} setUserObj={setUserObj} >
      {isAuthenticated && (
        <div className='app'>
          <Navbar />
          {console.log(userObj)}
          <SelectionBox userObj={userObj} />
        </div>
      )}
    </AuthVerification>
  );
};

export default Selection;
