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

function Loans() {
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
                <Nav.Link href="/loans">Loans</Nav.Link>
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
          <h1>Active loans</h1>
          <p> </p>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Year</th>
                <th>Genre</th>
                <th>Description</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Status</th>
                <th>Renewal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Neulos</td>
                <td>Reetta Pellikka</td>
                <td>2022</td>
                <td>Tietokirjallisuus</td>
                <td>
                  Neulos opastaa hitaan muodin maailmaan ja tarjoaa vaatteita ja
                  asusteita jokaiseen vuodenaikaan.
                </td>
                <td>2022-10-01</td>
                <td>2022-10-31</td>
                <td>Pending</td>
                <td>
                  <Button variant="primary" type="submit">
                    Renew
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Ai­noa ko­ti­ni</td>
                <td>Hanna Brotherus</td>
                <td>2022</td>
                <td>Kaunokirjallisuus</td>
                <td>
                  Ainoa kotini on rohkea romaani naisen halusta nähdä itsensä
                  kokonaisena.
                </td>
                <td>2022-10-20</td>
                <td>2022-12-15</td>
                <td>Extended</td>
                <td>
                  <Button variant="primary" type="submit">
                    Renew
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
          <p> </p>
          <h1>Available books</h1>
          <p> </p>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Book search</Form.Label>
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
                <th>Loan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Katse</td>
                <td>Saija Kuusela</td>
                <td>2022</td>
                <td>Poliisikirjallisuus</td>
                <td>Description</td>
                <td>
                  <Button variant="primary" type="submit">
                    Loan
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Loukko</td>
                <td>Max Seeck</td>
                <td>2022</td>
                <td>Kaunokirjallisuus</td>
                <td>Description</td>
                <td>
                  <Button variant="primary" type="submit">
                    Loan
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

export default Loans;
