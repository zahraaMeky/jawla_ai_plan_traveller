import React from 'react';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { FaXmark,FaBars } from 'react-icons/fa6'; 
function Navbar() {
  const [isMenuOpen, setisMenuOpen] = useState(false)
  const toggleMenu=()=>{
    setisMenuOpen(prev => !prev)
  }
  return (
    <nav className='w-full h-24 flex flex-col justify-center items-center sticky top-0 z-50 bg-white shadow'>
      <div className='max-w-[1400px] mx-auto lg:px-2 w-full'>
        <div className='lg:w-full w-11/12 mx-auto h-full flex justify-between items-center'>
          <div className='flex flex-col gap-y-4'>
            <div className='flex items-center gap-x-2 w-[250px]'>
              <img src='/logo.png' alt="Website Logo" /> {/* Added alt text for accessibility */}
            </div>
          </div>
          <ul className='flex items-center xl:gap-12 gap-x-4 max-lg:hidden'>
            <li>
              <a href="#home" className='leading-normal font-bold text-lg text-[#181E4B]'>الرئيســيــة</a>
            </li>
            <li>
              <a href="#about" className='leading-normal text-[#181E4B] font-bold text-lg'>عــن جــولة</a>
            </li>
            <li>
              <a href="#testimonials" className='leading-normal text-[#181E4B] font-bold text-lg'>قـالــوا عـــنا</a>
            </li>
            <li>
            <a href="#services"  className="bg-[#DF6951] rounded shadow h-10 py-2 px-8 outline-none text-white hover:bg-white hover:text-[#DF6951] cursor-pointer text-base transition-bg hover:border hover:border-[#DF6951] -mt-2">
              خــدمــاتنــا
              </a>
            </li>
          </ul>
            {/* mobile Nav */}
      <div className='flex justify-center items-center lg:hidden mt-4' onClick={toggleMenu}>
        <div>
          {
            isMenuOpen?<FaXmark className='text-[#181E4B] text-3xl cursor-pointer'/>:
            <FaBars className='text-[#181E4B] text-3xl cursor-pointer'/>
          }
        </div>
      </div>
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full bg-[#DF6951]   h-fit p-4 absolute top-[80px] left-0`} >
        <ul className='flex flex-col  justify-center items-center gap-2 w-full'>
        <li>
              <Link to="/" className='leading-normal font-bold text-lg text-white'>الرئيسـية</Link>
            </li>
            <li>
              <Link to="/about" className='leading-normal text-white font-bold text-lg'>عـن جـولة</Link>
            </li>
            <li>
              <Link to="/contact" className='leading-normal text-white font-bold text-lg'>تـواصـل معـنا</Link>
            </li>
            <li>
              <button className="bg-white rounded shadow h-10 py-2 px-8 outline-none text-[#DF6951] mt-3 cursor-pointer text-base transition-bg hover:border hover:border-[#DF6951]">
                تسـجيل دخـول
              </button>
            </li>
        </ul>
      </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
