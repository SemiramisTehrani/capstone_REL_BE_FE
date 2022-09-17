import React from 'react';
import { Container, Col, Table } from 'react-bootstrap';
import './Services.css';

function Services(props) {
    return(
        <div>
            <Container className="container-services">
            <Col className="services">
                <h1>Electronics and Simulation</h1>
                <div className='service-images'>
                    <div className='service'>
                        <img src="/fullstack_Developement.png" alt="" />
                        <p>Full Stack Development</p>
                    </div>
                    <div className='service'>
                        <img src="/electronics_design.jpeg" alt="" />
                        <p>Electronics Design & Simulation</p>
                    </div>
                    <div className='service'>
                        <img src="/reliability.jpeg" alt="" />
                        <p>Reliability</p>
                    </div>
                    <div className='service'>
                        <img src="/schematic.jpeg" alt="" />
                        <p>Schematic Development</p>
                    </div>
                    <div className='service'>
                        <img src="/pcb_layout.jpeg" alt="" />
                        <p>PCB/Layout</p>
                    </div>
                </div>
            <hr></hr> 
            <p>sgdkaggfshfgjsh.</p>
            <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx </p>
            <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
            <p>xxxxxxxxxxxxxxxxxxxxxx</p>
            <p>xxxxxxxxxxxxxxxxxxxxxxxx</p>
            <p>xxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
            <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
            </Col>
            </Container>
        </div>
    )
}

export default Services;