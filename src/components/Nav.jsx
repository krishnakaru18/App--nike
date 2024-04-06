import React, { useState } from 'react';
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { hamburger } from "../assets/icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg relative z-10 m-2 mt-0 rounded-xl">
      <div className="container mx-auto">
        <div className="bg-white flex justify-between items-center">
          <div className='p-2'>
            <img src={headerLogo} alt="Logo" className="h-10 md:h-20" />
          </div>
          <div className="md:hidden">
            <button onClick={toggleDropdown} className="text-gray-700 focus:outline-none">
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <img src={hamburger} alt="Menu" className="h-6 w-6" />
              )}
            </button>
          </div>
          <div className="hidden md:flex md:items-center m-2 p-2">
            {navLinks.map((item) => (
              <a key={item.label} href={item.href} className="p-3 m-2 cursor-pointer" style={{fontSize: '1rem', fontWeight: 'normal'}}>{item.label}</a>
            ))}
          </div>
          {isOpen && (
            <div className="absolute top-full right-0 left-0 md:hidden bg-white border border-gray-200 rounded-md shadow-lg z-20">
              <div className="py-1 flex flex-col justify-center items-center">
                {navLinks.map((item) => (
                  <a key={item.label} href={item.href} onClick={closeDropdown} className="transform hover:scale-105 focus:outline-none m-2 cursor-pointer" style={{fontSize: '1rem', fontWeight: 'bold'}}>{item.label}</a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
