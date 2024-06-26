import React from 'react'

const Button = ({ children, bgOpacity }) => {
  const opacityClass = bgOpacity ?  'mix-blend-lighten' : ``;
  return (
      <button className={`text-white cursor-pointer bg-gradient-to-r from-[#171717] to-[#333333] px-6 py-4 rounded-full border border-gray-700 ${opacityClass}`}>
          {children}
      </button>
  )
}

export default Button