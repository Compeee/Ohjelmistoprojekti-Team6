import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

function Users() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [users, setUsers] = useState(0);
  const auth = useContext(AuthContext);
  var authBasic = window.btoa(auth.email + ":" + auth.password);
  var config = {
    headers: {
      Authorization: "Basic " + authBasic,
    },
  };
  const getUsers = () => {
    axios.get("http://localhost:8080/api/v1/user", config).then((res) => {
      setUsers(res.data);
    });
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="App">
      <>
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
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((user) => (
                  <>
                    <tr>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                      <td>{user.timestamp}</td>
                    </tr>
                  </>
                ))}
            </tbody>
          </Table>
        </Container>
      </>
    </div>
  );
}

export default Users;
