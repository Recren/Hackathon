import './App.css';
import Header from './Dashboard/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./start/Start";
import ProfilePage from "./Dashboard/ProfilePage"; // Import your ProfilePage component
import {useState} from 'react';


function App() {

  const [show, setShow] = useState(true);
  const handleButtonClick = () => {
    setShow(false);
  }

  return (
  <BrowserRouter>
    <div className="App">
      <div className="Start">  
        <Routes>
          <Route path="/" element={<Start onButtonClick={handleButtonClick}/>} />
          <Route path="/home" element={<Header />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>

  );
}

export default App;