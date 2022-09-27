import React from 'react';
import { Container, Col, Table } from 'react-bootstrap';
import './Schematic.css';


function Schematic(props) {
    return(
        <div>
            <Container className="container-Schematic">
            <Col className="Schematic_development"><h1>Schematic Development</h1>
            <hr></hr>  
            <p> We draw the detailed schematic in Mentor Ghraphics and Orcad Capture. We use standard and custome part libraries
                to develope schematics. Every sheet of schematic contains notes to indicate critical parts plcaments.  
                We consult with our engineering team to make sure following good design practice. 
                We run Electrical Design Rule checks (ERC) , have schematic review, first internally, and then with 
                the customer, to catch any remaining issues.
                </p>  
            </Col> 
            </Container>
           
            
        </div>
    )
}

export default Schematic;