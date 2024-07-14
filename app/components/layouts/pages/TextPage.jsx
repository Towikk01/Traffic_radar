import React, { useEffect } from 'react'
import SplitType from 'split-type'

const firstText = 'Раді вітати вас у Traffic Radar! Ми молода та енергійна команда спеціалістів, яка пропонує топові продукти для всіх доступних ГЕО і багато інших переваг.'
const secondText= 'Кожен наш оффер унікальний та привабливий для вебмайстрів, а ми завжди готові допомогти підібрати найкращий варіант для вас.'

const splitText = (text) => {
  return text.split(' ').map((char, index) => (
    <div key={index} className={`overflow-hidden tracking-[-1.25px] text-[20px] inline-block ${char === ' ' ? 'space' : ''}`}>
      <div className={`char inline-block ${char === ' ' ? 'space' : ''}`}>{char}{index < text.split(' ').length - 1 && '\u00A0'}
</div>
    </div>
  ));
};

const TextPage = () => {
  return (
    <section id='text-page' className="px-7 md:pl-[80px] h-dvh flex justify-center w-full md:max-w-[776px] absolute text-page flex-col gap-2 md:gap-12">
      <div className='text-white first-text text-[40px] leading-6 md:leading-[48.5px]'>
        {splitText(firstText)}
        </div>
      <div className='text-white second-text text-[40px] leading-6 md:leading-[48.5px]'>
        {splitText(secondText)}
      </div>
        </section>
  )
}

export default TextPage