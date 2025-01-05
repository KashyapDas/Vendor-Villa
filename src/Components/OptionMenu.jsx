import React from 'react'
import { NavLink } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { OptionToogle } from '../store/atom/OptionToogle'

const OptionMenu = () => {
    const option = [
        {
          "id":"1",
        "name":"Mens'CLothing"
        },
        {
          "id":2,
          "name":"Women's Clothing"
        }
      ]

    const toogle = useRecoilValue(OptionToogle);

  return (
    <div className={`${toogle == false ? "hidden" : "visible"} absolute right-[1%] top-[5%] h-fit w-fit p-1 bg-slate-300 shadow-lg shadow-slate-400 rounded-md font-bold text-xl`}>
        {option.map((elem)=>(
            <NavLink key={elem.id} className="flex whitespace-nowrap mt-2 cursor-pointer">{elem.name}</NavLink>
        ))}
    </div>
  )
}

export default OptionMenu
