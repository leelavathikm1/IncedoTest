class MappingList extends Component {
  constructor() {
    super();
    this.state = { countries: ["spain", "freance", "america"] };
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
export default MappingList;
