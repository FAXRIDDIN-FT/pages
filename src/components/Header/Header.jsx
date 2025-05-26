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
 <header className="bg-white shadow-md">
  <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 rounded-b-2xl">
    <div className="flex items-center gap-2 text-[28px] font-extrabold text-indigo-700">
      <Link to="/">
        <h1>Online Market</h1>
      </Link>
    </div>

    <nav className="hidden md:flex gap-6 items-center text-indigo-700 font-medium">
      <NavLink
        to="/"
        className="hover:text-indigo-500 transition duration-200"
      >
        Home
      </NavLink>

      <NavLink
        to="/recipe"
        className="hover:text-indigo-500 transition duration-200"
      >
        Recipe
      </NavLink>

   
      <NavLink
        to="/user"
        className="hover:text-indigo-500 transition duration-200"
      >
        User
      </NavLink>

      <NavLink
        to="/login"
        className="hover:text-violet-600 transition duration-200"
      >
        Login
      </NavLink>

      <NavLink
        to="/signup"
        className="bg-indigo-600 text-white px-4 py-1 rounded-md hover:bg-indigo-700 transition"
      >
        Sign Up
      </NavLink>
    </nav>

    <div className="hidden md:block ml-6">
      <input
        type="text"
        placeholder="Search..."
        className="px-3 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm"
      />
    </div>

    <div className="text-indigo-700 text-2xl cursor-pointer md:hidden">
      <FaBars />
    </div>
  </div>
</header>

  );
};

export default Header;
