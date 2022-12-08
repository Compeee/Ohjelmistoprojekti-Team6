import React, { useContext, useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";
function Index() {
  const { theme, setTheme } = useContext(ThemeContext);
  const auth = useContext(AuthContext);
  const [email, setEmail] = useState(0);
  const [password, setPassword] = useState(0);
  const navigate = useNavigate();
  // Send a auth request to the API to authenticate the user, then log the user in with the response data.
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const response = await axios
      .post(
        "http://localhost:8080/api/v1/auth",
        { username: email, password: password },
        { "Content-Type": "application/json" }
      )
      .then((res) => {
        auth.login(password, res.data.email, res.data.role, res.data.id);
        navigate("/loans");
      });
  };

  return (
    <div className="App">
      <>
        <Container fluid="md">
          <p> </p>
          <h1>Login</h1>
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
