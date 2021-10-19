import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../Hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { handleGoogleSignIn, signInUsingEmailPassword } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/";

  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      history.push(redirect_url);
    });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (email, password) => {
    signInUsingEmailPassword(email, password);
  };

  return (
    <div className="container login-form py-3 mt-5">
      <h2 className="text-center py-3">Please Login</h2>
      <div className="form d-flex flex-column align-items-center">
        <input
          onBlur={handleEmailChange}
          type="email"
          placeholder="your email"
        />
        <br />
        <input
          onBlur={handlePasswordChange}
          type="password"
          placeholder="password"
        />
        <br />
        <p>
          New in MedService?
          <Link className="text-danger ps-2" to="/register">
            click here to register
          </Link>
        </p>
        <button
          className="btn btn-primary w-100"
          onClick={() => handleLogin(email, password)}
        >
          Login
        </button>
        <p className="fw-bold mt-2 text-center">Or</p>
        <button className="w-100 btn btn-primary" onClick={googleSignIn}>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
