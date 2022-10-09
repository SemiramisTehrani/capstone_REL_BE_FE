import React from 'react';
import { Container, Col, Table, Row } from 'react-bootstrap';
import './Logout.css';

function Logout(props) {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    document.getElementById('register_button').innerHTML = "<b>Register</b>"
    document.getElementById('register_button').href = "/register"
    document.getElementById('user_button').innerHTML = "<b>Login</b>"
    document.getElementById('user_button').href = "/login"
    return(
        <div>
            <Container className="container-about">
            <Col className="aboutus"><h1>Logged Out</h1> 
            <p>You have been successfully logged out.
            </p>
            <p>Thank you for your business.</p>
            <a href='/'>Return to the Home Page</a>
            </Col>
            </Container>
        </div>
    )
}

export default Logout;
