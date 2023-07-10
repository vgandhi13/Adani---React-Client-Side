import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';
import { Route, Routes } from 'react-router-dom';
import AuthVerification from '../Services/AuthVerification';

function DashBoard({service, buName, userObj}){
 
        return (
            <AuthVerification>
                <div>
                    <Navbar/>
                    <div class="container-fluid" id="main">
                    <div class="row row-offcanvas row-offcanvas-left">
                    <Sidebar userObj={userObj} />
                        <Dashboard service={service} buName={buName} userObj={userObj} />
                        </div>
                    </div>  
                </div>  
            </AuthVerification>
        );
    }
  
export default DashBoard;