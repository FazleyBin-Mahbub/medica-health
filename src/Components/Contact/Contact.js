import React from "react";
import "./Contact.css";
import { Form } from "react-bootstrap";
import contactImg from "../../images/contacts_01.jpg";
const Contact = () => {
  return (
    <div>
      <div className="contact-sec">
        {/* contact us heading  */}
        <h2 className="fw-bolder ">Contact Us</h2>
      </div>
      <div className="contact-container">
        <div className="col-6">
          <img src={contactImg} alt="" />
        </div>
        <div className="col-6">
          <span className="contact-us-title fw-bolder ">Leave a message</span>
          <h1 className="fw-bolder pt-4">Drop Us a Line</h1>
          <p className="text-muted fw-bolder">
            Your email address will not be published. Required fields are marked
            *
          </p>
          {/* contact us form  */}
          <Form className="contact-form">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Your Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Messages</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
          {/* get in touch button  */}
          <button className="contact-btn fw-bolder">Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
