import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
const LeftArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
      className={`${className} text-[44px]  absolute  ml-[1065px] -top-20 `}
      // style={{ ...style, display: "inline-block", background: "red", }}
      onClick={onClick}><FaArrowLeftLong className='text-fontColor hover:bg-btnbgColor hover:text-white hover:border-none p-2' /></div>
    )
}

export default LeftArrow