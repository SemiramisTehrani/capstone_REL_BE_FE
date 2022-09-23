import React from 'react';
import { Container, Col, Table } from 'react-bootstrap';
import './PCB.css';


function PCB(props) {
    return(
        <div>
            <Container className="container-pcb">
            <Col className="pcb_layout"><h1>PCB/Layout</h1>
            <hr></hr>  
            <p>We have designed (schematic and layout) countless printed circuit boards, ranging in complexity from 28 
               layer large circuit cards employing large numbers of multi-gigabit linkswith the highest level of performance
               to very small high density PCB design, with powerful, portable computing platforms for sophisticated video/image 
               processing and communicationsin low power environments. Our extensive digital IC design capability, evident in 
               our list of IP cores, provides a unique source for your next PC board project.
               
               We have interfaced to most conventional types of control protocols (networking, serial ports,USB2.0/3.0, PCI/PCIe,
               CAN2.0, 1553B, VME64, high speed memory, SD, Flash, CompactFlash, servos, gyros, motors, most common bus standards),
               , and most types of video interfaces (GigE, GigE Vision, Cameralink, DVI, HDMI, RS-170, NTSC/PAL, AVB/TSN, HOTlink, 
               HD-SDI, custom LVDS, etc.).
            </p> 
            
            
            
            <div className='list_type'>
                <div>• Turn-key board design and board layout services</div>
                <div>• Prototyping to medium rate production</div>
                <div>• Design for test</div>
                <div>• High density PCB design capabidivties</div>
                <div>• High speed capabidivties</div>
                <div>• Small form factor</div>
                <div>• Low power expertise</div>
                <div>• Extensive video/camera interfaces</div>
                <div>• Extensive comm interfaces</div>
                <div>• Controls expertise</div>
                <div>• Multi-gigabit transceivers</div>
                <div>• Certifications (FCC, UL, CE, various military)</div>
            </div>
           
            
            
            </Col> 
            </Container>
           
            
        </div>
    )
}

export default PCB;