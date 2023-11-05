import React from "react";
import "./UserHomePage.css";

function UserHomePage() {
  return (
    <div className="container">
      <h1 style={{ marginTop: 50, fontSize: 50 }}>Active Users</h1>
      <div className="user-container">
        <a href="./" className="user-card">
          <div className="user-info">
            <h2>Steven Vo</h2>
            <h2>sxv200093@utdallas.edu</h2>
            <h2>65472599eefabfd501eb7083</h2>
          </div>
        </a>
        <a href="IndividualUserListings" className="user-card">
          <div className="user-info">
            <h2>Josh Xenon</h2>
            <h2>jsx200000@utdallas.edu</h2>
            <h2>6547299c186817cdc2b87d8e</h2>
          </div>
        </a>
        <a href="./" className="user-card"></a>
      </div>
    </div>
  );
}
export default UserHomePage;
