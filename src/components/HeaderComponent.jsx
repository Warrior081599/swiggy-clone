import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const HeaderComponent = () => {
  const [login, setLogin] = useState("Login");
  return (
    <header className="header-container">
      <img className="image-container" src={LOGO_URL} alt="logo"></img>

      <ul className="nav-items">
        <li>Home</li>
        <li>About</li>
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
