import React from 'react';
import {NavLink} from 'react-router-dom';
const Menu = () =>{
    return (<>

<nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
  <div className="container">
  <NavLink style={{fontWeight : "bold",  fontSize : "1.5rem", fontStyle : "revert",}} className="navbar-brand color-change nav-heading" to="/"> 𝕸𝖄 ค𝖕𝖕𝖑𝖎𝖈𝖆𝖙𝖎𝖔𝖓</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink exact activeClassName='active_menu' className="nav-link" to="/"><i class="fa fa-fw fa-home"></i> Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink activeClassName='active_menu' className="nav-link" to="about"><i class="far fa-fw fa-address-card"></i> About Us</NavLink>

        </li>
        <li className="nav-item">
          <NavLink activeClassName='active_menu' className="nav-link" to="contact"><i class="fa fa-fw fa-envelope"></i> Contact Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName='active_menu' className="nav-link" to="service"><i class="far fa-fw fa-handshake"></i> Services</NavLink>
        </li>
      </ul>
    <div class="social-buttons"> <button class="neo-button ml-2"><i class="fab fa-fw fa-facebook-f "></i> </button> <button class="neo-button ml-2"><i class="fab fa-linkedin"></i> </button> <button class="neo-button ml-2"><i class="fab fa-google "></i> </button>  <button class="neo-button ml-2"><i class="fab fa-twitter"></i> </button> </div>

    </div>

  </div>
</nav>
    
   
    </>)
}


export default Menu;