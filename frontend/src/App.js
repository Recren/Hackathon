import logo from './logo.svg';
import './App.css';
import Header from './Dashboard/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./Profile/ProfilePage"; // Import your ProfilePage component
import Start from "./start/Start";
import Dashboard from './Dashboard';
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
        {show && <Start onButtonClick={handleButtonClick}/>}
          <Routes>
            <Route path="/home" element={<Dashboard />} />
          </Routes>
      </div>
    </div>
  </BrowserRouter>

  );
}

export default App;