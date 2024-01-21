import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import FoodList from "./pages/FoodList";
import ErrorPage from "./pages/ErrorPage";
import SearchFood from "./pages/SearchFood";
import AppLayout from "./layout/AppLayout";
import appStore from "./redux/store";
import { Provider } from "react-redux";
import CartPage from "./pages/CartPage";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    error: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "food/:id",
        element: <FoodList />,
      },
      {
        path: "foodsearch",
        element: <SearchFood />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <RouterProvider router={AppRouter} />
  </Provider>
);
