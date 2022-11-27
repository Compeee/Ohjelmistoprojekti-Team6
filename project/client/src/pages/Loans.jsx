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

function Loans() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="App">
      <>
        <Navbar collapseOnSelect expand="lg" bg={theme} variant={theme}>
          <Container fluid="md">
            <Navbar.Brand>Library App</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
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
              <Nav>
                <Button variant="danger" onClick={Logout}>
                  Log out
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container fluid="md">
          <p> </p>
          <h1>Active loans</h1>
          <p> </p>
          <Table striped bordered hover variant={theme}>
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
                  <Button bg={"success"} variant={"success"} type="submit">
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
                  <Button bg={"success"} variant={"success"} type="submit">
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
            <Button bg={theme} variant={theme} type="submit">
              Search
            </Button>
          </Form>
          <p> </p>
          <Table striped bordered hover variant={theme}>
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
                  <Button bg={"success"} variant={"success"} type="submit">
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
                  <Button bg={"success"} variant={"success"} type="submit">
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
