import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Clock from "../Clock.js";



function Register() {
  return (
    <div className="App">
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container fluid="md">
            <Navbar.Brand>Library App</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Theme" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Light</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Dark</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Navbar.Text id="status">STATUS</Navbar.Text>
              <p>" "</p>
              <Nav>
                <Clock></Clock>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container fluid="md">
          <p> </p>
          <h1>Register</h1>
          <p> </p>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We will never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="username" placeholder="Enter username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </Container>
      </>
    </div>
  );
}

export default Register;
