import React from 'react'
import { useParams } from 'react-router-dom'
import { FcPaid } from "react-icons/fc";
import { FcCancel } from "react-icons/fc";

const Paid = () => {

  const {paid} = useParams();

  return (
    <div className='h-[93vh] w-full flex flex-col items-center justify-center'>
        <h1 className='h-fit w-fit'>{paid === "buy" ? <FcPaid className='w-20 h-20'/> : <FcCancel className='w-20 h-20'/>}</h1>
        <h1 className={`font-semibold text-2xl ${paid === "buy" ? "text-green-600" : "text-red-600"}`}>{paid === "buy" ? "You brought this product" : "Your product is cancled"}</h1>
    </div>
  )
}

export default Paid
