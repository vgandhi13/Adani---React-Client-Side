import React from 'react'
import Logout from './Logout'
import './Navbar.css';
 
export const Navbar = () => {
    
    return (
            <nav class="navbar fixed-top navbar-expand-md navbar-dark bg-custom-white">
                <div class="flex-row d-flex">
                    <button type="button" class="navbar-toggler mr-2 " data-toggle="offcanvas" title="Toggle responsive left sidebar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <a  class="navbar-brand" href="LandingPage" title="Free Bootstrap 4 Admin Template"><img style={{width: '6rem', marginLeft: '0.5rem'}} src="/Adani-Logo-removebg-preview.png" alt="Logo" /></a>
                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse" id="collapsingNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="LandingPage">Home<span class="sr-only">Home</span></a>
                        </li>
                        {/* <li class="nav-item">
                            <a class="nav-link" href="//www.codeply.com">Link</a>
                        </li> */}
                    </ul>
                    {/* <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#myAlert" data-toggle="collapse">Alert</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://radixweb.com/blog/best-backend-frameworks" data-target="#myModal" data-toggle="modal">About</a>
                        </li>
                        <li class="nav-item">
                  <a href="https://radixweb.com/blog/best-backend-frameworks" class="nav-link waves-effect waves-light text-white">
                    <i class="fab fa-google-plus-g"></i>
                  </a>
                </li>
                <li class="nav-item">
                    <a href="https://radixweb.com/blog/best-backend-frameworks" class="nav-link waves-effect waves-light text-white">
                        <i class="fas fa-envelope-open-text"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                      <a href="https://radixweb.com/blog/best-backend-frameworks" class="nav-link waves-effect waves-light text-white">
                          <i class="fas fa-align-justify"></i>
                      </a>
                    </li>
                    </ul> */}
                </div>
                <Logout />
       </nav>
    )
}
export default Navbar