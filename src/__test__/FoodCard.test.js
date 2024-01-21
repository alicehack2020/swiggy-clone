import { render, screen } from "@testing-library/react";
import FoodCard from "../components/card/FoodCard";
import MOCK_DATA from "../mocks/FoodCardMock.json";
import { BrowserRouter } from "react-router-dom";

it("should render FoodCart component with props Data", () => {
  render(
    <BrowserRouter>
      <FoodCard food={MOCK_DATA} />
    </BrowserRouter>
  );

  const name = screen.getByText("The Gingered Peach");
  expect(name).toBeInTheDocument();
});
