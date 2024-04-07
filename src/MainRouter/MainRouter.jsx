import {Outlet} from "react-router-dom"
import Navbar from "../Navbar/Navbar";
const MainRouter = () => {
    return (
        <div>
            <div className="md:max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainRouter;