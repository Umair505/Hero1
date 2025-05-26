import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './Layouts/MainLayout.jsx';
import Home from './components/Home.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import CoffeeDetails from './components/CoffeeDetails.jsx';
import Signin from './components/Signin.jsx';
import SignUp from './components/SignUp.jsx';
import AuthProvider from './contexts/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
      {
        index: true,
        Component: Home,
        loader: () => fetch("http://localhost:3000/coffees"),
      },
      {
        path: "/add-coffee",
        Component: AddCoffee,
      },
      {
        path: "/signin",
        Component: Signin,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
      {
        path: "/coffee/:id",
        Component: CoffeeDetails,
        loader: ({params}) => fetch(`http://localhost:3000/coffees/${params.id}`)
      },
      {
        path: "/update-coffee/:id",
        Component: UpdateCoffee,
        loader: ({params}) => fetch(`http://localhost:3000/coffees/${params.id}`)
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
  </StrictMode>,
)
