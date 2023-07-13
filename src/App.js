import React, { useState } from 'react';
import DashBoard from './Pages/DashBoard';
import IdleResourcesPage from './Pages/IdleResourcesPage';
import LoginForm from './Pages/LoginForm';
import LandingPage from './Pages/LandingPage';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [services, setServices] = useState([]);
  const [buNames, setBuNames] = useState([]);
  const [userObj, setUserObj] = useState(null);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<LoginForm userObj={userObj} setUserObj={setUserObj} />}
        />
        <Route
          path="/IdleResourcesCloudSelection"
          element={
            <IdleResourcesPage
              services={services}
              setServices={setServices}
              buNames={buNames}
              setBuNames={setBuNames}
              userObj={userObj}
              setUserObj={setUserObj}
            />
          }
        />
        <Route
          path="/DashBoard"
          element={
            <DashBoard
              services={services}
              buNames={buNames}
              userObj={userObj}
              setUserObj={setUserObj}
            />
          }
        />
        <Route
          path="/LandingPage"
          element={<LandingPage userObj={userObj} setUserObj={setUserObj} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
