
// Rose Electronics Lab  : header & NavBar
// 9/11/2022 : 

import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './NavBar.css';
// import Home from "./components/Home/Home";



const NavBar = () => {
    return ( 
      <div className="navBar">
        <header> 
        Rose Electronics Lab
        </header>
        <hr></hr>

        <ul>
          <li className="brand">
            <Link to="/" className='NavButton'>
              <b>Home</b>
            </Link>
            <Link to="/about" className='NavButton'>
              <b>About</b>
            </Link>
            <Link to="/services" className='NavButton'>
              <b>Services</b>
            </Link>
            <div>
              &nbsp;
            </div>
            <Link to="/contactus" className='NavButton'>
              <b>Contact</b>
            </Link>
            <Link to="/register" className='NavButton'>
              <b>Registration</b>
            </Link>
            <Link to="/login" className='NavButton'>
              <b>Login</b>
            </Link>
          </li>
        </ul>
      </div>
    );
  };
  export default NavBar;
