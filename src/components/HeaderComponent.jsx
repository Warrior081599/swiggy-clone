import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useUserOnline from "../utils/useUserOnline";

const HeaderComponent = () => {
  const [login, setLogin] = useState("Login");
  const isOnline = useUserOnline();

  return (
    <header className=" p-3 bg-gray-100 border-gray-400 border-solid border-[1px]  flex flex-row justify-between  shadow-lg">
      <img className="w-[100px] h-[100px]" src={LOGO_URL} alt="logo"></img>

      <div className="flex flex-row  justify-center">
        <ul className="flex flex-row p-3 m-3 justify-center">
          <li className="m-3">Online : {isOnline === true ? "🟢" : "🔴"}</li>
          {/* hover:bg-amber-400 border border-gray-400 rounded-lg text-blue-500 p-2 */}
          <Link to="/grocery">
            <li className="m-3  hover:bg-gray-600  hover:rounded-xl hover:text-white hover:p-2  ">
              Grocery
            </li>
          </Link>
          <Link to="/">
            <li className="m-3  hover:bg-gray-600  hover:rounded-xl hover:text-white hover:p-2 ">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="m-3  hover:bg-gray-600  hover:rounded-xl hover:text-white hover:p-2 ">
              About
            </li>
          </Link>
          <Link to="/contact">
            <li className="m-3  hover:bg-gray-600  hover:rounded-xl hover:text-white hover:p-2 ">
              Contact Us
            </li>
          </Link>
          <li className="m-3  hover:bg-gray-600  hover:rounded-xl hover:text-white hover:p-2 ">
            Cart
          </li>
        </ul>
        <button
          className="m-3 justify-center mt-7 bg-gray-300 rounded-lg p-[10px] w-[60px] h-[40px]  border-[1px] border-solid border-black hover:bg-gray-600  hover:rounded-xl hover:text-white hover:p-2 "
          onClick={() =>
            login === "Login" ? setLogin("Logout") : setLogin("Login")
          }
        >
          {login}
        </button>
      </div>
    </header>
  );
};

export default HeaderComponent;
