import { fireEvent, render, screen } from "@testing-library/react";
import NavBar from "../components/NavBar";
import { Provider } from "react-redux";
import appStore from "../redux/store";
import { BrowserRouter } from "react-router-dom";

it("Should render NavBar Component with a Search Link", () => {
  render(
    // Link used
    <BrowserRouter>
      {/* redux used */}
      <Provider store={appStore}>
        <NavBar />
      </Provider>
    </BrowserRouter>
  );

  const seachLink = screen.getByText("Search");
  expect(seachLink).toBeInTheDocument();
});

it("Should render NavBar Component with a online / offline button", () => {
  render(
    // Link used
    <BrowserRouter>
      {/* redux used */}
      <Provider store={appStore}>
        <NavBar />
      </Provider>
    </BrowserRouter>
  );

  const onlineButton = screen.getByRole("button", { name: "online" });

  fireEvent.click(onlineButton);

  const offlineButton = screen.getByRole("button", { name: "offline" });

  expect(offlineButton).toBeInTheDocument();
});
