import { useState, useEffect } from "react";
import axios from "axios";
export default function ApiData() {
  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setArray(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => getData(), []);
  const [array, setArray] = useState([]);
  return (
    <>
      <ol>
        {array.map((data) => {
          return <li>{JSON.stringify(data)}</li>;
        })}
      </ol>
      <button onClick={getData}>Update data</button>
    </>
  );
}
