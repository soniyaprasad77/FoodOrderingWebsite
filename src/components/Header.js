import React, { useState } from "react";
import { LOGO_URL } from "../../utils/constants";

const Header = () => {
  const [btnName, setBtnName] = useState('Login')
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
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Cart</li>
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
