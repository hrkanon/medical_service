import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../Hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { error, handleGoogleSignIn } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/home";

  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      history.push(redirect_url);
    });
  };
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
            <Link className="text-danger " to="/register">
              {" "}
              click here to register
            </Link>
          </p>
          <p>{error}</p>
          <Button variant="primary" type="submit">
            Login
          </Button>
          <div className="d-flex mt-2 align-items-center or">
            <div className="border w-50"></div>
            <p>Or</p>
            <div className="border w-50"></div>
          </div>
          <Button onClick={googleSignIn} variant="info">
            {" "}
            Login with Google
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
