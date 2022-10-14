import React from 'react';
import { Container, Col, Table, Row } from 'react-bootstrap';
import './Logout.css';

function LogoutConfirm(props) {
    return(
        <div>
            <Container className="container-about">
            <Col className="aboutus"><h1>Logged Out</h1> 
            <p>You have been successfully logged out</p>
            <p>Thank you for your business.</p>
            <a href='/'>Return to the Home Page</a>
            </Col>
            </Container>
        </div>
    )
}

export default LogoutConfirm;