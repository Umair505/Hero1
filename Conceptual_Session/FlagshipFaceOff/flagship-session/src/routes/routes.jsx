import { createBrowserRouter } from "react-router";
import App from "../App";
import Test from "../Test";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
    // {
    //     path: '*',
    //     element: <h1 className='text-2xl text-red-400'>404 Not Found</h1>
    // },
    {
      path: '/',
      Component: MainLayout,
      errorElement: <h1 className='text-2xl text-red-400'>404 Not Found</h1>,
      children:[
        {
            path:'/',
            // index: true,
            element: <h1 className='text-2xl text-red-400'>Welcome Home</h1>
        },
        {
          path: '/favorites',
          Component:Test,
          children:[
            {
              path: 'inside',
              element: <h1 className='text-2xl text-red-400'>Inside</h1>
            }
          ]
        },
        {
          path:'/about',
          element: <h1 className='text-2xl text-red-400'>About</h1>
        }
      ]
    }
  ])
export default router;