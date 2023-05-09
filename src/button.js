import React from 'react'
import { Link } from "react-router-dom";
import "./button.css"

function button() {
 return (
<>
 <Link to="/otp">
     <button className="click">Click here to enter OTP</button>
      </Link>
 
</>
 );
}

export default button;