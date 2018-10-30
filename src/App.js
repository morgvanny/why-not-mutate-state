import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    num: 0,
    sadNum: 0
  };

  handleClick = () => {
    this.setState((state, props) => ({
      num: state.num + 1
    }));
  };

  handleClickBadly = () => {
    this.state.sadNum += 1;
  };

  render() {
    return (
      <div className="App">
        <h1>Why Can't We Directly Mutate State???</h1>
        <p>Number: {this.state.num}</p>
        <button onClick={this.handleClick}>
          Click to increment the number
        </button>
        <br />
        <p>Sad number: {this.state.sadNum}</p>
        <button onClick={this.handleClickBadly}>
          Click to try and fail to increment number
        </button>
      </div>
    );
  }
}

export default App;
