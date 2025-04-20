import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Favorites from "../pages/Favorites";
import About from "../pages/About";
import PhoneDetails from "../pages/PhoneDetails";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
      path: '/',
      Component: MainLayout,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            // index: true,
            element: <h1 className='text-2xl text-red-400'>Welcome Home</h1>
        },
        {
          path:'/about',
          Component: About
        },
        {
            path: 'phone-details',
            Component:PhoneDetails
        },
        {
            path: '/favorites',
            Component: Favorites
        },
        
      ]
    }
  ])
export default router;