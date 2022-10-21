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
            Authorization: "Bearer " + token
        }
    })
}

function GetContacts() {
    let token = JSON.parse(localStorage.getItem('token'))
    return axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/api/contactus/all/',
        headers: {
            Authorization: "Bearer " + token
        }
    })
}

function RenderDocumentView() {
    GetDocuments()
    .then(r => {
        //console.log(r)
        let itemsContainer = document.getElementById('items');
        let html = 
        `
        <h2 style='text-align: center;'>Documents Uploaded by Users</h2>
        <div class="document_row">
        <div>Upload Date</div>
            <div>Customer Name</div>
            <div>Email</div>
            <div>Description</div>
        `
        console.log(r.data.data)
        r.data.data.forEach(consultation => {
            //console.log(consultation)
            html += 
                //`
                //<div class="contact_message">
                //    <div>
                //        <a href="http://localhost:8000/${consultation.document.substring(7)}">
                //            ${consultation.description}
                //        </a>
                //    </div>
                //    <div class="contact_details">
                //        <div>${consultation.first_name} ${consultation.last_name}</div>
                //        <div>${consultation.email}</div>
                //        <div>${new Date(consultation.uploaded_at).toLocaleString()}</div>
                //    </div>
                //</div>
                //`
                `
                
                    <div>
                        ${new Date(consultation.uploaded_at).toLocaleString()}
                    </div>
                    <div>
                        ${consultation.first_name} ${consultation.last_name}
                    </div>
                    <div>
                        ${consultation.email}
                    </div>
                    <div>
                    <a href="http://localhost:8000/${consultation.document.substring(7)}">
                        ${consultation.description}
                        </a>
                    </div>
                `
        })
        itemsContainer.innerHTML += html + "</div>"
    })
    .catch(error => {
        console.log(error)
        let itemsContainer = document.getElementById('items');
        itemsContainer.innerHTML += "You are not allowed to view this page"
    })
}

function RenderContactstView() {
    GetContacts()
    .then(r => {
        let html = "<h2 style='text-align: center;'>Contact List</h2><div class='contact_row'>"
        html += `
        <div>Name</div>
        <div>Email</div>
        <div>Message</div>
        `
        //console.log(r)
        let itemsContainer = document.getElementById('contacts');
        itemsContainer.innerHTML = ""
        r.data.forEach(contact => {
            //console.log(contact)
            html += 
                `
                <div><a>${contact.fullname}</a></div>
                <div><a href="mailto:${contact.email}">${contact.email}</a></div>
                    <div>${contact.message}</div>
                `
        })
        html += `</div>`
        itemsContainer.innerHTML = html
    })
    .catch(error => {
        console.log(error)
        let itemsContainer = document.getElementById('contacts');
        itemsContainer.innerHTML += "You are not allowed to view this page"
    })
}

function SalesRepView(props) {
    RenderContactstView()
    RenderDocumentView()
    return(
        <div>
            <Container className="container-electronics">
            <Col className="sales_rep_view">
                <h1>Sales Rep View</h1>
                <div className='sales_content'>
                        
                    <div>
                        <div id="contacts"></div>
                    </div>
                    <div>
                        <div id="items"></div>
                    </div>
                </div>
            </Col>
            </Container>
        </div>
    )
}

export default SalesRepView;