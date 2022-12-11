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

let local = "http://localhost:8080/api/v1/book/available";
let local2 = "http://localhost:8080/api/v1/loan/byUser/";
let api1 =
  "http://ec2-13-50-112-65.eu-north-1.compute.amazonaws.com:8080/eLibrary-spring-boot/api/v1/book/available";
let api2 =
  "http://ec2-13-50-112-65.eu-north-1.compute.amazonaws.com:8080/eLibrary-spring-boot/api/v1/loan/byUser/";

function Loans() {
  const auth = useContext(AuthContext);
  const { theme, setTheme } = useContext(ThemeContext);
  const [books, setBooks] = useState("");
  const [loans, setLoans] = useState("");

  const getAvailBooks = () => {
    axios
      .get(api1)
      .then((res) => {
        setBooks(res.data);
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Unknown Error", error.message);
        }
        console.log(error.config);
      });
    axios
      .get(local)
      .then((res) => {
        setBooks(res.data);
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Unknown Error", error.message);
        }
        console.log(error.config);
      });
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
      .get(`${local2}${auth.userId}`, config)
      .then((res) => {
        setLoans(res.data);
        console.log(res.data);
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Unknown Error", error.message);
        }
        console.log(error.config);
      });
    axios
      .get(`${api2}${auth.userId}`, config)
      .then((res) => {
        setLoans(res.data);
        console.log(res.data);
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Unknown Error", error.message);
        }
        console.log(error.config);
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
          <h1 style={{ marginTop: "2%", marginBottom: "2%" }}>Loans</h1>
          {/* User's current loans table data */}
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
          <h1 style={{ marginTop: "2%", marginBottom: "2%" }}>
            Available books
          </h1>
          {/* Available books search form */}
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
                      <Button bg={"success"} variant={"success"} type="submit">
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
