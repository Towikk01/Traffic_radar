'use client'
import React from 'react'
import AnimatedLogo from '../../elements/AnimatedLogo'
import Button from '../../elements/Button'
import MobileMenuButton from '../../elements/MobileMenuButton'
import { useState } from 'react'
import MobileMenu from '../../elements/MobileMenu'


const links = [{text: "Логін", href: "https://aff.onepartners.io/login"}, {text: "Приєднатись", href: 'https://aff.onepartners.io/signup/affiliate'}]

const Header = () => {
     const [isOpen, setIsOpen] = useState(false);

     const toggleMenu = () => {
         setIsOpen(!isOpen);
     };
  return (
      <header className='flex w-full fixed z-[10] md:mix-blend-difference gap-2 md:gap-0 flex-row header justify-between items-center md:pl-[42px] px-7 bg-transparent md:pr-[80px] pt-[2.5rem] md:pt-[65px]'>
          <AnimatedLogo />
          <nav className='hidden md:flex flex-row header-nav items-center gap-10'>
             {links.map((link, index) => (
                  <Button key={index} href={link.href}>{link.text}</Button>
              ))}
          </nav>
          <MobileMenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
          <MobileMenu links={links}  isOpen={isOpen} />
    </header>
  )
}

export default Header