import { createBrowserRouter } from "react-router-dom";
import Home from "./component/Home";
import MainRouter from "./MainRouter/MainRouter";
import Login from "./component/Login";
import UpdateProfile from "./component/UpdateProfile";
import Register from "./component/Register";
import CategorysDetails from "./component/CategorysDetails";
import PrivetRoute from "./PrivetRoute/PrivetRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainRouter></MainRouter>,
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
                element: <UpdateProfile></UpdateProfile>
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
            }
        ]
    },

]);

export default router  