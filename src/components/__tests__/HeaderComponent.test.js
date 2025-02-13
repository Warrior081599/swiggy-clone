import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../store/appStore";
import HeaderComponent from "../HeaderComponent";

//To check the login button exist

it("Should render login button", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <HeaderComponent />
      </BrowserRouter>
    </Provider>
  );

  //Querying

  const loginButton = screen.getByRole("button", { name: "Login" });

  //Assertion

  expect(loginButton).toBeInTheDocument();
});

//To check the Cart has loaded or not using  simple "String"

it("Should render the cart component", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <HeaderComponent />
      </BrowserRouter>
    </Provider>
  );

  //Querying

  const cart = screen.getByText("Cart : (0) - items");

  //Assertion

  expect(cart).toBeInTheDocument();
});

it("Should render the cart component", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <HeaderComponent />
      </BrowserRouter>
    </Provider>
  );

  //Querying

  const cart = screen.getByText(/Cart/);

  //Assertion

  expect(cart).toBeInTheDocument();
});

it("Shoube render login-logout component", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <HeaderComponent />
      </BrowserRouter>
    </Provider>
  );

  //Querying

  const loginBtn = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginBtn);

  const logoutBtn = screen.getByRole("button", { name: "Logout" });
  //Assertion

  expect(logoutBtn).toBeInTheDocument();
});
