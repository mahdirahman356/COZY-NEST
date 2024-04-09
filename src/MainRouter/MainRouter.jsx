import {Outlet} from "react-router-dom"
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
const MainRouter = () => {
    return (
        <div>
            <div className="w-[95%] md:w-[80%] mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainRouter;