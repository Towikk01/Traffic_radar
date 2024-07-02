import React from 'react'
import Button from '../../elements/Button'

const HomePage = () => {
  return (
     <div className="flex flex-col gap-2 h-dvh justify-center items-center home absolute inset-0">
          <h1 className="text-radar leading-[250px] bg-gradient-to-b from-[#444444] via-white  to-[#444444] text-transparent w-full text-center bg-clip-text tracking-[-26px]">Traffic Radar</h1>
          <p className="text-white mb-8 text-[40px] w-[549px] leading-[49px] text-center tracking-[-2px] text-wrap">Ваша партнерська программа в iGaming індустрії 2024!</p>
          <Button bgOpacity={0.5}>Приєднатись</Button> 
        </div>
  )
}

export default HomePage