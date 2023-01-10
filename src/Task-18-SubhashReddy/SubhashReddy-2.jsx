class IncDecr extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  handleDecr = () => {
    this.setState({ count: this.state.count - 1 });
  };
  handleInc = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        {" "}
        Count is {this.state.count}{" "}
        <button onClick={this.handleInc}>Increase</button>{" "}
        <button onClick={this.handleDecr}>Decrese</button>{" "}
      </div>
    );
  }
}
export default IncDecr;
