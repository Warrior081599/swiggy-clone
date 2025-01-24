import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./src/components/HeaderComponent.jsx";
import FooterComponent from "./src/components/FooterComponent.jsx";
import CardMainContainer from "./src/components/CardMainContainer.jsx";

const MainContainer = () => {
  return (
    <div className="main-container">
      <HeaderComponent />
      <CardMainContainer />
      <FooterComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainContainer />);
