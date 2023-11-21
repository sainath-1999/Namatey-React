import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnElement, setBtnElement] = useState("Login");
  
  console.log("header rendered");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
          <li>Contact Us</li>
          <button
            className="btn-login"
            onClick={() => {
              btnElement === "Login"
                ? setBtnElement("Logout")
                : setBtnElement("Login");
            }}
          >
            {btnElement}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
