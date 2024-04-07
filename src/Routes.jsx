import { createBrowserRouter } from "react-router-dom";
import Home from "./component/Home";
import MainRouter from "./MainRouter/MainRouter";
import Login from "./component/Login";
import UpdateProfile from "./component/UpdateProfile";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainRouter></MainRouter>,
      children: [
        {
            path: "/",
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
      ]
    },
    
]);

export default router  