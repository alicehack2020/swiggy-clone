import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import FoodList from "./pages/FoodList";
import ErrorPage from "./pages/ErrorPage";
import SearchFood from "./pages/SearchFood";
import AppLayout from "./layout/AppLayout";

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
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={AppRouter} />
);
