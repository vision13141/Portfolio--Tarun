import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
const RightArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
      className={`${className} text-[44px]  absolute inline-block  right-10 md:right-20 -top-5 md:-top-20 `}
      onClick={onClick}><FaArrowRightLong className="text-fontColor hover:bg-btnbgColor hover:text-white hover:border-none p-2"/></div>
    )
}

export default RightArrow