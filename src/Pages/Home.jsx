import React from 'react'

import Navbar from '../Components/Navbar';
import SideBar from '../Components/SideBar';

const Home = () => {

  return (
    <div className='w-screen min-h-screen bg-slate-200 overflow-x-hidden relative'>
      <Navbar />
      <SideBar />
    </div>
    
  )
}

export default Home
