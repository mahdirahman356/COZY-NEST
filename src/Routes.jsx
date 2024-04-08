import { createBrowserRouter } from "react-router-dom";
import Home from "./component/Home";
import MainRouter from "./MainRouter/MainRouter";
import Login from "./component/Login";
import UpdateProfile from "./component/UpdateProfile";
import Register from "./component/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainRouter></MainRouter>,
      children: [
        {
            path: "/",
            loader : ()=> fetch("/Data.json"),
            element:<Home></Home>
        },
        {
            path: "/login",
            element:<Login></Login>
        },
        {
            path: "/updateProfile",
            element:<UpdateProfile></UpdateProfile>
        },
        {
            path: "/register",
            element:<Register></Register>
        },
      ]
    },
    
]);

export default router  