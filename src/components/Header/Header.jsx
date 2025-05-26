import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaHome,
  FaUserAlt,
  FaUtensils,
  FaPenAlt,
  FaBars,
} from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/ai";
import { BiLogoReact } from "react-icons/bi";

const Header = () => {
  return (
    <header className="text-white  shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4   rounded-b-2xl">
        <div className="flex items-center gap-2 text-[28px] font-extrabold text-indigo-700">
          <Link to="/">
            <h1>Online Market</h1>
          </Link>
        </div>

        <nav className="hidden md:flex gap-6 text-indigo-700 font-medium">
          <NavLink
            to="/"
            className="flex items-center gap-2 hover:text-indigo-500 transition duration-200"
          >
            Home
          </NavLink>

          <NavLink
            to="/recipe"
            className="flex items-center gap-2 hover:text-indigo-500 transition duration-200"
          >
            Recipe
          </NavLink>

          <NavLink
            to="/post"
            className="flex items-center gap-2 hover:text-indigo-500 transition duration-200"
          >
            Post
          </NavLink>

          <NavLink
            to="/user"
            className="flex items-center gap-2 hover:text-indigo-500 transition duration-200"
          >
            User
          </NavLink>

          <NavLink
            to="/Login"
            className="flex items-center gap-1 hover:text-violet-600 transition duration-200"
          >
       
            Login
          </NavLink>
        </nav>

        
        <div className="text-indigo-700 text-2xl cursor-pointer md:hidden">
          <FaBars />
        </div>
      </div>
    </header>
  );
};

export default Header;
