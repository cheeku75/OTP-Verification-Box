import React, { useState } from 'react';
import './App.css';
import OTPBox from './OTPBox1';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Button from './button';

function App() {
  const [showOTPBox, setShowOTPBox] = useState(false);

  const handleButtonClick = () => {
    setShowOTPBox(true);
  }
  return (
    <>   <Router>
    <Routes>
      <Route path="/" element={<div><Button onClick={handleButtonClick} /></div>} />
      <Route path="/otp" element={<div className="app"><OTPBox /></div>} />
    </Routes>
  </Router>

    {/* <div className="app">
     <OTPBox />
    </div> */}
    </>
  );
}

export default App;
