'use client'
import React, { useState } from 'react';
import '../../../app/globals.css'

const MobileMenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
      <button onClick={toggleMenu} className='flex md:hidden flex-col justify-between items-center w-8 h-8'>
        <div className={`w-8 h-0.5 bg-white ${isOpen ? 'rotate-45 transition-all duration-300 translate-y-[1.025rem]' : ''}`}></div>
        <div className={`w-8 h-0.5 bg-white ${isOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-8 h-0.5 bg-white ${isOpen ? '-rotate-45 transition-all duration-300 -translate-y-[0.85rem]' : ''}`}></div>
      </button>
  );
};

export default MobileMenuButton;
