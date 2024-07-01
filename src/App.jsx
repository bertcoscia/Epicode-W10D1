import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import fantasy from "./data/fantasy.json";
import BookList from "./components/BookList";
import { Component } from "react";

class App extends Component {
  state = {
    isSelected: false,
    asin: null,
    comments: []
  };

  handleClick = asin => {
    this.setState({ isSelected: true });
    this.setState({ asin: asin });
  };

  render() {
    return (
      <div className="App">
        <MyNav />
        <BookList genre={fantasy} handleClick={this.handleClick} comments={this.state.comments} asin={this.state.asin} isSelected={this.state.isSelected} />
      </div>
    );
  }
}

export default App;
