import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  const [login, setLogin] = useState("Login");

  return (
    <header className="header-container">
      <img className="image-container" src={LOGO_URL} alt="logo"></img>

      <ul className="nav-items">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact Us</li>
        </Link>
        <li>Cart</li>
      </ul>
      <button
        className="login-btn"
        onClick={() =>
          login === "Login" ? setLogin("Logout") : setLogin("Login")
        }
      >
        {login}
      </button>
    </header>
  );
};

export default HeaderComponent;
