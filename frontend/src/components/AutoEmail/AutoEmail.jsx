// 09/11/2022 : Autoemail added , created an account in emialjs 

import emailjs from "emailjs-com";
import React from 'react';

export default function Autoemail() {

    function sendEmail(e) {
        e.preventDefault();

    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')    
    // emailjs.sendForm('gmail', 'youtube_template', e.target, 'user_JABO21I8Gm6sxByJH17Nu')
    emailjs.sendForm('service_n4kyn9j', 'template_eyvh5rn', e.target, 'RmNgCopFUrZDWiDmP')

        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(
        <div>
            <div className="container">
            <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}