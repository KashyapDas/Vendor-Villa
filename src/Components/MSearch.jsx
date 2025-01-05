import React, { useEffect, useRef } from 'react'
import { CiSearch } from "react-icons/ci";
import { CiMicrophoneOn } from "react-icons/ci";
import random from "../assets/files/Random";

const MSearch = React.memo(() => {
    let element = useRef();

    const intervalRef = useRef(null); 

    useEffect(() => {
        let interval = setInterval(() => {
            element.current.value = random[Math.floor(Math.random() * random.length)];
        }, 1000);
    
        intervalRef.current = interval;
    
        return () => clearInterval(interval);
    }, []);

    const handleSearch = (e) => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        // console.log(e.target.value); getting the value from the search bar
    };

  return (
    <div className="input flex justify-end lg:justify-between p-3">
        <h1 className='hidden lg:flex'>Vendor Villa</h1>
        <div className='border-2 border-solid border-black flex justify-end bg-blue-400'>
            <CiSearch className='bg-white p-1 text-4xl' />
            <input onChange={handleSearch} ref={element} type="text" placeholder="Search"   className='text-slate-400 border-none outline-none' />
            <CiMicrophoneOn className='bg-white p-1 text-4xl'/>
        </div>
    </div>
  )
})

export default MSearch
