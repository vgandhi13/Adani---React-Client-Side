import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';
import AuthVerification from '../Services/AuthVerification';

function DashBoard({ services, buNames, userObj, setUserObj }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigator = useNavigate();

  // Reroute logic based on service and buName values
  if (services.length === 0 || buNames.length === 0) {
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
              <Dashboard services={services} buNames={buNames} />
            </div>
          </div>
        </div>
      )}
    </AuthVerification>
  );
}

export default DashBoard;
