import React from 'react'
import AnimatedLogo from '../../elements/AnimatedLogo'
import Button from '../../elements/Button'
import Link from 'next/link'
const links = ['Про нас', 'Переваги', 'Бонуси']

const Header = () => {
  return (
      <header className='flex w-full fixed z-10 flex-row header justify-between items-center pl-[42px] bg-transparent pr-[80px] pt-[65px]'>
          <AnimatedLogo />
          <nav className='flex flex-row header-nav items-center gap-[180px]'>
              <ul className='flex flex-row items-center gap-20'>
                    {links.map((link, index) => (
                        <li key={index} className='cursor-pointer'>
                            <Link href={link} className='cursor-pointer text-white mix-blend-difference'>
                            {link}
                            </Link>
                        </li>
                    ))}
              </ul>
              <Button>Приєднатись</Button>
          </nav>
    </header>
  )
}

export default Header