import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';
import AuthVerification from '../Services/AuthVerification';

function DashBoard({ service, buName, userObj, setUserObj }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigator = useNavigate();

  // Reroute logic based on service and buName values
  if (service === 'Choose Cloud Service' && buName === 'Choose Business Unit Name') {
    navigator('/IdleResourcesCloudSelection');
  }

  return (
    <AuthVerification onAuthChange={setIsAuthenticated} setUserObj={setUserObj}>
      {isAuthenticated && (
        <div>
          <Navbar />
          <div className="container-fluid" id="main">
            <div className="row row-offcanvas row-offcanvas-left">
              <Sidebar userObj={userObj} />
              <Dashboard service={service} buName={buName} userObj={userObj} />
            </div>
          </div>
        </div>
      )}
    </AuthVerification>
  );
}

export default DashBoard;
