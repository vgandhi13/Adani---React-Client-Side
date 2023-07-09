import Navbar from "../components/Navbar";
import SelectionBox from "../components/SelectionBox";
import React, { useEffect, useState } from 'react';
import './LandingPage.css';
import AuthVerification from "../Services/AuthVerification";

const Selection = () => {
  

    return (
        <AuthVerification>
            <div className='app'>
                <Navbar />
                <SelectionBox />
            </div>
        </AuthVerification>
    )
}

export default  Selection;