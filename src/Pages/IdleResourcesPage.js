import React, { useEffect, useState } from "react";
import './IdleResourcesPage.css';
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";
import CustomListGroup from "../components/CustomListGroup";
import AuthVerification from "../Services/AuthVerification";
import { getCloudServices } from "../Services/Requests";

function Home({ service, setService, buName, setBuName, userObj, setUserObj }) {
  const nameOfServices = ['Google Cloud Platform (GCP)', 'Amazon Web Services (AWS)', 'Microsoft Azure'];
  const [nameOfBU, setNameOfBU] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const navigator = useNavigate();

  function handleClick() {
    navigator('/DashBoard');
  }

  useEffect(() => {
    const fetchCloudServices = async () => {
      try {
        const response = await getCloudServices(userObj.id);
        const buNames = response.data;
        setNameOfBU(buNames);
        setIsLoading(false);
      } catch (error) {
        console.log('error', error);
        setIsLoading(false);
      }
    };

    fetchCloudServices();
  }, []);

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

