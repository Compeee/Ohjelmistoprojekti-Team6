import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import Clock from "../Clock.js";
import { ThemeContext } from "../ThemeContext.js";
import { NavLink } from "react-router-dom";

function Index() {
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
                  <Nav.Link as={NavLink} to="/register">
                    Register
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
              <Navbar.Text className="navBarLink" id="status">
                {theme}
              </Navbar.Text>
              <Clock></Clock>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container fluid="md">
          <p> </p>
          <h1>News</h1>
          <p> </p>
          <div className="d-flex justify-content-around">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Books</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card content.
                </Card.Text>
                <Button bg={theme} variant={theme}>
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Loans</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card content.
                </Card.Text>
                <Button bg={theme} variant={theme}>
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
          </div>
          <p> </p>
          <h1>Login</h1>
          <p> </p>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username/Email</Form.Label>
              <Form.Control type="email" placeholder="Enter username/email" />
              <Form.Text className="text-muted">
                We will never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember Login" />
            </Form.Group>
            <Button bg={theme} variant={theme} type="submit">
              Login
            </Button>
            <Form.Text className="text"> </Form.Text>
            <Form.Text className="text">
              No login credentials? <a href="/register">Register now</a>
            </Form.Text>
          </Form>
        </Container>
      </>
    </div>
  );
}

export default Index;
