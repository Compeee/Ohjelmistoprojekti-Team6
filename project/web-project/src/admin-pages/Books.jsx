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

function Books() {
  return (
    <div className="App">
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container fluid="md">
            <Navbar.Brand>Library App</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/users">Users</Nav.Link>
                <Nav.Link href="/books">Books</Nav.Link>
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
              <p>" "</p>
              <Nav>
                <Navbar.Text> </Navbar.Text>
                <Button variant="danger">Log out</Button>{" "}
              </Nav>
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
          <Table striped bordered hover variant="dark">
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
