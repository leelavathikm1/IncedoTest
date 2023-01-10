class Mid3 extends Component {
  constructor() {
    super();
    this.state = { arr: ["Manju", "Murali", "Sai"] };
  }
  render() {
    return (
      <div>
        {" "}
        {this.state.arr.map((name) => {
          return { name };
        })}{" "}
      </div>
    );
  }
}
export default Mid3;
