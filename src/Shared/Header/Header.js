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
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        sticky="top"
      >
        <Container>
          <Navbar.Brand>
            <img className="w-50" src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto text-center">
              <Nav.Link className="" as={HashLink} to="/home">
                Home
              </Nav.Link>
              <Nav.Link className="px-4" as={HashLink} to="/services">
                Services
              </Nav.Link>
              <Nav.Link className="px-4" as={Link} to="/doctors">
                doctors
              </Nav.Link>
              <Nav.Link as={HashLink} to="/review">
                Reviews
              </Nav.Link>
              <Nav.Link className="px-4" as={Link} to="/appointment">
                Appointment
              </Nav.Link>
              {user.email ? (
                <Nav.Link onClick={handleSignOut}>
                  {" "}
                  <span className="pe-3">{user.displayName}</span> Logout
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
