// 09/11/2022 : Semi , started contact us 
// 09/22/2022 : verification , not connecting to the backend


// import React from 'react';
import React, { useRef} from 'react'
import { SendEmail } from '../../utils/AutoEmail';
import './DocumentUpload.css';

async function UploadSingleDocument(file, description) {

}

async function UploadDocuments(files, description, doc) {
    try {
        document.getElementById("upload_output").innerHTML = "Uploading..."
        for (const file of files) {
            const formData = new FormData();
            formData.set('description', description)
            formData.append('document', file)
            const data = {
                description: description,
                document: file
            }
            console.log(data)
            let token = JSON.parse(localStorage.getItem('token'))
            const url = 'http://127.0.0.1:8000/api/consultation/add/'
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    //"Content-Type": "application/json",
                    Authorization: "Bearer " + token
                },
                body: formData,
                file: doc//documentRef.current.value
            })
        }
        document.getElementById("upload_output").innerHTML = "Documents successfully uploaded..."
        SendEmail("RoseElectronicsLab2022@gmail.com", 
    "Sales Representative", 
    `A user has uploaded document(s) with the description: ${description}`);
            
    } catch (e) {
        document.getElementById("upload_output").innerHTML = "Error uploading documents..."
    }
    
}

function DocumentUpload() {
        const documentRef  = useRef(null)
        const descriptionRef  = useRef(null)

        const handleSubmit = (event) => {
            event.preventDefault()

            UploadDocuments(documentRef.current.files, descriptionRef.current.value, documentRef.current.value)
            return;
            console.log(documentRef.current.files[0])
            const formData = new FormData();
            formData.set('description', documentRef.current.value)
            
            for (const file of documentRef.current.files) {
                formData.append('document', file)
            }
            const data = {
                description: descriptionRef.current.value,
                document: documentRef.current.value
            }
            console.log(data)
            let token = JSON.parse(localStorage.getItem('token'))
            const url = 'http://127.0.0.1:8000/api/consultation/add/'
            fetch(url, {
                method: 'POST',
                headers: {
                    //"Content-Type": "application/json",
                    Authorization: "Bearer " + token
                },
                body: formData,
                file: documentRef.current.value
                
            })
            .then(response => {
                // Once the backend has received and sent back a response
                console.log(response)
    SendEmail("RoseElectronicsLab2022@gmail.com", 
    "Sales Representative", 
    `A user has uploaded a document with the description: ${descriptionRef.current.value}`);
                document.getElementById("upload_output").innerHTML = "Document successfully uploaded"
            })
            .catch(err => {
                // If there is an error in the process
                document.getElementById("upload_output").innerHTML = "Error Uploading Document"
            })
            document.getElementById("upload_output").innerHTML = "Uploading..."
        }
    
    return(
        
        <div  className="container">
            <h1>Upload Documnet</h1>
            <form onSubmit={handleSubmit} className="form contact_form">
                    
                <label for="document">Document</label>
                <input 
                type="file" 
                name="files"
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
            <div id='upload_output'>

            </div>
        </div>
    )
}
 export default DocumentUpload