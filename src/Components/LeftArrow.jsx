import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
const LeftArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
      className={`${className} text-[44px] absolute left-[260px] md:ml-[775px] -top-5 md:-top-20 `}
      onClick={onClick}><FaArrowLeftLong className='text-fontColor hover:bg-btnbgColor hover:text-white hover:border-none p-2 hidden md:block' /></div>
    )
}

export default LeftArrow