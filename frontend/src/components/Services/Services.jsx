import React from 'react';
import { Container, Col, Table } from 'react-bootstrap';
import './Services.css';
import { useNavigate, Link } from 'react-router-dom';

function Services(props) {
    return(
        <div>
            {/* <Container className="container-services"> */}
            <Col className="services">
                <h1>Our Services</h1>
                <div className='service-images'>
                    <Link to="/fullstackdevelopment" className='service'>
                        <img src="/fullstack_Developement.png" alt="" />
                        <p>Full Stack Development</p>
                    </Link>
                    <Link to="/electronics" className='service'>
                        <img src="/electronics_design.jpeg" alt="" />
                        <p>Electronics Design & Simulation</p>
                    </Link>
                    <Link to="/reliability" className='service'>
                        <img src="/reliability.jpeg" alt="" />
                        <p>Reliability</p>
                    </Link>
                    <Link to="/schematic_development" className='service'>
                        <img src="/schematic.jpeg" alt="" />
                        <p>Schematic Development</p>
                    </Link>
                    <Link to="/pcb_layout" className='service'>
                        <img src="/pcb_layout.jpeg" alt="" />
                        <p>PCB/Layout</p>
                    </Link>
                </div>
           
            </Col>
            {/* </Container> */}
        </div>
    )
}

export default Services;