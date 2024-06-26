import React, { useEffect } from 'react'
import SplitType from 'split-type'

const firstText = 'Раді вітати вас у Traffic Radar! Ми молода та енергійна команда спеціалістів, яка пропонує топові продукти для всіх доступних ГЕО і багато інших переваг.'
const secondText= 'Кожен наш оффер унікальний та привабливий для вебмайстрів, а ми завжди готові допомогти підібрати найкращий варіант для вас.'

const splitText = (text) => {
  return text.split('').map((char, index) => (
    <div className='overflow-hidden inline-block'>
    <div key={index} className="char inline-block">{char} </div>
    </div>
  ));
};

// pt-[348px]


const TextPage = () => {
  return (
         <div className="pl-[80px] h-dvh w-[776px] justify-center flex items-start text-page flex-col gap-12">
      <div className='text-white first-text text-[40px] leading-[48.5px]'>{splitText(firstText)}
</div>
      <div className='text-white second-text text-[40px] leading-[48.5px]'>{splitText(secondText)}
</div>
        </div>
  )
}

export default TextPage