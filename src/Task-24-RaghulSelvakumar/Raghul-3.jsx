class App extends Component {
  constructor() {
    super();
    this.state = { names: ["Raghul", "Ravi", "Ram"] };
  }
  render() {
    return (
      <div>
        {" "}
        {this.state.names.map((name) => {
          return { names };
        })}{" "}
      </div>
    );
  }
}
export default App;
