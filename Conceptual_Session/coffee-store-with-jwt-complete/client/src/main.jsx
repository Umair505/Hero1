import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PrivateRoute from './routes/PrivateRoute'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './layouts/MainLayout.jsx'
import Home from './components/Home.jsx'
import AddCoffee from './components/AddCoffee.jsx'
import UpdateCoffee from './components/UpdateCoffee.jsx'
import CoffeeDetails from './components/CoffeeDetails.jsx'
import SignIn from './components/SignIn.jsx'
import SignUp from './components/SignUp.jsx'
import AuthProvider from './contexts/AuthProvider.jsx'
import axios from 'axios'
import MyAddedCoffees from './components/MyAddedCoffees.jsx'
import MyOrders from './components/MyOrders.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => axios(`${import.meta.env.VITE_API_URL}/coffees`),
        Component: Home,
      },
      {
        path: 'addCoffee',
        element: (
          <PrivateRoute>
            <AddCoffee />
          </PrivateRoute>
        ),
      },
      {
        path: 'my-orders',
        element: (
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        ),
      },
      {
        path: 'coffee/:id',
        loader: ({ params }) =>
          axios(`${import.meta.env.VITE_API_URL}/coffee/${params.id}`),

        element: (
          <PrivateRoute>
            <CoffeeDetails />
          </PrivateRoute>
        ),
      },
      {
        path: 'updateCoffee/:id',
        element: (
          <PrivateRoute>
            <UpdateCoffee />
          </PrivateRoute>
        ),
      },
      {
        path: 'signin',
        Component: SignIn,
      },
      {
        path: 'signup',
        Component: SignUp,
      },
      {
        path: 'my-added-coffees/:email',
        loader: ({ params }) =>
          axios(`${import.meta.env.VITE_API_URL}/my-coffees/${params.email}`),
        element: (
          <PrivateRoute>
            <MyAddedCoffees />
          </PrivateRoute>
        ),
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
)
