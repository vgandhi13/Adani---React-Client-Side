import React from "react";
import DropdownButton from "../components/DropdownButton";
import './Home.css';
import { useNavigate } from 'react-router-dom';
import Logout from '../components/Logout'

function Home({service, setService, buName, setBuName}) {
  const nameOfServices = ['Google Cloud Platform (GCP)', 'Amazon Web Services (AWS)', 'Microsoft Azure'];
  const nameOfBU = ['Adani Enterprises Limited (AEL- it, corp)', 'Adani Digital Labs (ADL)', 'Adani Electricity Mumbai Ltd (AEML)', 'Adani Green Energy Ltd (AGEL)', 'ANIL', 'Adani Ports & SEZ Ltd (APSEZ)', 'Adani Total Gas Ltd (AGTL)', 'Airport', 'Bunkering', 'Capital', 'Defense', 'Howe', 'Mundra Petrochem Ltd (MPL)', 'Mundra Solar PV Ltd (MSPVL)', 'Natural Resources (natural, natural rs)', 'Power', 'Realty', 'Transmission'];
  const navigator = useNavigate()

  function handleClick() {
    navigator('/DashBoard')
  }

  return (
    <div className="app">
      <Logout />
      <div className="image-container">
        <img src="/Adani_2012_logo.png" style={{ width: '50%', height: 'auto' }}  alt="Adani logo" />
      </div>
      <div className="message">
        You are logged In ✅
      </div>
      <div className="centered-container">

        <DropdownButton buttonText = {service} setButtonText = {setService} dropdownItems ={nameOfServices} />
        <DropdownButton buttonText = {buName} setButtonText = {setBuName} dropdownItems ={nameOfBU} />
      </div>
      <button style={{marginTop: '8rem'}} className="continue-button" onClick={handleClick}>Continue</button>
    </div>
  );
}

export default Home;
