import React, { useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import {Link} from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
const Header = () => {
  const [btnName, setBtnName] = useState('Login')
  const onlineStatus = useOnlineStatus();
  return (
    <>
      <div className="header">
        <div className="logo-container">
          <img
            src={LOGO_URL}
            alt="logo"
            className="logo"
          />
          
        </div>
        <div className="company-name">
            <h3>Hungry Hub</h3>
          </div>
        <div className="nav-items">
          <ul>
            <li>Online Status: {onlineStatus?"✔️" : "❌"}</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">ContactUs</Link></li>
            <li><Link to="grocery">Grocery</Link></li>
            <button 
            className="login-logout-btn"
            onClick={()=>{btnName==='Login'?setBtnName("Logout"):setBtnName('Login')}}
            >{btnName}</button>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;
