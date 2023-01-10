import React, { Component } from "react";
class App extends Component {
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
        <button onClick={this.handleDec}>Decrement</button> Count{" "}
        {this.state.count} <button onClick={this.handleInc}>Increment</button>{" "}
      </div>
    );
  }
}
export default App;
