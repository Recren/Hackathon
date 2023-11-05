import './Dashboard.css';
import Header from './Dashboard/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./Dashboard/ProfilePage"; // Import your ProfilePage component


function Dashboard() {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/home/profile/" element={<ProfilePage/>} />
      </Routes>
    </div>
  );
}

export default Dashboard;