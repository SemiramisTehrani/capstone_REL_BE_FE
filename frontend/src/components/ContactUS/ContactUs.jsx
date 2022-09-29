// 09/11/2022 : Semi , started contact us 
// 09/22/2022 : verification , not connecting to the backend


// import React from 'react';
import React, { useRef} from 'react'
import { SendEmail } from '../../utils/AutoEmail';
import './ContactUs.css';

import axios from 'axios'

function Contactus() {

        const fullNameRef = useRef(null)
        const emailRef    = useRef(null)
        const subjectRef  = useRef(null)
        const messageRef  = useRef(null)

        const handleSubmit = (event) => {
            event.preventDefault()
            const data = {
                fullname: fullNameRef.current.value,
                email: emailRef.current.value,
                subject : subjectRef.current.value,
                message: messageRef.current.value
            }
            console.log(data)
            const url = 'http://127.0.0.1:8000/api/contactus/add/'
            fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                // Once the backend has received and sent back a response
                //console.log(response)
                
                SendEmail("RoseElectronicsLab2022@gmail.com", 
                "Sales Representative", 
                `A user has asked a question or given feedback. 
Name: ${data.fullname}. 
Email: ${data.email}. 
Subject: ${data.subject}. 
Message: ${data.message}`);
            })
            .catch(err => {
                // If there is an error in the process

            })
            alert("tadaaa!: \n" + JSON.stringify(data) + "Your data 😎")
        }
    
    return(
        
        <div  className="container">
            <h1>Contact us</h1>
            <form onSubmit={handleSubmit} className="form contact_form">
                    <label for="fullName" id="fullnameLabel">Full Name</label>
                    <input
                        type="text" 
                        id="fullName" 
                        name="fullName"
                        className="fullName" 
                        ref={fullNameRef} 
                        tabindex="1" 
                    />
                {/*<div className="fullname">
                    
    </div>*/}
                
                <label for="email">Email</label>
                <input 
                type="email" 
                name="email"
                id="email"
                className="email"
                placeholder="example@corp.com"
                ref={emailRef}
                tabindex="2" 
                />

                <label for="subject">Subject</label>
                <input 
                type="text" 
                name="subject"
                id="subject"
                className="subject"
                ref={subjectRef}
                tabindex="3" 
                />

                <label for="message">Message</label>
                <textarea 
                placeholder="Start typing..." 
                className="message" 
                name="message"
                ref={messageRef}
                >

                </textarea>
                <button type="submit" className="send">Send</button>
            </form>
        </div>
    )
}
 export default Contactus