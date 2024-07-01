import { Button, Container, Form, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import React from "react";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import CommentArea from "./CommentArea";

const URL = "https://striveschool-api.herokuapp.com/api/comments/";
const auth = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZjk5NzdjMjM5YzAwMTUyZjRiM2MiLCJpYXQiOjE3MTk0OTA4MjksImV4cCI6MTcyMDcwMDQyOX0.DKsZ6NE4RC2q5DGQhtPu6bhYlYLaj2pWT9Zbpm7r2Ws";

class BookList extends React.Component {
  state = {
    title: null,
    genre: null,
    comments: [],
    isLoading: false
  };

  fetchComments = asin => {
    fetch(`${URL + asin}`, {
      headers: {
        Authorization: auth
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Couldn't get data");
        }
      })
      .then(comments => {
        this.setState({ comments: comments });
        console.log(this.state.comments);
      })
      .catch(error => console.log(error));
  };

  handleFieldChange = value => this.setState({ title: value });

  handleSubmit = event => event.preventDefault();

  render() {
    return (
      <Container>
        <Container className="d-flex justify-content-evenly my-3">
          <Button variant="info" onClick={() => this.setState({ genre: fantasy })}>
            Fantasy
          </Button>
          <Button variant="info" onClick={() => this.setState({ genre: history })}>
            History
          </Button>
          <Button variant="info" onClick={() => this.setState({ genre: horror })}>
            Horror
          </Button>
          <Button variant="info" onClick={() => this.setState({ genre: romance })}>
            Romance
          </Button>
          <Button variant="info" onClick={() => this.setState({ genre: scifi })}>
            SciFi
          </Button>
        </Container>
        <Container className="mb-3">
          <Form className="mt-5" onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Search</Form.Label>
              <Form.Control type="text" placeholder="Search a book" onChange={event => this.handleFieldChange(event.target.value)} />
            </Form.Group>
          </Form>
        </Container>
        <Row>
          <Row className="gy-3 mb-3 gx-3 col-8">
            {this.state.genre && this.state.genre.length > 0 ? (
              this.state.title ? (
                this.state.genre.filter(book => book.title.toLowerCase().includes(this.state.title.toLowerCase())).map(book => <SingleBook key={book.asin} book={book} asin={book.asin} fetchComments={this.fetchComments} />)
              ) : (
                this.state.genre.map(book => <SingleBook key={book.asin} book={book} asin={book.asin} handleClick={this.props.handleClick} fetchComments={this.fetchComments} />)
              )
            ) : (
              <h2>Select a genre</h2>
            )}
          </Row>
          <div className="col-4 mt-3">
            <CommentArea comments={this.state.comments} asin={this.props.asin} fetchComments={this.fetchComments} isSelected={this.props.isSelected} isLoading={this.state.isLoading} />
          </div>
        </Row>
      </Container>
    );
  }
}

export default BookList;
