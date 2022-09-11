
// Rose Electronics Lab  : header & NavBar
// 9/11/2022 : 

import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './NavBar.css';


const NavBar = () => {
    return (

      
      <div className="navBar">
        <header> 
        <title>Rose Electronics Lab</title>
        </header>
        <hr></hr>

        <ul>
          <li className="brand">
            <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
              <b>Home</b>
            </Link>
            <Link to="/aboutus" style={{ textDecoration: "none", color: "white" }}>
              <b>AboutUs</b>
            </Link>
            <Link to="/services" style={{ textDecoration: "none", color: "white" }}>
              <b>Services</b>
            </Link>
            <Link to="/contactus" style={{ textDecoration: "none", color: "white" }}>
              <b>ContactUs</b>
            </Link>
            <Link to="/register" style={{ textDecoration: "none", color: "white" }}>
              <b>RegisterationFrom</b>
            </Link>
            <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
              <b>LoginForm</b>
            </Link>
          </li>
        </ul>
      </div>
    );
  };
  export default NavBar;
