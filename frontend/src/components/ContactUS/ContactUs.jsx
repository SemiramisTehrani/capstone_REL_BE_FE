// 09/11/2022 : Semi , started contact us 


// import React from 'react';
import React, { useRef} from 'react'
import './ContactUs.css';

function Contactus() {

        const fullNameRef = useRef(null)
        const emailRef    = useRef(null)
        const subjectRef  = useRef(null)
        const messageRef  = useRef(null)

        const handleSubmit = (event) => {
            event.preventDefault()
            const data = {
                fullName: fullNameRef.current.value,
                email: emailRef.current.value,
                subject : subjectRef.current.value,
                message: messageRef.current.value
            }
            alert("tadaaa!: \n" + JSON.stringify(data) + "Your data 😎")
        }
    
    return(
        
        <div  className="container">
            <h1>Contact us</h1>
            <form onSubmit={handleSubmit} className="form">
                <div className="fullname">
                    <label for="fullName" id="fullnameLabel">Full Name</label>
                    <input
                        type="text" 
                        id="fullName" 
                        name="fullName"
                        className="fullName" 
                        ref={fullNameRef} 
                        tabindex="1" 
                    />
                </div>
                
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