import { useState, useEffect } from "react";
import axios from "axios";
const Q20 = () => {
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setusers(response.data);
      console.log(response.data);
    });
  }, []);
  const [users, setusers] = useState([]);
  return (
    <div>
      {" "}
      <table>
        {" "}
        <thead>
          {" "}
          <tr>
            {" "}
            <th>ID</th> <th>NAME</th> <th>USERNAME</th> <th>EMAIL</th>{" "}
          </tr>{" "}
        </thead>{" "}
        <tbody>
          {" "}
          {users.map((user, i) => (
            <tr key={i}>
              {" "}
              <td>{user.id}</td> <td>{user.name}</td> <td>{user.username}</td>{" "}
              <td>{user.email}</td>{" "}
            </tr>
          ))}{" "}
        </tbody>{" "}
      </table>{" "}
    </div>
  );
};
export default Q20;
