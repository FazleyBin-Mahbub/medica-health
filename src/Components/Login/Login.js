import React from "react";
import { Form } from "react-bootstrap";
import "./Login.css";
import googleImg from "../../images/google-img.png";
import useAuth from "../../hooks/useAuth";
import { useHistory, useLocation } from "react-router";
import { NavLink } from "react-router-dom";
const Login = () => {
  const {
    signInWithGoogle,
    handleEmailChange,
    handlePassChange,
    handleSignInWithEmailAndPassword,
    error,
    setError,
  } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/services/:id";
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        history.push(redirect_url);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const emailAndPassSignIn = () => {
    handleSignInWithEmailAndPassword()
      .then(() => {
        history.push(redirect_url);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="mt-5 login-form">
      <Form onSubmit={emailAndPassSignIn}>
        <h1>Login</h1>
        <Form.Floating className="mb-3">
          <Form.Control
            onBlur={handleEmailChange}
            type="email"
            placeholder="name@example.com"
            required
          />
          <label>Email address</label>
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
        <button className="login-btn">Login</button>
      </Form>

      <p className="social-divider">
        ---------- or use these option ----------
      </p>

      <span onClick={handleGoogleSignIn} className="google-login">
        <img className="google-img" src={googleImg} alt="" />
      </span>
      <div className="reg pt-4">
        <p className="fw-bolder">
          New In <code className="text-uppercase">Medica?</code>
        </p>
        <NavLink to="/register">
          <p className="ps-1">Register</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Login;
