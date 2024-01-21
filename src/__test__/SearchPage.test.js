import { render, screen } from "@testing-library/react";
import SearchFood from "../pages/SearchFood";

test("search page should load", () => {
  render(<SearchFood />);

  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});
