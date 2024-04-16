import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import userProfile from "../assets/user.png";

const Navbar = () => {
  const { user, logOut, updateUserData } = useContext(AuthContext);

  
  const handleSignOut = () => {
    return logOut().then().catch();
  };

  const NavList = (
    <>
      <li className="bg-white">
        <NavLink to="/" className="text-lg" href="">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="text-lg" href="">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className="text-lg" href="">
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink to="/services" className="text-lg" href="">
          Services
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile" className="text-lg" href="">
          Profile
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 flex justify-between  items-center">
      <div className="">
        <div className="dropdown z-50 ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {NavList}
          </ul>
        </div>
        <Link to="/" className="text-2xl font-semibold">
          Mangrove <span className="text-green ">Hotel</span>{" "}
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{NavList}</ul>
      </div>

      <div>
        <div
          title={user?.displayName}
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar relative"
        >
          <div className="w-10 rounded-full">
            {user ? (
              <img alt="User" src={user?.photoURL } />
            ) : (
              <img src={userProfile} alt="User" />
            )}
          </div>
        </div>

        {user ? (
          <Link onClick={handleSignOut}>
            <button className="btn">Logout</button>
          </Link>
        ) : (
          <Link to="/login">
            <button className="btn">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
