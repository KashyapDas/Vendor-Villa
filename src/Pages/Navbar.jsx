import React from 'react';
import style from '../style.module.css';
import { IoHomeOutline } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";
import { IoCartOutline } from "react-icons/io5";
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = React.memo(() => {

    const {pathname} = useLocation();

  return (
    <div className={`hidden w-full h-[7vh] items-center justify-around lg:flex lg:justify-start lg:gap-x-28 lg:w-1/2 bg-slate-100 lg:mx-44`}>
        
        <NavLink to="/" className="icons p-1 flex flex-col items-center">
            <IoHomeOutline className={`text-2xl ${pathname == '/' ? "text-blue-700" : "text-black"}`} />
            <h1  className={`${style.gilroy} font-semibold text-xl ${pathname == '/' ? "text-blue-700" : "text-black"}`}>Home</h1>
        </NavLink>

        <NavLink to="/categories" className="icons p-1 flex flex-col items-center">
            <BiCategory className={`text-2xl ${pathname == '/categories' ? "text-blue-700" : "text-black"}`} />
            <h1  className={`${style.gilroy} font-semibold text-xl ${pathname == '/categories' ? "text-blue-700" : "text-black"}`}>Categories</h1>
        </NavLink>
        
        <NavLink to="/cart" className="icons p-1 flex flex-col items-center">
            <IoCartOutline className={`text-2xl ${pathname == '/cart' ? "text-blue-700" : "text-black"}`} />
            <h1  className={`${style.gilroy} font-semibold text-xl ${pathname == '/cart' ? "text-blue-700" : "text-black"}`}>Cart</h1>
        </NavLink>

    </div>
  )
})

export default Navbar;
