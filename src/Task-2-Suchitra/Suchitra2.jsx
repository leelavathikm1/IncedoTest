class IncDec extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        Count is {this.state.count}
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    );
  }
}
export default IncDec;
