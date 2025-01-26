import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HeaderComponent from "./src/components/HeaderComponent.jsx";
import FooterComponent from "./src/components/FooterComponent.jsx";
import CardMainContainer from "./src/components/CardMainContainer.jsx";
import About from "./src/components/About.jsx";
import Contact from "./src/components/Contact.jsx";
import Error from "./src/components/Error.jsx";
import RestaurantMenu from "./src/components/RestaurantMenu.jsx";

const MainContainer = () => {
  return (
    <div className="main-container">
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </div>
  );
};

{
  /**This is key value pair so use ":" */
}

const allRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainContainer />,
    children: [
      {
        path: "/",
        element: <CardMainContainer />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={allRouter} />);

{
  /** Give here the prop-key as router={allRouter} this router prop name is important */
}

{
  /**
 The root route ("/") defines the layout using <MainContainer />, 
 which includes the Header, Footer, and an <Outlet /> for child routes.

 The child route ("/") specifies the default content <CardMainContainer /> 
 
 that renders inside the <Outlet /> when the user visits the root path ("/").

   */
}
