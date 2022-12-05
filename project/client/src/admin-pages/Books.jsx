import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Books() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [books, setBooks] = useState();
  const getBooks = () => {
    axios.get("http://localhost:8080/api/v1/book").then((res) => {
      setBooks(res.data);
    });
    console.log(books);
  };
  useEffect(() => {
    getBooks();
  }, []);
  return (
    <div className="App">
      <>
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
              {books &&
                books.map((book) => (
                  <tr>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.yr}</td>
                    <td>{book.genre}</td>
                    <td>{book.description}</td>
                    <td>{book.onloan ? "Available" : "On loan"}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Container>
      </>
    </div>
  );
}

export default Books;
