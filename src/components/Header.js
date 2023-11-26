import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnElement, setBtnElement] = useState("Login");

  const onlineStatus = useOnlineStatus();
  console.log("header rendered");
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-100 lg:bg-green-100 ">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center ">
        <ul className="flex p-4 m-4">
          <li className=" px-4">
            online Status :{onlineStatus === "false" ? "🔴 " : "🟢"}
          </li>
          <li className=" px-4">
            <Link to="/">Home</Link>
          </li>
          <li className=" px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className=" px-4">
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className=" px-4">
            <Link to="/cart">Cart</Link>
          </li>
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
