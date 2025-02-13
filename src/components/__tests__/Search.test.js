import { fireEvent, render, screen } from "@testing-library/react";
import CardMainContainer from "../CardMainContainer";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render Card Main Container with search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <CardMainContainer />
      </BrowserRouter>
    )
  );
  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchBox");

  const cardsBeforeSearch = screen.getAllByTestId("cardContainer");
  expect(cardsBeforeSearch.length).toBe(8);

  //Firing the change event

  fireEvent.change(searchInput, { target: { value: "wok" } });
  fireEvent.click(searchBtn);

  const cardsAfterSearch = screen.getAllByTestId("cardContainer");

  expect(searchBtn).toBeInTheDocument();
  expect(cardsAfterSearch.length).toBe(1);
});
