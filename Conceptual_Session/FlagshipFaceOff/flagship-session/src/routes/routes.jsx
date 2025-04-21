import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Favorites from "../pages/Favorites";
import About from "../pages/About";
import PhoneDetails from "../pages/PhoneDetails";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
      path: '/',
      Component: MainLayout,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home/>,
            hydrateFallbackElement:<p>Loading....</p>,
            loader: () => fetch('../phones.json'),
          },
        {
          path:'/about',
          Component: About
        },
        {
            path: 'phone-details/:phoneId',
            Component:PhoneDetails,
            loader: () => fetch('../phones.json'),
        },
        {
            path: '/favorites',
            Component: Favorites
        },
        
      ]
    }
  ])
export default router;