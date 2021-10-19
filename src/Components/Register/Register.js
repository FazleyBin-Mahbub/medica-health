import React from "react";
import { Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Register.css";
const Register = () => {
  const {
    handleRegistration,
    handleEmailChange,
    handlePassChange,
    handleNameChange,
    handleBloodGroupChange,
    error,
  } = useAuth();

  return (
    <div className="mt-5 reg-form">
      <Form onSubmit={handleRegistration}>
        <h1>Create a New Account</h1>
        <Form.Floating className="mb-3">
          <Form.Control
            onBlur={handleNameChange}
            id="floatingInputCustom"
            type="text"
            placeholder="Your Name"
            required
          />
          <label>Your Name</label>
        </Form.Floating>
        <Form.Floating className="mb-3">
          <Form.Control
            onBlur={handleEmailChange}
            type="email"
            placeholder="name@example.com"
            required
          />
          <label>Email address</label>
        </Form.Floating>
        <Form.Floating className="mb-3">
          <Form.Control type="text" placeholder="Dhaka-1214" required />
          <label>Address</label>
        </Form.Floating>
        <Form.Floating className="mb-3">
          <Form.Control
            onBlur={handleBloodGroupChange}
            type="text"
            placeholder="O+"
            required
          />
          <label>Blood Group</label>
        </Form.Floating>
        <Form.Floating>
          <Form.Control
            onBlur={handlePassChange}
            type="password"
            placeholder="Password"
            required
          />
          <label>Password</label>
        </Form.Floating>
        <p className="text-danger pt-4 fw-bolder">{error}</p>
        <button className="reg-btn">Register</button>
      </Form>

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
