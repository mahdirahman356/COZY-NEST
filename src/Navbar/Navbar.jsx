import { Link, NavLink} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/Context";
import userImg from "../assets/Image/user-img.png"
const Navbar = () => {
  let { user, logOutUser } = useContext(AuthContext)
  let handleLogout = () => {
    logOutUser()
      .then(() => {
        console.log("Log Out successfully")
      })
      .catch((error) => {
        console.log(error.massage)
      });
  }
  return (
    <div className="navbar bg-base-100 md:mt-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Home</a></li>
            <li><a>Update Profile</a></li>
          </ul>
        </div>
        <a className="text-xl md:text-3xl font-bold ml-2">CozyNest</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-8">
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? "text-[#6eb8f5] font-semibold" : 'font-semibold '}>
            Home
          </NavLink>
          <NavLink
            to="/updateProfile"
            className={({ isActive }) => isActive ? "text-[#6eb8f5] font-semibold" : 'font-semibold '}>
            Update Profile
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) => isActive ? "text-[#6eb8f5] font-semibold" : 'font-semibold '}>
            Login
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) => isActive ? "text-[#6eb8f5] font-semibold" : 'font-semibold '}>
            Register
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) => isActive ? "text-[#6eb8f5] font-semibold" : 'font-semibold '}>
            Blogs
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">

        {
          user ? <>
            <div className="dropdown dropdown-hover w-10 h-10 rounded-full flex justify-center items-center"> 
                 <img tabIndex={0} className="rounded-full bg-gray-200" src={user.photoURL ? user.photoURL : userImg} />
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box mt-24 w-52">
                  <li><a>{user.displayName}</a></li>
                </ul>
                </div>
            <button onClick={handleLogout} className="btn ml-3 bg-[#64ade8] text-white">Log Out</button>
          </>
            : <>
              <Link to="login"><button className="btn ml-3 bg-[#64ade8] text-white">Log in</button></Link>
            </>
        }
      </div>
    </div>
  );
};

export default Navbar;