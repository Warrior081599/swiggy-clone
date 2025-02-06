import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HeaderComponent from "./src/components/HeaderComponent.jsx";
import FooterComponent from "./src/components/FooterComponent.jsx";
import CardMainContainer from "./src/components/CardMainContainer.jsx";
import Error from "./src/components/Error.jsx";
import RestaurantMenu from "./src/components/RestaurantMenu.jsx";
import Shimmer from "./src/components/Shimmer.jsx";
const About = lazy(() => import("./src/components/About.jsx"));
const Contact = lazy(() => import("./src/components/Contact.jsx"));
const Grocery = lazy(() => import("./src/components/Grocery.jsx"));
import UserContext from "./src/utils/userContext.js";
import { Provider } from "react-redux";
import appStore from "./src/store/appStore.js";
import Cart from "./src/components/Cart.jsx";
const MainContainer = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const data = {
      name: "Azad Raj",
    };
    setUser(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedIn: user, setUser }}>
        <div className="main-container">
          <HeaderComponent />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
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
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
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
