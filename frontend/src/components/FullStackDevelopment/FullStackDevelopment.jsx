import React from 'react';
import { Container, Col, Table } from 'react-bootstrap';
import './FullStackDevelopment.css';

function FullStackDevelopment(props) {
    return(
        <div>
            <Container className="container-fullstackdevelopment">
            <Col className="fullstackdevelopment"><h1>Full Stack Development</h1>
            <hr></hr> 
            <p>We develop both front-end (client side) and back-end (server side) portions of web application.</p>
            <p>We have the ability to design complete web applications and websites. We work on the frontend, backend, database </p>
            <p>and debugging of web applications or websites.</p>
            <p>Front-end Languages: HTML, CSS, JavaScript</p>
            <p>Front-end Frameworks and Libraries: React.js , Bootstarp</p>
            <p>Back-end Languages: Python, Node.js</p>
            <p>Back-end Framewroks : Django, REST, and MySQL</p>
            </Col>
            </Container>
        </div>
    )
}

export default FullStackDevelopment;