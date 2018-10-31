import React, { Component } from 'react';
import './App.css';
import Number from './Number';
import SuperSpecialWeirdThing from './SuperSpecialWeirdThing';

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
        <Number type={'good'} num={this.state.num} />
        <button onClick={this.handleClick}>
          Click to increment the number
        </button>
        <br />
        <Number type={'sad'} num={this.state.sadNum} />
        <button onClick={this.handleClickBadly}>
          Click to try and fail to increment number
        </button>
        <br />
        <SuperSpecialWeirdThing />
      </div>
    );
  }
}

export default App;
