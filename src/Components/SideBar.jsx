import React, { useRef } from 'react'
import { FaArrowRight } from "react-icons/fa";
import { useRecoilState, useSetRecoilState } from 'recoil';
import { SideBarToogle } from '../store/atom/SideBarToogle';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { getNavValue } from '../store/atom/getNavValue';

const SideBar = () => {
    const boxRef = useRef(null);    

    const [getSideBar,setSideBar] = useRecoilState(SideBarToogle);

    const handleState = ()=>setSideBar((prev)=>!prev)

    useGSAP(()=>{
        if(getSideBar==true)
        {
            gsap.to(boxRef.current,{
                width : "100%",
                duration : 0.2,
                ease : "power4.inOut"
            })
        }
        if(getSideBar == false)
        {
            gsap.to(boxRef.current,{
                width : "0%",
                duration : 0.2,
                ease: "power4.inOut"
            })
        }
    },[getSideBar]);

    const options = [
        {
            "id" : "1",
            "name" : "Electronics" 
        },
        {
            "id" : "2",
            "name" : "Jewelery" 
        },
        {
            "id" : "3",
            "name" : "Men's Clothing" 
        },
        {
            "id" : "4",
            "name" : "Women's Clothing" 
        }
    ]
    const setNavValue = useSetRecoilState(getNavValue);
    const getTheValue = (name)=>{
        setNavValue(name);
    }

  return (
    <div ref={boxRef} className="bg-slate-300 flex h-fit font-semibold text-xl absolute right-[-10%] top-0 -translate-x-[10%] -translate-y-[0%] p-3">
        <div className="links flex flex-col whitespace-nowrap w-[90%]">
            {options.map((elem)=>(
                <h1 key={elem.id} onClick={()=>getTheValue(elem.name)} >{elem.name}</h1>
            ))}
        </div>
        <FaArrowRight onClick={handleState} />
    </div>
  )
}

export default SideBar
