import React from 'react';
import style from '../style.module.css';
import { IoHomeOutline } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";
import { IoCartOutline } from "react-icons/io5";
import { NavLink, useLocation } from 'react-router-dom';

const MNavbar = React.memo(() => {

    const {pathname} = useLocation();

  return (
    <div className={`w-full h-[7vh] fixed bottom-0 left-0 translate-x-[0%] translate-y-[0%] ${style.borderTop} flex items-center justify-around visible lg:hidden bg-slate-100`}>
        
        <div className="icons p-1 flex flex-col items-center">
            <IoHomeOutline className={`text-xl ${pathname == '/' ? "text-blue-700" : "text-black"}`} />
            <NavLink to="/" className={`${style.gilroy} font-semibold text-lg ${pathname == '/' ? "text-blue-700" : "text-black"}`}>Home</NavLink>
        </div>

        <div className="icons p-1 flex flex-col items-center">
            <BiCategory className={`text-xl ${pathname == '/categories' ? "text-blue-700" : "text-black"}`} />
            <NavLink to="/categories" className={`${style.gilroy} font-semibold text-lg ${pathname == '/categories' ? "text-blue-700" : "text-black"}`}>Categories</NavLink>
        </div>
        
        <div className="icons p-1 flex flex-col items-center">
            <IoCartOutline className={`text-xl ${pathname == '/cart' ? "text-blue-700" : "text-black"}`} />
            <NavLink to="/cart" className={`${style.gilroy} font-semibold text-lg ${pathname == '/cart' ? "text-blue-700" : "text-black"}`}>Cart</NavLink>
        </div>

    </div>
  )
})

export default MNavbar;
