import Link from 'next/link'
import React from 'react'

const Button = ({ children, href, bgOpacity, mixBlend, fontSizeP = 18 }) => {
  const opacityClass = {
    0.5: 'bg-opacity-50',
    0.7: 'bg-opacity-70',
    0.9: 'bg-opacity-90'
  }

  const mixBlendModes = {
    lighten: 'mix-blend-lighten',
    difference: 'mix-blend-difference',
    normal: 'mix-blend-normal'
  }

  const fontSize = {
    14: 'text-[14px]',
    16: 'text-[16px]',
    18: 'text-[18px]',
    24: 'text-[24px]'
  }


  return (
      <Link target='_blank' rel='noopener noreferrer' href={`${href}`}>
    <button className={`text-white cursor-pointer ${fontSize[fontSizeP]} text-[18px] ${opacityClass[bgOpacity]} bg-gradient-to-r ${mixBlendModes[mixBlend]} from-[#171717] to-[#333333] px-3 py-2 md:py-4 rounded-full border border-gray-700`}>
      {children}
      </button>
      </Link>
  )
}

export default Button