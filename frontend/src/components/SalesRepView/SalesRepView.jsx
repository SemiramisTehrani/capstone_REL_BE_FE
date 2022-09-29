import React from 'react';
import { Container, Col, Table } from 'react-bootstrap';
import './SalesRepView.css';

function GetDocuments() {
    let token = JSON.parse(localStorage.getItem('token'))
    return fetch('http://127.0.0.1:8000/api/consultation/all', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token
        },
    });
}

function RenderDocumentView() {
    GetDocuments()
    .then(r => {
        //console.log(r)
        //return r.json()
        return r.json()
    })
    .then(data => {
        console.log(data)
    })
}

function SalesRepView(props) {
    RenderDocumentView()
    return(
        <div>
            <Container className="container-electronics">
            <Col className="electronics">
            <h1>Sales Rep View</h1>
            </Col>
            </Container>
        </div>
    )
}

export default SalesRepView;