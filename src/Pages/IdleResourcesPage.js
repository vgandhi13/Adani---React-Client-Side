import React, { useState } from "react";
import './IdleResourcesPage.css';
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";
import CustomListGroup from "../components/CustomListGroup";
import AuthVerification from "../Services/AuthVerification";

function Home({ service, setService, buName, setBuName }) {
  const nameOfServices = ['Google Cloud Platform (GCP)', 'Amazon Web Services (AWS)', 'Microsoft Azure'];
  const nameOfBU = ['Adani Enterprises Limited (AEL- it, corp)', 'Adani Digital Labs (ADL)', 'Adani Electricity Mumbai Ltd (AEML)', 'Adani Green Energy Ltd (AGEL)', 'ANIL', 'Adani Ports & SEZ Ltd (APSEZ)', 'Adani Total Gas Ltd (AGTL)', 'Airport', 'Bunkering', 'Capital', 'Defense', 'Howe', 'Mundra Petrochem Ltd (MPL)', 'Mundra Solar PV Ltd (MSPVL)', 'Natural Resources (natural, natural rs)', 'Power', 'Realty', 'Transmission'];
  const navigator = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function handleClick() {
    navigator('/DashBoard');
  }

  return (
    <AuthVerification onAuthChange={setIsAuthenticated}>
      {isAuthenticated && (
        <div className="resource-app">
          <Navbar />
          <div style={{marginTop:"4rem" ,marginBottom:"4rem", fontSize:"3.5rem"}} className="font-heading">Make a Selection</div>
          <div className="centered-container">
            <div className="lists-container">
              <CustomListGroup
                items={nameOfServices}
                activeItem={service}
                onItemClick={setService}
                heading="Cloud Services"
              />
              <CustomListGroup
                items={nameOfBU}
                activeItem={buName}
                onItemClick={setBuName}
                heading="Business Units"
              />
            </div>

            <button className="continue-button" onClick={handleClick}>Continue</button>
          </div>
        </div>
      )}
    </AuthVerification>
  );
}

export default Home;
