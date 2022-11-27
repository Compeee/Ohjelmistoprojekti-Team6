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

function Users() {
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
                  <Nav.Link as={NavLink} to="/books">
                    Books
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
          <h1>Users list</h1>
          <p> </p>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>User search</Form.Label>
              <Form.Control type="email" placeholder="Enter Search Terms" />
              <Form.Text className="text-muted">
                Searching instructions/tips here
              </Form.Text>
            </Form.Group>
            <Button variant={theme} type="submit">
              Search
            </Button>
          </Form>
          <p> </p>
          <Table striped bordered hover bg={theme} variant={theme}>
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Role</th>
                <th>Creation</th>
                <th>Active Loans</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Loaner</td>
                <td>
                  <Button variant={"info"} type="submit">
                    Show
                  </Button>
                </td>
                <td>User</td>
                <td>2022-10-10</td>
                <td>10</td>
                <td>
                  <Button variant={"info"} type="submit">
                    Edit details
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Librarian</td>
                <td>
                  <Button variant={"info"} type="submit">
                    Show
                  </Button>
                </td>
                <td>Admin</td>
                <td>2019-10-30</td>
                <td>None</td>
                <td>
                  <Button variant={"info"} type="submit">
                    Edit details
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </>
    </div>
  );
}

export default Users;
