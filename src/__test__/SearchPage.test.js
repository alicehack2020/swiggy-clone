import { fireEvent, render, screen } from "@testing-library/react";
import SearchFood from "../pages/SearchFood";
import SearchFoodDataMock from "../mocks/SearchFoodDataMock.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(SearchFoodDataMock);
    },
  });
});

test("search page should load", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <SearchFood />
      </BrowserRouter>
    )
  );

  const searchButton = screen.getByTestId("search");
  expect(searchButton).toBeInTheDocument();
});

test("Find food should work", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <SearchFood />
      </BrowserRouter>
    )
  );

  const searchButton = screen.getByTestId("search");
  expect(searchButton).toBeInTheDocument();

  const searchInput = screen.getByPlaceholderText("Search Food Name");

  fireEvent.change(searchInput, { target: { value: "baked" } });

  fireEvent.click(searchButton);

  const card = screen.getAllByTestId("searchCard");
  expect(card.length).toBe(3);
});
