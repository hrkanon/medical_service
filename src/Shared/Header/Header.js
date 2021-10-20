import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import logo from "../../images/logo-2.png";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Header = () => {
  const { user, handleSignOut } = useAuth();
  return (
    <>
      <Navbar
        className="nav-bar"
        collapseOnSelect
        bg="light"
        variant="light"
        expand="lg"
        sticky="top"
      >
        <Container>
          <div className="d-flex justify-content-end ">
            <Navbar.Brand>
              <img className="w-75" src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          </div>
          <Navbar.Collapse className="justify-content-end ">
            <Nav.Link
              className="text-center text-dark"
              as={HashLink}
              to="/home"
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="text-center text-dark"
              as={HashLink}
              to="/services"
            >
              Services
            </Nav.Link>
            <Nav.Link className="text-center text-dark" as={Link} to="/doctors">
              doctors
            </Nav.Link>
            <Nav.Link
              className="text-center text-dark"
              as={HashLink}
              to="/review"
            >
              Reviews
            </Nav.Link>
            <Nav.Link
              className="text-center text-dark"
              as={Link}
              to="/appointment"
            >
              Appointment
            </Nav.Link>
            {user.email ? (
              <Nav.Link className="text-dark text-center">
                Signed as: {user.displayName}
                <span className="ps-3" onClick={handleSignOut}>
                  Logout
                </span>
              </Nav.Link>
            ) : (
              <Nav.Link className="text-center text-dark" as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
