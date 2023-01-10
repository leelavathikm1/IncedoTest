import React from "react";
import { Component } from "react";
import "./App.css";
class ex3 extends Component {
  constructor() {
    super();
    this.state = { group: ["Ganesh", "Siva", "Mahesh", "Dhoni", "Virat"] };
  }
  render() {
    return (
      <div>
        {" "}
        {this.state.group.map((list) => {
          return list;
        })}{" "}
      </div>
    );
  }
}
export default ex3;
