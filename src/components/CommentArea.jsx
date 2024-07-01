import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
import { Alert } from "react-bootstrap";

class CommentArea extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      this.props.fetchComments(this.props.asin);
    } else {
      console.log("prevPros === this.props");
    }
  }

  render() {
    return (
      <div className="position-sticky" style={{ top: "30px" }}>
        {this.props.isSelected ? (
          <>
            {this.props.comments.length > 0 ? (
              <CommentsList comments={this.props.comments} fetchComments={this.props.fetchComments} asin={this.props.asin} />
            ) : (
              <Alert variant="warning" className="text-center">
                <strong>There are no comments</strong>
              </Alert>
            )}
            <AddComment asin={this.props.asin} comments={this.props.comments} fetchComments={this.props.fetchComments} />
          </>
        ) : (
          <Alert variant="warning" className="text-center">
            <strong>Select a book</strong>
          </Alert>
        )}
      </div>
    );
  }
}

/* const CommentArea = ({ isSelected }) => {
  if (!isSelected) {
    return (
      <Alert variant="warning" className="align-self-start">
        Select a book
      </Alert>
    );
  } else {
    return (
      <>
        <AddComment asin={this.props.asin} />
        {this.state.comments.lenght > 0 ? (
          <CommentsList comments={this.props.comments} />
        ) : (
          <Alert variant="warning" className="align-slef-start">
            There are no comments
          </Alert>
        )}
      </>
    );
  }
}; */

export default CommentArea;
