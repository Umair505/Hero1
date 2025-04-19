import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Test from './Test.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children:[
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


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
