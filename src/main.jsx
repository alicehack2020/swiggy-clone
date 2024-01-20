import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import FoodList from "./pages/FoodList";
import FoodDetail from "./pages/FoodDetail";
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
        path: "food",
        element: <FoodList />,
      },
      {
        path: "food/:id",
        element: <FoodDetail />,
      },
      {
        path: "foodsearch",
        element: <SearchFood />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={AppRouter} />
);
