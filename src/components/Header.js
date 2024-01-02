import React from "react";
import { LOGO_URL } from "../../utils/constants";

const Header = () => {
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
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;
