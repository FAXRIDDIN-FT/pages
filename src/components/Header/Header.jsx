import React from 'react'
import {Link, NavLink } from 'react-router-dom'
import { FaHome, FaUserAlt, FaUtensils, FaPenAlt,FaBars  } from 'react-icons/fa'
import { AiOutlineLogin } from 'react-icons/ai'
import { BiLogoReact } from 'react-icons/bi'

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 ">
        <div className="flex items-center gap-2 text-xl font-bold">
          <BiLogoReact className="text-cyan-400 text-3xl animate-spin" />
         <Link to={"/"}>
           <span>MyApp</span>
         </Link>
        </div>
        <nav className="flex gap-6 text-white text-sm md:text-base max-[600px]:hidden ">
          <NavLink to="/" className="flex items-center gap-1 hover:text-cyan-400 transition" >
            <FaHome /> Home
          </NavLink>

          <NavLink to="/user" className="flex items-center gap-1 hover:text-cyan-400 transition" >
            <FaUserAlt /> User
          </NavLink>

          <NavLink to="/recipe" className="flex items-center gap-1 hover:text-cyan-400 transition" >
            <FaUtensils /> Recipe
          </NavLink>

          <NavLink to="/post" className="flex items-center gap-1 hover:text-cyan-400 transition" >
            <FaPenAlt /> Post
          </NavLink>


          <NavLink to="/Login" className="flex items-center gap-1 hover:text-cyan-400 transition" >
            <AiOutlineLogin /> Login
          </NavLink>
        </nav>
          <div className="hidden text-2xl cursor-pointer max-[600px]:block" >
            <FaBars />
          </div>
      </div>
    </header>
  )
}

export default Header
