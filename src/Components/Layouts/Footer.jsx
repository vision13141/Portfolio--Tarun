import React from 'react'
import Image from '../Image'
import Logo3 from '../../assets/logo3.png'
import { FaSkype, FaInstagram, FaBehance } from "react-icons/fa";
import Flex from '../Flex';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerli = ['Home', 'About', 'Services', 'Blog', 'Contact']

  return (
    <div>
      <div className="w-full h-[400px] bg-[#00413D] border-b border-b-white">
        <Image src={Logo3} className='mx-auto pt-[110px]'/>

        <ul className='flex font-medium justify-center pt-[30px] flex-wrap'>
          {
            footerli.map((el, idx) => {
              return (
                <li key={idx} className='my-2'>
                  <Link to="#" className='text-white hover:text-btnbgColor text-[18px] font-medium leading-[26px] px-1'>
                    {el}
                  </Link>
                  {footerli.at(-1) !== el && <span className='text-white px-[0.6vw]'>|</span>}
                </li>
              )
            })
          }
        </ul>

        {/* Social Media Icons */}
        <Flex className='justify-center mt-10 gap-x-4'>
          <button type='#' className="bg-btnbgColor rounded-full p-5">
            <FaSkype className='text-[45px] text-white'/>
          </button>
          <button type='#' className="bg-btnbgColor rounded-full p-5">
            <FaInstagram className='text-[45px] text-white'/>
          </button>
          <button type='#' className="bg-btnbgColor rounded-full p-5">
            <FaBehance className='text-[45px] text-white'/>
          </button>
        </Flex>
      </div>

      <div className="w-full h-[100px] bg-[#00413D]">
        <h4 className='font-openSans text-white text-center pt-10 text-sm md:text-base'>
          Copyright © 2024 Design By Tarun. All rights reserved.
        </h4>
      </div>
    </div>
  )
}

export default Footer
