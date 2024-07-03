import React from 'react'
import Link from 'next/link'


const links = ['Про нас', 'Переваги', 'Бонуси']

const Footer = () => {
  return (
      <footer className='hidden opacity-0 footer w-full fixed z-10 flex-col gap-8 justify-between items-center pl-[42px] bg-transparent bottom-0 pb-5'>
                    <h1 className="text-radar leading-[250px] bg-gradient-to-b from-[#444444] via-white  to-[#444444] text-transparent w-full text-center bg-clip-text tracking-[-20px]">Traffic Radar</h1>
          <nav className='flex flex-row items-center gap-[180px]'>
              <ul className='flex flex-row items-center gap-20'>
                    {links.map((link, index) => (
                        <li key={index} className='cursor-pointer'>
                            <Link href={link} className='cursor-pointer text-black mix-blend-difference'>
                            {link}
                            </Link>
                        </li>
                    ))}
              </ul>
          </nav>
    </footer>
  )
}

export default Footer