import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../Hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { error, handleGoogleSignIn, signInUsingEmailPassword } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/home";

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

  const handleLogin = () => {
    signInUsingEmailPassword(email, password);
  };

  return (
    <div>
      <div className="login-form mx-auto mt-5">
        <h2 className="text-center">Please Login</h2>
        <Form className="form ">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={handleEmailChange}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onBlur={handlePasswordChange}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <p>
            New in MedService?
            <Link className="text-danger " to="/register">
              {" "}
              click here to register
            </Link>
          </p>
          <p>{error}</p>

          <Button
            className="w-100"
            onClick={handleLogin}
            variant="primary"
            type="submit"
          >
            Login
          </Button>

          <p className="fw-bold mt-2 text-center">Or</p>

          <Button className="w-100" onClick={googleSignIn} variant="primary">
            {" "}
            Login with Google
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
