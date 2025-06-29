import {
  createBrowserRouter,
 
} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import JobDetails from "../Components/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children:[
        {
            index: true,
            Component:Home,
        },
        {
            path: "/register",
            Component:Register
        },
        {
            path: "/signin",
            Component:SignIn
        },
        {
            path: "/jobs/:id",
            Component:JobDetails,
            loader:({params})=> fetch(`http://localhost:3000/jobs/${params.id}`)
        }
        
    ]
  },
]);
export default router;