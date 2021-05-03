import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className="py-5" style={{ backgroundColor: '#E7D085' }} id ="contact-details" >
            <div className="text-center pt-5">
                <p style={{ color: "#B1B493", fontWeight: "bold" }}>C O N T A C T &nbsp;&nbsp;  M E</p>
                <h1 style={{ color: "#3A4256", fontWeight: "bold" }}>Have a Project</h1>
                <p style={{ color: "#3A4256", fontWeight: "bold" }}>If you want to work on an innovative project, please contact me, I will give you enough time.</p>

            </div>
            <div className="container">
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Control type="text" placeholder="Your Name" />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Control type="email" placeholder="Your Email" />
                    </Form.Group>


                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={4} placeholder="Message" />
                    </Form.Group>
                    <Button className="header-btn" variant="primary"style={{ color: "", fontWeight: "bold",backgroundColor:"#3A4256" }} type="submit">Send Message</Button>
                </Form>
            </div>
        </div>
    );
};

export default Contact;