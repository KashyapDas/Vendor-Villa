import React from 'react'
import { IoIosArrowDropdown } from "react-icons/io";
import { useRecoilState } from 'recoil';
import { OptionToogle } from '../store/atom/OptionToogle';
import { NavLink } from 'react-router-dom';

const DesktopNav = () => {

    const [toogle,setToogle] = useRecoilState(OptionToogle);

    const handleDropDown = () => setToogle((prev)=>!prev);


  return (
    <nav className='w-full h-10 px-2 py-2 flex items-center justify-center'>
            <div className='w-full h-fit flex items-center justify-between text-xl font-semibold whitespace-nowrap'>
                <NavLink href="#">Electronics</NavLink>
                <NavLink href="#">Jewelery</NavLink>
                <h1 href="#" onClick={handleDropDown} className='flex items-center whitespace-nowrap cursor-pointer'>Clothing <IoIosArrowDropdown className={`ml-1 ${toogle == false ? "rotate-0" : "rotate-180"} `} /></h1>
            </div>  
    </nav>
  )
}

export default DesktopNav
