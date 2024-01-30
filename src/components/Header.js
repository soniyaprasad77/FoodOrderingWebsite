import React, { useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useContext } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="header bg-pink-100 shadow-xl p-4">
        <div className="flex items-center justify-between">
          <div className="logo-container">
            <img src={LOGO_URL} alt="logo" className="logo w-24" />
          </div>
          <button
            className="lg:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            ☰
          </button>
          <ul className="hidden lg:flex lg:space-x-4 lg:ml-auto lg:items-center">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">ContactUs</Link>
            </li>
            <li>
              <Link to="/cart">
                Add to Cart <sup>{cartItems.length}</sup>
              </Link>
            </li>
            <li>
              <Link to="grocery">Grocery</Link>
            </li>
            <li className="font-bold">{loggedInUser}</li>
            <li>
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
            </li>
          </ul>
        </div>
        {isMenuOpen && (
          <ul className="lg:hidden">
            {/* Render menu items for small screens here */}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">ContactUs</Link>
            </li>
            <li>
              <Link to="/cart">
                Add to Cart <sup>{cartItems.length}</sup>
              </Link>
            </li>
            <li>
              <Link to="grocery">Grocery</Link>
            </li>
            <li className="font-bold">{loggedInUser}</li>
            <li>
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
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Header;
