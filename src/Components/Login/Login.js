import React from "react";
import { Form } from "react-bootstrap";
import "./Login.css";
import googleImg from "../../images/google-img.png";
import useAuth from "../../hooks/useAuth";
import { useHistory, useLocation } from "react-router";
import { NavLink } from "react-router-dom";
const Login = () => {
  const { signInWithGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/services/:id";
  const handleGoogleSignIn = () => {
    signInWithGoogle().then(() => {
      history.push(redirect_url);
    });
  };
  return (
    <div className="mt-5 login-form">
      <Form.Floating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="email"
          placeholder="name@example.com"
          required
        />
        <label htmlFor="floatingInputCustom">Email address</label>
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
      <button className="login-btn">Login</button>
      <p className="social-divider">
        ----------or use one of these options----------
      </p>

      <span onClick={handleGoogleSignIn} className="google-login">
        <img className="google-img" src={googleImg} alt="" />
      </span>
      <div className="reg pt-4">
        <p className="fw-bolder">
          New In <code>Medica?</code>
        </p>
        <NavLink to="/register">
          <p className="ps-1">Register</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Login;
