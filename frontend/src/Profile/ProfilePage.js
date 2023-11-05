import React from 'react';
import './ProfilePage.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

function ProfilePage() {
  
  return (
    <div classaName="profile">
      <div className="heading">
        <h2> Hello, "UserName" </h2>
        <nav>
          <ul>
            <li><a href="/Listings"><i className="fa-solid fa-question"></i> My Listings </a></li>
          </ul>
        </nav>
      </div>
      <div className="line"></div>
    </div>
  );
}

export default ProfilePage;