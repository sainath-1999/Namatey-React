import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContexts from "../utils/UserContexts";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnElement, setBtnElement] = useState("Login");

  const data = useContext(UserContexts);
  console.log("data", data);

  const onlineStatus = useOnlineStatus();
  console.log("header rendered");

  // subcribing to te using selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log("CI", cartItems);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-100 lg:bg-green-100 ">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center ">
        <ul className="flex p-4 m-4">
          <li className="p-2 m-2 bg-amber-400 rounded-lg text-white ">
            online Status :{onlineStatus === "false" ? "🔴 " : "🟢"}
          </li>
          <li className="  p-2 m-2 bg-amber-400 rounded-lg text-white">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2 m-2 bg-amber-400 rounded-lg text-white">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className=" p-2 m-2 bg-amber-400 rounded-lg text-white">
            <Link to="/about">About</Link>
          </li>
          <li className="p-2 m-2 bg-amber-400  rounded-lg text-white">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className=" p-2 m-2 bg-amber-400 rounded-lg text-white ">
            <Link to="/cart">🛒 - ({cartItems.length} items)</Link>
          </li>
          <button
            className="p-2 m-2 bg-amber-400  rounded-lg text-white"
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
