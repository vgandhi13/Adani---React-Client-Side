import React from 'react';
import DashBoard from './Pages/DashBoard';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react'

function App(){
        const [service, setService] = useState('Choose Cloud Service')
        const [buName, setBuName] = useState('Choose Business Unit Name')

        return (
            <Router>
                <Routes>
                    {/* {console.log(service)}
                    {console.log(buName)} */}
                    <Route path="/" element={<Home service={service} setService = {setService} buName = {buName} setBuName = {setBuName} />}/>
                    <Route path="/DashBoard" element={<DashBoard service={service} buName = {buName} />} />
                </Routes>
            </Router>
        );
    }
  
export default App