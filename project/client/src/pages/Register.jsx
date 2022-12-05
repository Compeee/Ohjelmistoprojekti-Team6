import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import axios from "axios";

export function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const response = await axios
      .post(
        "http://localhost:8080/api/v1/register",
        { username: username, password: password, email: email },
        { "Content-Type": "application/json" }
      )
      .then((res) => navigate("/login"));
  };
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="App">
      <Container fluid="md">
        <p> </p>
        <h1>Register</h1>
        <p> </p>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We will never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="username"
              placeholder="Enter username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button
            bg={theme}
            variant={theme}
            type="submit"
            onClick={onSubmitHandler}
          >
            Register
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Register;
