import React from 'react';
import { Container, Col, Table } from 'react-bootstrap';
import './SalesRepView.css';
import axios from "axios";

function GetDocuments() {
    let token = JSON.parse(localStorage.getItem('token'))
    return axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/api/consultation/all/',
        headers: {
            
        }
    })
    //return fetch('http://127.0.0.1:8000/api/consultation/all', {
    //    method: 'GET',
    //    headers: {
    //        "Accept": "application/json",
    //        "Content-Type": "application/json"//,
    //        //Authorization: "Bearer " + token
    //    },
    //    redirect: 'manual'
    //});
}

function RenderDocumentView() {
    GetDocuments()
    .then(r => {
        //console.log(r)
        //return r.json()
        //return r.json()
        console.log(r)
        let itemsContainer = document.getElementById('items');
        itemsContainer.innerHTML = ""
        r.data.forEach(consultation => {
            console.log(consultation)
            itemsContainer.innerHTML += `<div><a href="http://localhost:8000/${consultation.document.substring(7)}" >${consultation.description}</a></div>`
        })
    })
    .catch(error => {
        console.log(error)
    })
}

function SalesRepView(props) {
    RenderDocumentView()
    return(
        <div>
            <Container className="container-electronics">
            <Col className="electronics">
            <h1>Sales Rep View</h1>
            <h2 className='center-align'>Documents Uploaded by Users</h2>
            <div id="items"></div>
            </Col>
            </Container>
        </div>
    )
}

export default SalesRepView;