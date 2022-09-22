import React from 'react';
import { Container, Col, Table, Row } from 'react-bootstrap';
import './About.css';

function About(props) {
    return(
        <div>
            <Container className="container-about">
            <Col className="aboutus"><h1>About Us</h1> 
            <p> We are Experienced and Creative Electrical Engineering team with extensive expertise in Design, Product Development,
                Manufacturing, Program Management, Reliability , Test/Characterization, and People management.
            </p>
            </Col>
            </Container>
        </div>
    )
}

export default About;
