import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { user, error, handleGoogleSignIn, handleSignOut } = useAuth();
  return (
    <div>
      <div className="login-form mx-auto mt-5">
        <h2 className="text-center">Please Login</h2>
        <Form className="form ">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <p>
            New in MedService?
            <Link to="/register"> click here to register</Link>
          </p>
          <Button variant="primary" type="submit">
            Login
          </Button>
          <div className="d-flex mt-2 align-items-center or">
            <div className="border w-50"></div>
            <p>Or</p>
            <div className="border w-50"></div>
          </div>
          <Button onClick={handleGoogleSignIn} variant="info">
            {" "}
            Login with Google
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
