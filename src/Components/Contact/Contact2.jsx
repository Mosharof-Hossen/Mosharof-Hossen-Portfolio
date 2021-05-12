import React from 'react';
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import Footer from '../Footer/Footer';
init("user_XiBcD7L7zAZysh4IgZnO2");
// import './ContactUs.css';

export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();
        console.log(e.target)
        emailjs.sendForm("service_x9vle0s", "template_kfzi2cc", e.target, 'user_XiBcD7L7zAZysh4IgZnO2')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
    }

    return (
        <div className="pt-5" style={{ backgroundColor: '#E7D085' }} id ="contact-details">
            <div className="text-center pt-5">
                <p style={{ color: "#B1B493", fontWeight: "bold" }}>C O N T A C T &nbsp;&nbsp;  M E</p>
                <h1 style={{ color: "#3A4256", fontWeight: "bold" }} data-aos="fade-up">Have a Project</h1>
                <p style={{ color: "#3A4256", fontWeight: "bold" }} data-aos="fade-up">If you want to work on an innovative project, please contact me, I will give you enough time.</p>

            </div>
            <div className="container">
                <form className="contact-form" onSubmit={sendEmail}>
                    <div className="row mx-auto  ">

                        <div className="col-8 form-group mx-auto " data-aos="fade-up">
                            <input className="form-control" type="text" name="name" placeholder="Name" />
                        </div>

                        <div className="col-8 form-group mx-auto " data-aos="fade-up">
                            <input className="form-control" type="text" name="subject" placeholder="Subject" />
                        </div>

                        <div className="col-8 form-group mx-auto " data-aos="fade-up">
                            <input className="form-control" type="email" name="email" placeholder="Email" />
                        </div>

                        <div className="col-8 form-group mx-auto " data-aos="fade-up">
                            <textarea className="form-control" name="message" cols = "30" rows = "5"placeholder="Message" />
                        </div>
                        <div className="col-8  mx-auto text-center">
                            <input className="btn btn-primary" type="submit" value="Send" />
                        </div>
                    </div>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
}