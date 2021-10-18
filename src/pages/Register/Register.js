import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  console.log(name, email, password);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const { signUpWithEmailPassword } = useAuth();
  return (
    <div>
      <div className="login-form mx-auto mt-5">
        <h2 className="text-center">Please Register</h2>
        <Form className="  form ">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              onBlur={handleNameChange}
              type="text"
              placeholder="Enter your name"
            />
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
            Already have an Account?
            <Link className="text-danger " to="/login">
              {" "}
              click here to login
            </Link>
          </p>
          <Button
            onClick={() => signUpWithEmailPassword(name, email, password)}
            variant="primary"
            type="submit"
          >
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
