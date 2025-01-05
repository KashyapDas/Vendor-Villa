import React from 'react'
import DesktopNav from './DesktopNav';
import OptionMenu from './OptionMenu';
import { IoMdMenu } from "react-icons/io";
import { useSetRecoilState } from 'recoil';
import { SideBarToogle } from '../store/atom/SideBarToogle';

const Navbar = () => {

    const setSideBar = useSetRecoilState(SideBarToogle);

    const handleSideBar = () => setSideBar((prev)=>!prev);

  return (
    <div className='navbar flex items-center justify-between'>
        <h1 className="logo font-semibold text-3xl  px-2 py-1 w-fit whitespace-nowrap">Vendor Villa</h1>
          <div className='w-[40%] hidden lg:block'>
            <DesktopNav />
            <OptionMenu />
          </div>
        <IoMdMenu className='visible lg:hidden mr-3 text-2xl' onClick={handleSideBar} />
    </div>
  )
}

export default Navbar;
