import React from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import "./Appointment.css";

const Appointment = () => {
  const { user } = useAuth();
  return (
    <div>
      <div className=" appointment-area mt-5 p-3 rounded">
        <div className="text-center">
          <h2>Make An Appointment</h2>
          <small>(Please fill the Form)</small>
        </div>
        <Form className="appointment-form">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Doctor</Form.Label>
            <Form.Control type="text" placeholder="Doctor's Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Appointment Date</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Appointment Time</Form.Label>
            <Form.Control type="time" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Patient's Name</Form.Label>
            {user.email ? (
              <Form.Control type="text" placeholder={user.displayName} />
            ) : (
              <Form.Control type="text" placeholder="Enter Your Name" />
            )}
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control type="date" />
          </Form.Group>

          <Form.Group as={Row} className="mt-3">
            <Form.Label as="legend" column sm={2}>
              Gender
            </Form.Label>
            <Col sm={10}>
              <Form.Check
                type="radio"
                label="Male"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
              <Form.Check
                type="radio"
                label="Female"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
            </Col>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control placeholder="phone number" />
          </Form.Group>

          <Button className="w-40" variant="primary" type="submit">
            Submit
          </Button>
          <Button className="ms-2" variant="primary" type="reset">
            Reset
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Appointment;
