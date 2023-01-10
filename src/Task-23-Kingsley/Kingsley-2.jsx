import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
const APIResponse = () => {
  const [data, setdata] = useState([]);
  handleButton = () => {
    axios.get("/").then((res) => {
      setdata(res.data);
    });
  };
  return (
    <div>
      {" "}
      <button onClick={handleButton}>Send</button>{" "}
    </div>
  );
};
