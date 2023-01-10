import React, { useState } from "react";
import UserForm from "./UserForm";
import UserTable from "./UserTable";
import axios from "axios";
import { useEffect } from "react";
const Registration = () => {
  const [user, setUser] = useState({ id: "", name: "", phone: "" });
  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  useEffect(() => {
    getAllUsers();
  }, []);
  const clearForm = () => {
    setUser({ id: "", name: "", phone: "" });
  };
  const getAllUsers = () => {
    axios.get("https://xxx.yyy/.com").then((response) => {
      console.log(response);
      setUsers(response.data);
    });
  };
  const deleteuser = (user) => {
    axios.delete("https://xxx.com/users" + user.id).then(() => {
      getAllUsers();
    });
  };
  const editUser = (user, i) => {
    setEditIndex(i);
    setUser(user);
  };
  const updateUser = () => {
    let newUsers = [...users];
    newUsers[editIndex] = user;
    setUsers(newUsers);
    setEditIndex(null);
    clearForm();
  };
  return (
    <div>
      {" "}
      <div className="row">
        {" "}
        <div className="col-4">
          {" "}
          <UserForm
            user={user}
            setUser={setUser}
            clearForm={clearForm}
            updateUser={updateUser}
            editIndex={editIndex}
          />{" "}
        </div>{" "}
        <div className="col-8">
          {" "}
          <UserTable
            users={users}
            deleteuser={deleteuser}
            editUser={editUser}
          />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default Registration;
