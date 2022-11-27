import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Table from "react-bootstrap/Table";
import Clock from "../Clock.js";
import Logout from "../Logout.js";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext.js";
import { NavLink } from "react-router-dom";

function Books() {
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
                  <Nav.Link as={NavLink} to="/users">
                    Users
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
              <Navbar.Text id="status">STATUS</Navbar.Text>
              <Nav>
                <Clock></Clock>
              </Nav>
              <Button variant="danger" onClick={Logout}>
                Log out
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container fluid="md">
          <p> </p>
          <h1>Books list</h1>
          <p> </p>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Books search</Form.Label>
              <Form.Control type="email" placeholder="Enter Search Terms" />
              <Form.Text className="text-muted">
                Searching instructions/tips here
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Form>
          <p> </p>
          <Table striped bordered hover bg={theme} variant={theme}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Year</th>
                <th>Genre</th>
                <th>Description</th>
                <th>Loan Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Test book</td>
                <td>Test author</td>
                <td>2022</td>
                <td>Test genre</td>
                <td>Test description</td>
                <td>Not loaned</td>
              </tr>
              <tr>
                <td>Test book 2</td>
                <td>Test author 2</td>
                <td>2021</td>
                <td>Test genre 2</td>
                <td>Generic description</td>
                <td>Loaned</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </>
    </div>
  );
}

export default Books;
