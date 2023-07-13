import React, { useEffect, useState } from 'react';
import './IdleResourcesPage.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import CustomListGroup from '../components/CustomListGroup';
import AuthVerification from '../Services/AuthVerification';
import { getBusinessUnits, getCloudServices } from '../Services/Requests';

function IdleResourcesPage({
  services,
  setServices,
  buNames,
  setBuNames,
  userObj,
  setUserObj,
}) {
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
      if (userObj) {
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

  const handleSelectAllServices = () => {
    setServices(nameOfServices);
  };

  const handleDeselectAllServices = () => {
    setServices([]);
  };

  const handleSelectAllBUNames = () => {
    setBuNames(nameOfBU);
  };

  const handleDeselectAllBUNames = () => {
    setBuNames([]);
  };

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
          <div
            style={{
              marginTop: '4rem',
              marginBottom: '4rem',
              fontSize: '3.5rem',
            }}
            className="font-heading"
          >
            Make a Selection
          </div>
          <div className="centered-container">
            <div className="lists-container">
              <div className="list-group">
                <h2 className="list-group-heading">Cloud Services</h2>
                <div className="button-group">
                  <button className="select" onClick={handleSelectAllServices}>Select All</button>
                  <button className="deselect" onClick={handleDeselectAllServices}>
                    Cancel
                  </button>
                </div>

                <CustomListGroup
                  items={nameOfServices}
                  activeItems={services}
                  onItemClick={(item) =>
                    setServices((prevServices) =>
                      prevServices.includes(item)
                        ? prevServices.filter((service) => service !== item)
                        : [...prevServices, item]
                    )
                  }
                />
              </div>
              {!isLoading ? (
                <div className="list-group">
                  <h2 className="list-group-heading">Business Units</h2>
                  <div className="button-group">
                    <button className="select" onClick={handleSelectAllBUNames}>Select All</button>
                    <button className="deselect" onClick={handleDeselectAllBUNames}>
                      Cancel
                    </button>
                  </div>

                  <CustomListGroup
                    items={nameOfBU}
                    activeItems={buNames}
                    onItemClick={(item) =>
                      setBuNames((prevBuNames) =>
                        prevBuNames.includes(item)
                          ? prevBuNames.filter((name) => name !== item)
                          : [...prevBuNames, item]
                      )
                    }
                  />
                </div>
              ) : (
                <div>Loading Business Units...</div>
              )}
            </div>

            <button className="continue-button" onClick={handleClick}>
              Continue
            </button>
          </div>
        </div>
      )}
    </AuthVerification>
  );
}

export default IdleResourcesPage;
