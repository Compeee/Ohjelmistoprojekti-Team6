import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext.js";

function Loans() {
  const auth = useContext(AuthContext);
  const { theme, setTheme } = useContext(ThemeContext);
  const [books, setBooks] = useState("");
  const [loans, setLoans] = useState("");

  const getAvailBooks = () => {
    axios.get("http://localhost:8080/api/v1/book/available").then((res) => {
      setBooks(res.data);
    });
    console.log(books);
  };

  var authBasic = window.btoa(auth.email + ":" + auth.password);
  var config = {
    headers: {
      Authorization: "Basic " + authBasic,
    },
  };

  const getUsersLoans = () => {
    axios
      .get(`http://localhost:8080/api/v1/loan/byUser/${auth.userId}`, config)
      .then((res) => {
        setLoans(res.data);
        console.log(res.data);
      });
  };

  useEffect(() => {
    getAvailBooks();
  }, []);

  useEffect(() => {
    getUsersLoans();
  }, []);

  return (
    <div className="App">
      <>
        <Container fluid="md">
          <p> </p>
          <h1>Active loans</h1>
          <p> </p>
          <Table striped bordered hover variant={theme}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Renewal</th>
              </tr>
            </thead>
            <tbody>
              {loans &&
                loans.map((loan) => (
                  <tr>
                    <td>{loan.book_title}</td>
                    <td>{loan.startDate}</td>
                    <td>{loan.endDate}</td>
                    <td>
                      <Button bg={"success"} variant={"success"} type="submit">
                        Renew
                      </Button>
                    </td>
                  </tr>
                ))}
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
              {books &&
                books.map((book) => (
                  <tr>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.yr}</td>
                    <td>{book.genre}</td>
                    <td>{book.description}</td>
                    <td>
                      <Button bg={theme} variant={theme} type="submit">
                        Loan
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Container>
      </>
    </div>
  );
}

export default Loans;
