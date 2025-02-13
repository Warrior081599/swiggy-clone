import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import { render, screen, fireEvent } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockResMenuData.json";
import { Provider } from "react-redux";
import appStore from "../../store/appStore";
import Cart from "../Cart";
import HeaderComponent from "../HeaderComponent";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

test("Should render Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <HeaderComponent />
          <RestaurantMenu />
          <Cart />
        </BrowserRouter>
      </Provider>
    )
  );

  const accordianHeader = screen.getByText("Recommended (13)");
  fireEvent.click(accordianHeader);

  const foodSection = screen.getAllByTestId("food-id");
  expect(foodSection.length).toBe(13);

  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);

  const headerCartCount = screen.getByText("Cart : (1) - items");
  expect(headerCartCount).toBeInTheDocument();

  expect(screen.getAllByTestId("food-id").length).toBe(14);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getAllByTestId("food-id").length).toBe(13);
  expect(
    screen.getByText("Your cart is empty. Please add items to continue.")
  ).toBeInTheDocument();
});
