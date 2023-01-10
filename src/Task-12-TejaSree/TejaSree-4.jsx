import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const API = () => {
  const [user, setUser] = useState({ fname: "", lname: "", email: "" });
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.post("http://localhost:3000/users", user).then(() => {
      getAllUsers();
    });
  }, []);
  const getAllUsers = () => {
    axios.get("http://localhost:3000/users").then((response) => {
      console.log(response);
      setUsers(response.data);
    });
  };
  return (
    <div>
      {" "}
      <table>
        {" "}
        <thead>
          {" "}
          <tr>First Name</tr> <tr>Last Name</tr> <tr>Email</tr>{" "}
        </thead>{" "}
        <tbody>
          {" "}
          {users.map((usr) => (
            <tr>
              {" "}
              <td>{usr.fname}</td> <td>{usr.lname}</td> <td>{usr.email}</td>{" "}
            </tr>
          ))}{" "}
        </tbody>{" "}
      </table>{" "}
    </div>
  );
};
export default API;
