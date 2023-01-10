import React from "react";
import { Component } from "react";
import "./App.css";
class ex2 extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  handleInc = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleDec = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div>
        {" "}
        <button onClick={this.handleDec} className="btn btn-primary">
          Decrement
        </button>
        <br /> &ensp; Display Count {this.state.count}
        <br />{" "}
        <button onClick={this.handleInc} className="btn btn-primary">
          Increment
        </button>{" "}
      </div>
    );
  }
}
export default ex2;
