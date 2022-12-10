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
  const [refresh, setRefresh] = useState(0);
  const [title, setTitle] = useState("");

  //Getting all available books
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

  // Getting users loans data
  const getUsersLoans = () => {
    axios
      .get(`http://localhost:8080/api/v1/loan/byUser/${auth.userId}`, config)
      .then((res) => {
        setLoans(res.data);
        console.log(res.data);
      });
  };

  const loanBook = () => {
    axios.post(`http://localhost:8080/api/v1/loan/`, config).then((res) => {
      setRefresh(refresh + 1);
    });
  };

  const returnLoan = (loan_id) => {
    axios
      .delete(`http://localhost:8080/api/v1/loan/${loan_id}`, config)
      .then((res) => {
        setRefresh(refresh + 1);
      });
  };

  const extendLoan = (loan_id) => {
    axios
      .put(`http://localhost:8080/api/v1/loan/extend/${loan_id}`, config)
      .then((res) => {
        setRefresh(refresh + 1);
      });
  };

  let changeTitle = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };

  const getSearchedBook = () => {
    axios
      .get(`http://localhost:8080/api/v1/book/search/${title}`)
      .then((res) => {
        setBooks(res.data);
      });
  };

  useEffect(() => {
    getAvailBooks();
  }, [refresh]);

  useEffect(() => {
    getUsersLoans();
  }, [refresh]);

  return (
    <div className="App">
      <>
        <Container fluid="md">
          <h1 style={{ marginTop: "2%", marginBottom: "2%" }}>Loans</h1>
          {/* User's current loans table data */}
          <Table striped bordered hover variant={theme}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Renewal</th>
                <th>Return</th>
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
                      <Button
                        bg={"success"}
                        variant={"success"}
                        onClick={() => {
                          extendLoan(loan.id);
                        }}
                      >
                        Renew
                      </Button>
                    </td>

                    <td>
                      <Button
                        bg={"success"}
                        variant={"danger"}
                        onClick={() => {
                          returnLoan(loan.id);
                        }}
                        type="submit"
                      >
                        Return
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
          <h1 style={{ marginTop: "2%", marginBottom: "2%" }}>
            Available books
          </h1>
          {/* Available books search form */}
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Book search</Form.Label>
              <Form.Control
                placeholder="Enter Search Terms"
                onChange={changeTitle}
              />
              <Form.Text className="text-muted">
                Searching instructions/tips here
              </Form.Text>
            </Form.Group>
            <Button
              bg={theme}
              variant={theme}
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                getSearchedBook();
              }}
            >
              Search
            </Button>
            <Button
              bg={theme}
              variant={theme}
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                getAvailBooks();
              }}
            >
              Available Books
            </Button>
          </Form>
          <p> </p>
          {/* Available loans table data */}
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
                      <Button
                        bg={theme}
                        variant={theme}
                        type="submit"
                        onClick={() => {
                          loanBook(book.id);
                        }}
                      >
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
