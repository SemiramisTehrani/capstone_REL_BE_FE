import React from 'react';
import { Container, Col, Table } from 'react-bootstrap';
import './Reliability.css';


function Reliability(props) {
    return(
        <div>
            <Container className="container-Reliability">
            <Col className="Reliability"><h1>Reliability</h1>
            <hr></hr>  
            <p> We provide Reliability Engineering services  or reliable engineering consulting services and 
                assessment testing  to help you undertake product reliability improvement initiatives in business 
                and operations. Our engineers will help you align your company business operations with your 
                customer expectations and deploy industry best practices, statistical and reliability methodologies 
                such as highly accelerated stress screening , life testing and reliability, highly accelerated life 
                test and lifetime testing.
                We create and execute reliability product technology testing program using the latest accelerated 
                reliability test methods to predict reliability, Failure Analysis, HALT / HASS, into your product 
                development product life cycle. Relteck provides reliability MTBF and System Availability analysis 
                and reliability in assessment and accelerated life test that will satisfy the customer requirements 
                of various standards. Supply the technical experience required to introduce Design for Reliability, 
                MTBF Prediction, FMEA, RBD Modeling, Reliability Test Plan Development, Life Data Analysis 
               ,Engineering and Test Data Analysis, Accelerated Life Testing Data Analysis, Confidence Limits, 
               Data Mining and Supplier Reliability Assessments.
                </p> 
            
            
            
            <div className='list_type'>
                <div>• Reliability Plan Development</div>
                <div>• Failure Mode Effect Analysis (FMEA)</div>
                <div>• Fault Tree Analysis (FTA)</div>
                <div>• Reliability Block Diagram Modeling (RBD)</div>
                <div>• Supplier's Reliability/Quality Assessments (SRA)</div>
                <div>• Life Data Analysis</div>
                <div>• Data Mining</div>
            </div>
           
            
            
            </Col> 
            </Container>
           
            
        </div>
    )
}

export default Reliability;