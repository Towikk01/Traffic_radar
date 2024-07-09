import React from 'react'
import Button from '../../elements/Button'

const HomePage = () => {
  return (
     <section className="flex translate-y-10 flex-col gap-2 h-dvh pb-[6rem] md:pb-0 justify-center items-center home absolute inset-0">
          <h1 className="text-radar leading-[104px] md:leading-[250px] bg-gradient-to-b from-[#444444] via-white  to-[#444444] text-transparent w-full text-center bg-clip-text tracking-[-4px] md:tracking-[-20px]">Traffic Radar</h1>
          <p className="text-white md:mb-8 text-[20px] md:text-[40px] md:w-[549px] w-4/5 leading-7  md:leading-[49px] text-center tracking-normal md:tracking-[-2px] text-wrap">Ваша партнерська программа в iGaming індустрії 2024!</p>
          <Button href='https://aff.onepartners.io/signup/affiliate' bgOpacity={0.5}>Приєднатись</Button> 
        </section>
  )
}

export default HomePage