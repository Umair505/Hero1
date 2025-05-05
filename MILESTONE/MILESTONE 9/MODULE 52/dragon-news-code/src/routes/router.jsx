import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import Home from "../pages/Home";

const router = createBrowserRouter([

    {
        path:'/',
        element: <HomeLayouts></HomeLayouts>,
        children:[
            {
                path:"",
                element:<Home></Home>
            },
            {
                path:"/category/:id",
                element:""
            },
            {
                path:"",
                element:""
            },
        ]
    },
    {
        path:'/auth',
        element: <h2>Login page</h2>,
    },
    {
        path:'/news',
        element: <h2>News Page</h2>,
    },
    {
        path:'/error',
        element: <h2>This is Error Page</h2>,
    },
]
)
export default router;
