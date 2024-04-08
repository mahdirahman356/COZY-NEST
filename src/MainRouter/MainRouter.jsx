import {Outlet} from "react-router-dom"
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
const MainRouter = () => {
    return (
        <div>
            <div className="md:max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainRouter;