import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

/* class CommentsList extends Component {
  state = {};

  render() {
    return (
      <ListGroup className="my-3">
        {this.props.comments.map(comment => (
          <SingleComment key={comment._id} className="d-flex flex-column align-items-center" commentId={comment._id} />
        ))}
      </ListGroup>
    );
  }
} */

class CommentsList extends Component {
  state = {
    comments: []
  };

  /* componentDidUpdate(prevProps) {
    if (prevProps.comments.lenght !== this.props.comments.lenght) {
      this.props.fetchComments(this.props.asin);
    }
  } */

  render() {
    return (
      <ListGroup className="my-3">
        {this.props.comments.map(comment => (
          <SingleComment key={comment._id} className="d-flex flex-column align-itmes-center" commentId={comment._id} fetchComments={this.props.fetchComments} asin={this.props.asin} />
        ))}
      </ListGroup>
    );
  }
}

export default CommentsList;
