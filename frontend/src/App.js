import "./App.css";
import Header from "./Dashboard/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./start/Start";
import ProfilePage from "./Dashboard/ProfilePage"; // Import your ProfilePage component
import { useState } from "react";
import AboutPage from "./Dashboard/AboutPage";
import ListingsPage from "./Dashboard/ListingsPage";
import Trending from "./Dashboard/Trending";
import NotificationsPage from "./Dashboard/Notifications";
import UserHomePage from "./Users/UserHomePage"; // Import the UserHomePage component
import IndividualUserListings from "./IndividualUserListings/IndividualUserListings";
function App() {
  const [show, setShow] = useState(true);
  const handleButtonClick = () => {
    setShow(false);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <div className="Start">
          <Routes>
            <Route
              path="/"
              element={<Start onButtonClick={handleButtonClick} />}
            />
            <Route path="/home" element={<Trending />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/profile/listings" element={<ListingsPage />} />
            <Route
              path="/profile/notifications"
              element={<NotificationsPage />}
            />
            <Route path="/users" element={<UserHomePage />} />
            <Route
              path="IndividualUserListings"
              element={<IndividualUserListings />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
/*
        <Routes>
          <Route
            path="IndividualUserListings"
            element={<IndividualUserListings />}
          />
        </Routes>
        */
