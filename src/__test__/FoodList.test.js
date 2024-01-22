import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/FoodLIstMock.json";
import FoodList from "../pages/FoodList";
import { act } from "react-dom/test-utils";
import appStore from "../redux/store";
import { Provider } from "react-redux";
import NavBar from "../components/NavBar";
import { BrowserRouter } from "react-router-dom";
import CartPage from "../pages/CartPage";
global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve(MOCK_DATA) })
);

test("should render food list with accordion format", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <NavBar />
          <FoodList />
          <CartPage />
        </Provider>
      </BrowserRouter>
    )
  );

  const heading = screen.getAllByTestId("accordionTitle");
  expect(heading[0]).toBeInTheDocument("Newly Launched - North Indian Gravies");
  fireEvent.click(heading[0]);

  const accordionSubListCart = screen.getAllByTestId("accordionSubListCart");
  expect(accordionSubListCart.length).toBe(2);

  const addFoodButton = screen.getAllByTestId("addFood");
  fireEvent.click(addFoodButton[0]);

  const cartItemCount = screen.getByTestId("cartItemCount");
  expect(cartItemCount).toBeInTheDocument(1);

  fireEvent.click(addFoodButton[1]);

  const addedFoodList = screen.getAllByTestId("addFood");
  expect(addedFoodList.length).toBe(4);
});
