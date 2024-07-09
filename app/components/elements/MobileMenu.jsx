import React from 'react'
import Link from 'next/link'
import Button from './Button'


const MobileMenu = ({isOpen, links}) => {
  return (
      <div className='absolute inset-0 transition-all duration-150 -z-10'>
      <div class={`sliced-corners-div flex flex-col justify-end pb-8 transition-all duration-300 ${isOpen ? '-translate-y-0' : '-translate-y-[193px]'} `}>
          <nav className='flex flex-row header-nav items-center gap-5'>
                      <ul className='flex flex-col gap-5 items-center justify-around w-full'>
                        {links.map((link, index) => (
                            <Button key={index} mixBlend='normal' href={link.href}>{link.text}</Button>
                        ))}
                       </ul>
          </nav>
         </div>
        </div>
  )
}

export default MobileMenu