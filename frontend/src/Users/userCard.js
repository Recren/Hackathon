import React from "react";
import "./UserHomePage.css";
/*
function ItemCard({ name, description, price, condition }) {
  return (
    <div className="item-card">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <p>Condition: {condition}</p>
    </div>
  );
}
*/
function userCard({ email, firstName, lastName, userId }) {
  return (
    <a href="IndividualUserListings" className="user-card">
      <div className="user-info">
        <h2>
          {firstName} {lastName}
        </h2>
        <h2>{email}</h2>
        <h2>{userId}</h2>
      </div>
    </a>
  );
}

export default userCard;
