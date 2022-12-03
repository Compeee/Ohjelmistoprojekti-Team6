import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Clock from "../Clock.js";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext.js";
import { NavLink } from "react-router-dom";



export function Register() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="App">
      <>
        <Navbar collapseOnSelect expand="lg" bg={theme} variant={theme}>
          <Container fluid="md">
            <Navbar.Brand>Library App</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav activeKey={"/"}>
                <Nav.Item>
                  <Nav.Link as={NavLink} to="/">
                    Login
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Nav className="me-auto">
                <NavDropdown title="Theme" id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={() => setTheme("primary")}>
                    Blue
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setTheme("dark")}>
                    Dark
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setTheme("light")}>
                    Light
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setTheme("success")}>
                    Green
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setTheme("warning")}>
                    Yellow
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Navbar.Text className="navBarLink" id="status">
                  {theme}
                </Navbar.Text>
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
            <Button bg={theme} variant={theme} type="submit">
              Register
            </Button>
          </Form>
        </Container>
      </>
    </div>
  );
}

export default Register;
