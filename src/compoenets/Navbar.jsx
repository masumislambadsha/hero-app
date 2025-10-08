import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import github from "../assets/githubLogo.png";

const Navbar = () => {
  return (

    <div className="bg-base-100 shadow">
      <div className="container mx-auto navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-bold border-b-2 border-primary"
                  : "text-gray-600 hover:text-primary"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/apps"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-bold border-b-2 border-primary"
                  : "text-gray-600 hover:text-primary"
              }
            >
              Apps
            </NavLink>

            <NavLink
              to="/installation"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-bold border-b-2 border-primary"
                  : "text-gray-600 hover:text-primary"
              }
            >
              Installation
            </NavLink>
          </ul>
        </div>

        <div className="flex items-center justify-center">
          <Link to='/'>
          <img src={logo} className="cursor-pointer w-[40px] h-[40px]" alt="" />
          </Link>

          <Link to="/">
            <p
              className="btn-ghost text-xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2]
             bg-clip-text text-transparent px-0"
            >
              HERO.IO
            </p>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "btn text-primary font-bold border-b-2 border-primary"
                : "btn"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/apps"
            className={({ isActive }) =>
              isActive
                ? "btn text-primary font-bold border-b-2 border-primary"
                : "btn"
            }
          >
            Apps
          </NavLink>

          <NavLink
            to="/installation"
            className={({ isActive }) =>
              isActive
                ? "btn text-primary font-bold border-b-2 border-primary"
                : "btn"
            }
          >
            Installation
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <a target=" _blank" href="https://github.com/masumislambadsha" className="btn rounded-lg px-[15px] py-[21px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
          <img src={github} alt="" /> Contribute
        </a>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
