import axios from "axios";
import { useState } from "react";
const APIResponse = () => {
  const [data, setdata] = useState([]);
  const handleButton = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setdata(res.data);
    });
  };
  return (
    <div>
      {" "}
      <button onClick={handleButton}>Send</button>{" "}
      {data &&
        data.map((val) => {
          return <li>{val}</li>;
        })}{" "}
    </div>
  );
};
export default APIResponse;
