import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

function Books() {
  const auth = useContext(AuthContext);
  const { theme, setTheme } = useContext(ThemeContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [books, setBooks] = useState();
  const [refresh, setRefresh] = useState(0);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    yr: "",
    genre: "",
    description: "",
  });
  var authBasic = window.btoa(auth.email + ":" + auth.password);
  var config = {
    headers: {
      Authorization: "Basic " + authBasic,
    },
  };
  const getBooks = () => {
    axios.get("http://localhost:8080/api/v1/book").then((res) => {
      setBooks(res.data);
    });
  };

  const postBook = () => {
    axios
      .post("http://localhost:8080/api/v1/book", newBook, config)
      .then((res) => {
        setRefresh(refresh + 1);
      });
  };

  const deleteBook = (bookId) => {
    axios
      .delete(`http://localhost:8080/api/v1/book/${bookId}`, config)
      .then((res) => {
        setRefresh(refresh + 1);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewBook({ ...newBook, [name]: value });
  };

  useEffect(() => {
    getBooks();
  }, [refresh]);
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
                <th></th>
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
                    <td>{book.onloan ? "On loan" : "Available"}</td>

                    <td>
                      <Button
                        variant="danger"
                        onClick={() => {
                          deleteBook(book.id);
                        }}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              <tr>
                <td>
                  <input
                    type="text"
                    name="title"
                    value={newBook.title}
                    onChange={handleChange}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="author"
                    value={newBook.author}
                    onChange={handleChange}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="yr"
                    value={newBook.yr}
                    onChange={handleChange}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="genre"
                    value={newBook.genre}
                    onChange={handleChange}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="description"
                    value={newBook.description}
                    onChange={handleChange}
                  ></input>
                </td>
                <td>
                  <Button variant="primary" type="submit" onClick={postBook}>
                    Add book
                  </Button>
                </td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </>
    </div>
  );
}

export default Books;
