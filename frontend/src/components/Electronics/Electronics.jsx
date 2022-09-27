import React from 'react';
import { Container, Col, Table } from 'react-bootstrap';
import './Electronics.css';

function Electronics(props) {
    return(
        <div>
            <Container className="container-electronics">
            <Col className="electronics"><h1>Electronics and Simulation</h1>
            <hr></hr>  
            <p>
            We provide Electrical Engineering services to our clients. We are experts at system architecture, 
            circuit design, FPGA programming, and electromagnetic design. We have designed high volume consumer 
            electronic products, one-of-a-kind laboratory instrumentation, and everything in between. We work as 
            electrical engineering contractors for consumer electronics, medical devices, avionics, manufacturing 
            equipment, and scientific instrumentation. We also offer software engineering services.
            </p>

            <div className='list_type'>
                <div>• Analog and mixed-signal design</div>
                <div>• High-speed digital design</div>
                <div>• Design for ultra-low power</div>
                <div>• Design of low-noise or high precision instrumentation</div>
                <div>• Design for low cost, high-volume production</div>
                <div>• UL / CE / FCC etc. ; agency approvals for world-wide shipping</div>
                <div>• Switch-mode power supply design</div>
                <div>• A/D front ends, sensor and signal conditioning</div>
                <div>• Capacitive and inductive sensors</div>
                <div>• Embedded components</div>
                <div>• Pspice Simulation</div>
                

            </div>
            </Col>

            </Container>
        </div>
    )
}

export default Electronics;