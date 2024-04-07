import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 md:mt-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Home</a></li>
            <li><a>Update Profile</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">CozyNest</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-8">
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? "text-[steelblue] font-semibold": 'font-semibold text-gray-400'}>
            Home
          </NavLink>
          <NavLink
           to="/updateProfile"
           className={({ isActive }) => isActive ? "text-[steelblue] font-semibold": 'font-semibold text-gray-400'}>
            Update Profile
            </NavLink>
            <NavLink
           to="/login"
           className={({ isActive }) => isActive ? "text-[steelblue] font-semibold": 'font-semibold text-gray-400'}>
            Login
            </NavLink>
            <NavLink
           to="/register"
           className={({ isActive }) => isActive ? "text-[steelblue] font-semibold": 'font-semibold text-gray-400'}>
            Register
            </NavLink>

        </ul>
      </div>
      <div className="navbar-end">
       <Link to="login"><button className="btn">Log in</button></Link>
      </div>
    </div>
  );
};

export default Navbar;