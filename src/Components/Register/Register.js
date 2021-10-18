import React from "react";
import { Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Register.css";
const Register = () => {
  return (
    <div className="mt-5 reg-form">
      <Form.Floating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="text"
          placeholder="Your Name"
          required
        />
        <label htmlFor="floatingInputCustom">Your Name</label>
      </Form.Floating>
      <Form.Floating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="email"
          placeholder="name@example.com"
          required
        />
        <label htmlFor="floatingInputCustom">Email address</label>
      </Form.Floating>
      <Form.Floating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="text"
          placeholder="Dhaka-1214"
          required
        />
        <label htmlFor="floatingInputCustom">Address</label>
      </Form.Floating>
      <Form.Floating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="text"
          placeholder="O+"
          required
        />
        <label htmlFor="floatingInputCustom">Blood Group</label>
      </Form.Floating>
      <Form.Floating>
        <Form.Control
          id="floatingPasswordCustom"
          type="password"
          placeholder="Password"
          required
        />
        <label htmlFor="floatingPasswordCustom">Password</label>
      </Form.Floating>
      <button className="reg-btn">Register</button>
      <div className="reg pt-4">
        <p className="fw-bolder">Already a member?</p>
        <NavLink to="/login">
          <p className="ps-1">Login</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Register;
