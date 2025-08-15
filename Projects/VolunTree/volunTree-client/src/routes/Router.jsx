import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import AddVolunteerPost from "../pages/AddVolunteerPost";
import axios from "axios";
import VolunteerPosts from "../components/VolunteerPosts";
import PostDetails from "../components/PostDetails";
import MyPosts from "../pages/MyPosts";
import UpdatePage from "../pages/UpdatePage";
import PrivateRoute from "../layouts/PrivateRoute";
import MyVolunteerRequests from "../pages/MyVolunteerRequests";
import AboutUsPage from "../pages/AboutUsPage";

const router = createBrowserRouter([
    {
        path: "/",
        element:<RootLayout/>,
        errorElement: <ErrorPage/>,
        children:[
            {
                index:true,
                loader:()=>axios(`${import.meta.env.VITE_API_URL}/volunteer-need-post`),
                Component:Home
            },
            {
                path:'/signup',
                Component:Signup
            },
            {
                path:'/login',
                Component:Login
            },
            {
                path:'/about-us',
                Component:AboutUsPage
            },
            {
                path:'/volunteer-post',
                loader:()=>axios(`${import.meta.env.VITE_API_URL}/volunteer-posts`),
                Component:VolunteerPosts
            },
            {
                path:'volunteer-need-post/:id',
                loader:({params})=>axios(`${import.meta.env.VITE_API_URL}/volunteer-need-post/${params.id}`),
                element:(
                    <PrivateRoute>
                        <PostDetails/>
                    </PrivateRoute>
                )
            },
            {
                path:'/create-post',
                element:(
                    <PrivateRoute>
                        <AddVolunteerPost/>
                    </PrivateRoute>
                )
            },
            {
                path:'/my-posts/:email',
                element:(
                    <PrivateRoute>
                        <MyPosts/>
                    </PrivateRoute>
                ),
            },
            {
                path:'/edit-post/:id',
                loader:({params})=>axios(`${import.meta.env.VITE_API_URL}/volunteer-need-post/${params.id}`),
                element:(
                    <PrivateRoute>
                        <UpdatePage/>
                    </PrivateRoute>
                ),
            },
            {
                path:'/volunteer-requests',
                element:(
                    <PrivateRoute>
                        <MyVolunteerRequests/>
                    </PrivateRoute>
                ),
            }
            
        ]
    }
]);
export default router;