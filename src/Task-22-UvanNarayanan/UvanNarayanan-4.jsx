import React, { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/users").then((res) => {
      setUserData(res.data);
    });
  }, []);
  return (
    <div>
      {" "}
      {userData.map((val, i) => {
        return (
          <div>
            {" "}
            <p> {val.fname}</p> <p>{val.lname}</p> <p> {val.username} </p>{" "}
            <p>{val.phonenumber}</p>{" "}
          </div>
        );
      })}{" "}
    </div>
  );
}
export default App;
