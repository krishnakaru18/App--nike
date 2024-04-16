import React, { useState } from 'react';
import { Mpl } from '../assets';
import { img2 } from '../assets';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg relative z-10">
      <div className="container mx-auto">
        <div className="bg-white flex justify-between items-center">
          <div>
            <img src={Mpl} alt="Logo" className=" h-10 md:h-20" />
          </div>
          <div className="hidden md:flex md:items-center m-2 p-2 ">
            <a href="#home" className="hover:bg-sky-200  shadow-xl   hover:shadow-sky-500/50 ... text-black p-3 transform transition duration-300  hover:scale-105  focus:outline-none ">Home</a>
            <a href="#about" className="hover:bg-sky-200 shadow-xl  hover:shadow-sky-500/50  text-black  p-3 transform transition duration-300 hover:scale-105 focus:outline-none">About</a>
            <a href="#Tech" className="hover:bg-sky-200 shadow-xl  hover:shadow-sky-500/50 text-wblack p-3 transform transition duration-300 hover:scale-105 focus:outline-none">Technical</a>
            <a href="#non" className="hover:bg-sky-200 shadow-xl  hover:shadow-sky-500/50  text-black  p-3 transform transition duration-300 hover:scale-105 focus:outline-none">Non-Tech</a>
            <a href="#footer" className="hover:bg-sky-200 shadow-xl  hover:shadow-sky-500/50  text-black  p-3 transform transition duration-300 hover:scale-105 focus:outline-none">Committee</a>
            <a href="#com" className="hover:bg-sky-200 shadow-xl  hover:shadow-sky-500/50  text-black  p-3 transform transition duration-300 hover:scale-105 focus:outline-none">Contact Us</a>
            

          </div>
          <div className="relative md:hidden">

            <button onClick={toggleDropdown} className="p-3 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
            {isOpen && (
              <div className=" absolute top-14 right-0 pb-3 -mt-2  bg-gray-200  border-gray-200  shadow-lg z-20">
                <div className="sm:justify-center sm:items-center  px-6 py- flex-col justify-center items-center text-center ">
                  <a href="#home" onClick={closeDropdown} className="hover:bg-sky-200 shadow-xl px-14 py-0.5 sm:px-40 hover:shadow-sky-500/50 transform  hover:scale-105 focus:outline-nonehover:shadow-gray-500/50 block  text-gray-800transition duration-300 ease-in-out font-bold mb-1">Home</a>
                  <a href="#about" onClick={closeDropdown} className="hover:bg-sky-200 shadow-xl px-14 py-0.5 sm:px-40 hover:shadow-sky-500/50 transform  hover:scale-105 focus:outline-nonehover:shadow-gray-500/50 block  text-gray-800transition duration-300 ease-in-out font-bold mb-1">About</a>
                  <a href="#Tech" onClick={closeDropdown} className="hover:bg-sky-200 shadow-xl px-14 py-0.5  hover:shadow-sky-500/50 transform  hover:scale-105 focus:outline-nonehover:shadow-gray-500/50 block  text-gray-800transition duration-300 ease-in-out font-bold mb-1">Technical</a>
                  <a href="#non" onClick={closeDropdown} className="hover:bg-sky-200 shadow-xl py-0.5 hover:shadow-sky-500/50 transform  hover:scale-105 focus:outline-nonehover:shadow-gray-500/50 block  text-gray-800transition duration-300 ease-in-out font-bold mb-1">Non-Tech</a>
                  <a href="#com" onClick={closeDropdown} className="hover:bg-sky-200 shadow-xl py-0.5 hover:shadow-sky-500/50 transform  hover:scale-105 focus:outline-nonehover:shadow-gray-500/50 block  text-gray-800transition duration-300 ease-in-out font-bold mb-1">Committee</a>
                  <a href="#footer" onClick={closeDropdown} className="hover:bg-sky-200 shadow-xl py-0.5 hover:shadow-sky-500/50 transform  hover:scale-105 focus:outline-nonehover:shadow-gray-500/50 block  text-gray-800transition duration-300 ease-in-out font-bold mb-1">Contact Us</a>
                  
                </div>
              </div>      
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
