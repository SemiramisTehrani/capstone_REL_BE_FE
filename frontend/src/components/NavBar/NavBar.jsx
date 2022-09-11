
// Rose Electronics Lab  : header & NavBar
// 9/11/2022 : 

import React from 'react';
import { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import './Navbar.css';
import { Link } from 'react-router-dom'



// const NavBar = (props) => {

//   return (
//     <div>
//       <header> 
//         <title>Rose Electronics Lab</title>
//       </header>
//       <hr></hr>

//     <a class="active" href="#home">Home</a>
//     <a href="#aboutus">Aboutus</a>
//     <a href="#services">Services</a>
//     <a href="#contact us">Contact us</a>
//     <a href="#register">Register</a> 
//     <a href="#logi n">Login</a>     
//     </div>
//   );
// };

// export default NavBar;


const NavBar = () => {
    const { logoutUser, user } = useContext(AuthContext);
    const navigate = useNavigate();
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



// leftovers from previous project

// import React from "react";
// import { useContext } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import AuthContext from "../../context/AuthContext";
// import "./NavBar.css";
// const Navbar = () => {
//   const { logoutUser, user } = useContext(AuthContext);
//   const navigate = useNavigate();
//   return (
//     <div className="navBar">
//       <ul>
//         <li className="brand">
//           <Link to="/" style={{ textDecoration: "none", color: "white" }}>
//             <b>React/Django JWT</b>
//           </Link>
//         </li>
//         <li>
//           {user ? (
//             <button onClick={logoutUser}>Logout</button>
//           ) : (
//             <button onClick={() => navigate("/login")}>Login</button>
//           )}
//         </li>
//       </ul>
//     </div>
//   );
// };

// import React from "react";
// import { Link } from "react-router-dom";
// import SearchBar from "../SearchBar/SearchBar";
// import { Navbar, Button, Container } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// const NavBar = (props) => {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Container fluid>
//         <Navbar.Brand href="#">YouTube-by-Semi</Navbar.Brand>

//         <SearchBar
//           search={props.search}
//           setSearch={props.setSearch}
//           getVideo={props.getVideo}
//         />
//         <Link to="loginform">
//           <li>Login</li>
//         </Link>
//         <Button>Logout</Button> 
//       </Container>
//     </Navbar>

  
//   );
// };

// export default NavBar;
