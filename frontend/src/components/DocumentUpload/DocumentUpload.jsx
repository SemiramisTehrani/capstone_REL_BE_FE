// 09/11/2022 : Semi , started contact us 
// 09/22/2022 : verification , not connecting to the backend


// import React from 'react';
import React, { useRef} from 'react'
import './DocumentUpload.css';

function DocumentUpload() {
        const documentRef  = useRef(null)
        const descriptionRef  = useRef(null)

        const handleSubmit = (event) => {
            event.preventDefault()
            console.log(documentRef.current.files[0])
            const data = {
                description: descriptionRef.current.value,
                document: JSON.stringify(documentRef.current.files[0])
            }
            console.log(data)
            let token = JSON.parse(localStorage.getItem('token'))
            const url = 'http://127.0.0.1:8000/api/consultation/add/'
            fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token
                },
                body: JSON.stringify(data),
                file: documentRef.current.value
                
            })
            .then(response => {
                // Once the backend has received and sent back a response
                console.log(response)
            })
            .catch(err => {
                // If there is an error in the process

            })
            alert("tadaaa!: \n" + JSON.stringify(data) + "Your data 😎")
        }
    
    return(
        
        <div  className="container">
            <h1>Upload Documnet</h1>
            <form onSubmit={handleSubmit} className="form contact_form">
                    
                <label for="document">Document</label>
                <input 
                type="file" 
                name="document"
                id="document"
                className=""
                ref={documentRef}
                tabindex="2" 
                multiple
                />

                <label for="description">Description</label>
                <textarea 
                name="description"
                id="description"
                className=""
                ref={descriptionRef}
                tabindex="3" 
                />
                <button type="submit" className="send">Send</button>
            </form>
        </div>
    )
}
 export default DocumentUpload