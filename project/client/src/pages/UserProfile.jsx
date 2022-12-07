import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function UserProfile() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [currentPass, setCurrentPass] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [secondPass, setSecondPass] = useState("");
  var authBasic = window.btoa(auth.email + ":" + auth.password);
  var config = {
    headers: {
      "Content-type": "application/json",
      Authorization: "Basic " + authBasic,
    },
  };

  const changePass = () => {
    const obj = {
      userId: auth.userId,
      password: newPassword,
    };

    let match;

    if (currentPass === auth.password && secondPass === newPassword) {
      match = true;
    } else {
      match = false;
    }

    if (match) {
      axios.patch(
        `http://localhost:8080/api/v1/user/${auth.userId}`,
        obj,
        config
      );
      navigate("/");
      auth.logout();
    }
  };

  const closeAccount = () => {
    axios.delete(`http://localhost:8080/api/v1/user/${auth.userId}`, config);
    navigate("/");
    auth.logout();
  };
  return (
    <Container fluid="md">
      <h1>Profile</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Current password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            onChange={(e) => setCurrentPass(e.target.value)}
          />
          <Form.Label>New password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <Form.Label>Re-enter new password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            onChange={(e) => setSecondPass(e.target.value)}
          />
          <Form.Text className="text-muted">
            We will never share your password with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={() => {
              changePass();
            }}
          >
            Change password
          </Button>
        </Form.Group>
        <p></p>
        <Form.Group>
          <Button variant="danger" type="button" onClick={handleShow}>
            Close account
          </Button>
        </Form.Group>
      </Form>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete account</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to close your account?</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={closeAccount}>
            Close account
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
