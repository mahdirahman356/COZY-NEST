import { createBrowserRouter } from "react-router-dom";
import Home from "./component/Home";
import MainRouter from "./MainRouter/MainRouter";
import Login from "./component/Login";
import UpdateProfile from "./component/UpdateProfile";
import Register from "./component/Register";
import CategorysDetails from "./component/CategorysDetails";
import PrivetRoute from "./PrivetRoute/PrivetRoute";
import Error from "./ErrorRoute/Error";
import Blog from "./Blog/Blog";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainRouter></MainRouter>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                loader: () => fetch("/Data.json"),
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/updateProfile",
                element: <PrivetRoute>
                    <UpdateProfile></UpdateProfile>
                </PrivetRoute>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/categorys/:id",
                loader: () => fetch("/Data.json"),
                element: <PrivetRoute>
                    <CategorysDetails></CategorysDetails>
                 </PrivetRoute>
            },
            {
                path: "/blog",
                loader: () => fetch("/Blogdata.json"),
                element: <Blog></Blog>
            }
        ]
    },

]);

export default router  