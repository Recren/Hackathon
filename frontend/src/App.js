import logo from "./logo.svg";
import "./App.css";
import Header from "./Dashboard/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./Profile/ProfilePage"; // Import your ProfilePage component
import UserHomePage from "./Users/UserHomePage"; // Import the UserHomePage component
import IndividualUserListings from "./IndivdualUserListings/IndividualUserListings";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/users" element={<UserHomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>

        <Routes>
          <Route
            path="IndividualUserListings"
            element={<IndividualUserListings />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
