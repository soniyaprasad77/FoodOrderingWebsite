import React, { useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useContext } from "react";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  //const data = useContext(UserContext);
   const {loggedInUser} = useContext(UserContext);
  return (
    <>
      <div className="header flex justify-between bg-pink-100 shadow-xl">
        <div className="logo-container w-24">
          <img src={LOGO_URL} alt="logo" className="logo" />
        </div>
        <div  className=" "> 
          <ul className="flex justify-between p-4 m-4">
            <li className="px-6">
              {" "}
              Online Status: {onlineStatus ? "✔️" : "❌"}
            </li>
            <li className="px-6">
              <Link to="/">Home</Link>
            </li>
            <li className="px-6">
              <Link to="/about">About</Link>
            </li>
            <li className="px-6">
              <Link to="/contact">ContactUs</Link>
            </li>
            <li className="px-6">
              <Link to="grocery">Grocery</Link>
            </li>
            <button
              className="login-logout-btn"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
            <li className="px-6 font-bold">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;
