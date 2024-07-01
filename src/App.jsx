import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import fantasy from "./data/fantasy.json";
import BookList from "./components/BookList";
import { Component } from "react";

class App extends Component {
  state = {
    isSelected: false
  };

  handleClick = () => {
    if (!this.state.isSelected) {
      this.setState({ isSelected: true });
    } else {
      this.setState({ isSelected: false });
    }
  };

  render() {
    return (
      <div className="App">
        <MyNav />
        <BookList genre={fantasy} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
