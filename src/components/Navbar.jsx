import React, { useState } from "react";
import { Link } from "react-router-dom";
import {styles} from "../styles";
import logo from '../assets/logo/web-logo.png'
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className=" shadow-xl  header backdrop-blur-xl bg-black/40 md:bg-transparent  z-50 sticky top-0 text-white items-center md:px-20 px-4 py-4 flex justify-between w-full">
      <img className='z-50 w-[90px] md:w-[120px]' src={logo} alt="" />
      <div>
        <ul
          className={`md:flex backdrop-blur-2xl bg-black/40  md:bg-transparent right-0 z-0  w-full text-center  rounded-2xl md:shadow-none shadow-xl pb-2 md:pb-0 justify-center md:static duration-100 ease-linear absolute ${
            open ? "top-12" : "top-[-550px]"
          }`}
        >
          <li
            onClick={() => setOpen(!open)}
            className=" text-white  my-2 md:0   mx-4"
          >
            <a href="#">Home</a>
          </li>
          <li
            onClick={() => setOpen(!open)}
            className=" text-white  my-2 md:0  mx-4"
          >
      
            <a href="#works">Works</a>
          </li>
          <li
            onClick={() => setOpen(!open)}
            className="  text-white my-2 md:0  mx-4"
          >
            <a href="#about">About Me</a>
          </li>
          <li
            onClick={() => setOpen(!open)}
            className=" text-white my-2 md:0 mx-4"
          >
            <a href="#contact" >Contact</a>
          </li>
       
        </ul>
        <div onClick={() => setOpen(!open)} className="h-6 ease-in duration-300  text-white w-6 md:hidden" >
                    {open ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

                        : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                      </svg>
                      
                    }
                </div>
      </div>
    </nav>
  );
};

export default Navbar;
