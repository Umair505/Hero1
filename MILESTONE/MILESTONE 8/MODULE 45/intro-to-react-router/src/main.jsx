import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './Components/Home/Home.jsx';
import Root from './Components/Root/Root.jsx';
import Mobiles from './Components/Mobiles/Mobiles.jsx';
import Laptop from './Components/laptops/Laptop.jsx';
import Users from './Components/Users/Users.jsx';
import UsersTwo from './Components/Users/UsersTwo.jsx';
import UserDetails from './Components/userDetails/UserDetails.jsx';
import Posts from './Components/Posts/Posts.jsx';
import PostDetails from './Components/Posts/PostDetails.jsx';

const usersPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'mobiles', Component: Mobiles },
      { path: 'laptop', Component: Laptop },
      {
        path: 'users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users
      },
      {
        path: 'users2',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()),
        element: (
          <Suspense fallback={<span>Loading.....</span>}>
            <UsersTwo usersPromise={usersPromise} />
          </Suspense>
        )
      },
      {
        path: 'users/:userId',
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails
      },
      {
        path: 'posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        Component:Posts

      },
      {
        path:'posts/:postId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component: PostDetails
      }
    ]
  },
  {
    path: "about",
    element: <div>About page</div>
  },
  {
    path: "blogs",
    element: <div>Blogs page</div>
  },
  {
    path: "app",
    Component: App
  },
  {
    path:'*',
    element: <div>404 page not found</div>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
