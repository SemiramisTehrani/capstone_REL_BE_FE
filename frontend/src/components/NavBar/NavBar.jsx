
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

        <ul className='navBarList'>
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
            <Link id="register_button" to={(localStorage.getItem('username') != null) ? "/logout" : "/registration"} className='NavButton'>
              <b>{(localStorage.getItem('username') != null) ? 
                  'Logout' :
                  "Register"}</b>
            </Link>
            <Link id='user_button' to={(localStorage.getItem('username') != null) ? "/upload" : "/login"} className='NavButton'>
              <b>{
                (localStorage.getItem('username') != null) ? 
                  `Logged in as ${localStorage.getItem('username')}` :
                  "Login"
              }</b>
            </Link>
          </li>
        </ul>
      </div>
    );
  };
  export default NavBar;
