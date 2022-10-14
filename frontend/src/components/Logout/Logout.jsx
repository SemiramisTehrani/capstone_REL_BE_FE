import React from 'react';
import { Container, Col, Table, Row } from 'react-bootstrap';
import './Logout.css';

function Logout(props) {
    localStorage.removeItem('token')
    localStorage.removeItem('username')

    setInterval(function () {
        window.location = "/logout_confirm"
    }, 500)
   // document.getElementById('register_button').innerHTML = "<b>Register</b>"
   // document.getElementById('register_button').href = "/registration"
   // document.getElementById('user_button').innerHTML = "<b>Login</b>"
   // document.getElementById('user_button').href = "/login"
    return(
        <div>
            <Container className="container-about">
            <Col className="aboutus"><h1>Logged Out</h1> 
            <p>Logging out...
            </p>
            </Col>
            </Container>
        </div>
    )
}

export default Logout;
