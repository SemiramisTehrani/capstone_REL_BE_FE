import React from 'react';
import { Container, Col, Table } from 'react-bootstrap';
import './FullStackDevelopment.css';

function FullStackDevelopment(props) {
    return(
        <div>
            <Container className="container-fullstackdevelopment">
            <Col className="fullstackdevelopment"><h1>Full Stack Development</h1>
            <hr></hr> 
            <p>We develop both front-end (client side) and back-end (server side) portions of web application.
            We have the ability to design complete web applications and websites. We work on the frontend, backend, database
            and debugging of web applications or websites.
            Front-end Languages: HTML, CSS, JavaScript
            Front-end Frameworks and Libraries: React.js , Bootstarp
            Back-end Languages: Python, Node.js
            Back-end Framewroks : Django, REST, and MySQL</p>
            </Col>
            </Container>
        </div>
    )
}

export default FullStackDevelopment;