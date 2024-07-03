import React from 'react'

const Button = ({ children, bgOpacity, fontSizeP = 18 }) => {
  const opacityClass = {
    0.5: 'bg-opacity-50',
    0.7: 'bg-opacity-70',
    0.9: 'bg-opacity-90'
  }

  const fontSize = {
    14: 'text-[14px]',
    18: 'text-[18px]',
    24: 'text-[24px]'
  }


  return (
      <button className={`text-white cursor-pointer ${fontSize[fontSizeP]} text-[18px] md:text-[24px] ${opacityClass[bgOpacity]} bg-gradient-to-r mix-blend-lighten from-[#171717] to-[#333333] px-6 py-3 md:py-4 rounded-full border border-gray-700`}>
          {children}
      </button>
  )
}

export default Button