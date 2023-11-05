import React, { useState } from "react";
import "./UserHomePage.css";
import Header from "../Dashboard/Header";
import UserCard from "./userCard";

function UserHomePage() {
  const [user, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  async function getUsers() {
    return fetch("http://localhost:4000/api/users")
      .then((response) => response.json())
      .then((users) => {
        console.log(users);
        setUsers(users);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  getUsers();

  return (
    <div>
      <Header />
      <div>
        <div className="container">
          <h1 style={{ marginTop: 50, fontSize: 50 }}>Active Users</h1>
          <div className="user-container">
            <div className="array-container">
              {user.map((user, index) => (
                <UserCard
                  user_id={index}
                  email={user.email}
                  firstName={user.firstName}
                  lastName={user.lastName}
                />
              ))}
            </div>
          </div>
        </div>
        <button className="add-user-button">Add User</button>
      </div>
    </div>
  );
}

/*
function UserHomePage() {
  return (
    <div>
      <Header />
      <div className="container">
        <h1 style={{ marginTop: 50, fontSize: 50 }}>Active Users</h1>
        <div className="user-container">
          <UserCard />
        </div>
      </div>
    </div>
  );
}
*/
export default UserHomePage;
