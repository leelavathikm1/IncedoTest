class Rup19 extends Component {
  constructor() {
    super();
    this.state = { countries: ["India", "Indonesia", "Brazil"] };
  }
  render() {
    return (
      <div>
        {" "}
        {this.state.countries.map((countries) => {
          return { countries };
        })}{" "}
      </div>
    );
  }
}
export default Rup19;
