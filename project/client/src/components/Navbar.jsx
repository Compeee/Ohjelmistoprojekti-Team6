import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navigate, NavLink, useNavigate, useParams } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { ThemeContext } from "../context/ThemeContext.js";
import Container from "react-bootstrap/esm/Container.js";
import Button from "react-bootstrap/esm/Button.js";
import Nav from "react-bootstrap/Nav";
import Clock from "../Clock.js";
import { AuthContext } from "../context/AuthContext.js";

export default function NavigationBar() {
  const navigate = useNavigate();
  const { theme, setTheme } = useContext(ThemeContext);
  const auth = useContext(AuthContext); //Linking our AuthContext from app
  return (
    <Navbar collapseOnSelect expand="lg" bg={theme} variant={theme}>
      <Container fluid="md">
        <Navbar.Brand>Library App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav activeKey={"/"}>
            {!auth.isLoggedIn && (
              <Nav.Item>
                <Nav.Link as={NavLink} to="/">
                  Home
                </Nav.Link>
              </Nav.Item>
            )}
            {!auth.isLoggedIn && (
              <Nav.Item>
                <Nav.Link as={NavLink} to="/register">
                  Register
                </Nav.Link>
              </Nav.Item>
            )}
            {auth.role === "ADMIN" && auth.isLoggedIn && (
              <Nav.Item>
                <Nav.Link as={NavLink} to="/books">
                  Books
                </Nav.Link>
              </Nav.Item>
            )}
            {auth.role === "ADMIN" && auth.isLoggedIn && (
              <Nav.Item>
                <Nav.Link as={NavLink} to="/users">
                  Users
                </Nav.Link>
              </Nav.Item>
            )}
            {auth.isLoggedIn && (
              <Nav.Item>
                <Nav.Link as={NavLink} to="/loans">
                  Loans
                </Nav.Link>
              </Nav.Item>
            )}
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
            <Navbar.Text style={{ padding: "2px" }} id="status">
              {auth.isLoggedIn ? "Logged in" : "Not logged in"}
            </Navbar.Text>
            <Clock></Clock>
          </Nav>
          {auth.isLoggedIn && (
            <Nav.Item>
              <Nav.Link as={NavLink} to="/profile">
                Profile
              </Nav.Link>
            </Nav.Item>
          )}
          {auth.isLoggedIn && (
            <Nav>
              <Button
                variant="danger"
                onClick={() => {
                  auth.logout();
                  navigate("/");
                }}
              >
                Log out
              </Button>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
