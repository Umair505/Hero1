import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import Home from "../pages/Home";
import Categories from "../Components/Categories";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts></HomeLayouts>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch("/news.json"),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      { path: "/auth/login", 
        element: <Login></Login>
      },
      {
        path: "/auth/register",
        element: <Register></Register>
      },
    ],
  },
  {
    path: "/news",
    element: <h2>News Page</h2>,
  },
  {
    path: "/*",
    element: <h2>This is Error Page</h2>,
  },
]);
export default router;
