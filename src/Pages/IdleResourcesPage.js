import React, { useEffect, useState } from "react";
import './IdleResourcesPage.css';
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";
import CustomListGroup from "../components/CustomListGroup";
import AuthVerification from "../Services/AuthVerification";
import { getBusinessUnits, getCloudServices } from "../Services/Requests";

function Home({ service, setService, buName, setBuName, userObj, setUserObj }) {
  const [nameOfServices, setNameOfServices] = useState([]);
  const [nameOfBU, setNameOfBU] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const navigator = useNavigate();

  function handleClick() {
    navigator('/DashBoard');
  }

  useEffect(() => {
    const fetchBUAndCloudServices = async () => {
      if (userObj) { // Check if userObj exists
        try {
          const response1 = await getBusinessUnits(userObj.id);
          const response2 = await getCloudServices(userObj.id);
          const buNames = response1.data;
          const cloudNames = response2.data;
          setNameOfBU(buNames);
          setNameOfServices(cloudNames);
          setIsLoading(false);
        } catch (error) {
          console.log('error ', error);
          setIsLoading(false);
        }
      }
    };
  
    fetchBUAndCloudServices();
  }, [userObj]);
  

  return (
    <AuthVerification
      userObj={userObj}
      onAuthChange={setIsAuthenticated}
      setUserObj={setUserObj}
      afterAuthCallback={() => {
        setIsLoading(true);
      }}
    >
      {isAuthenticated && (
        <div className="resource-app">
          <Navbar />
          <div style={{ marginTop: "4rem", marginBottom: "4rem", fontSize: "3.5rem" }} className="font-heading">Make a Selection</div>
          <div className="centered-container">
            <div className="lists-container">
              <CustomListGroup
                items={nameOfServices}
                activeItem={service}
                onItemClick={setService}
                heading="Cloud Services"
              />
              {!isLoading ? (
                <CustomListGroup
                  items={nameOfBU}
                  activeItem={buName}
                  onItemClick={setBuName}
                  heading="Business Units"
                />
              ) : (
                <div>Loading Business Units...</div>
              )}
            </div>

            <button className="continue-button" onClick={handleClick}>Continue</button>
          </div>
        </div>
      )}
    </AuthVerification>
  );
}

export default Home;

