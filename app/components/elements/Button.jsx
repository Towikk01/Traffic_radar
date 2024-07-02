import React from 'react'

const Button = ({ children, bgOpacity }) => {
  const opacityClass = {
    0.5: 'bg-opacity-50',
    0.7: 'bg-opacity-70',
    0.9: 'bg-opacity-90'
  }


  return (
      <button className={`text-white cursor-pointer ${opacityClass[bgOpacity]} bg-gradient-to-r mix-blend-lighten from-[#171717] to-[#333333] px-6 py-4 rounded-full border border-gray-700`}>
          {children}
      </button>
  )
}

export default Button