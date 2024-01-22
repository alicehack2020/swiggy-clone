import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FoodList from "./pages/FoodList";
import ErrorPage from "./pages/ErrorPage";
import AppLayout from "./layout/AppLayout";
import appStore from "./redux/store";
import { Provider } from "react-redux";
import CartPage from "./pages/CartPage";
import HomePageShimmerUi from "./components/shimmerui/HomePageShimmerUi";
import GridCardShimmerUI from "./components/shimmerui/GridCardShimmerUI";

const Home = lazy(() => import("./pages/Home"));
const SearchFood = lazy(() => import("./pages/SearchFood"));

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    error: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<HomePageShimmerUi />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "food/:id",
        element: <FoodList />,
      },
      {
        path: "foodsearch",
        element: (
          <Suspense fallback={<GridCardShimmerUI />}>
            <SearchFood />
          </Suspense>
        ),
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
