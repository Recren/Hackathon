import logo from './logo.svg';
import './App.css';
import Header from './Dashboard/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./Profile/ProfilePage"; // Import your ProfilePage component
import ListingsPage from './Listings/ListingsPage';
import AboutPage from './About/AboutPage';

function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <Header />
        <Routes>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/profile/listings" element={<ListingsPage />} />
        </Routes>

    </div>
  </BrowserRouter>

  );
}

export default App;