import React from 'react'
import Button from '../../elements/Button'

const WhitePage = () => {
  return (
      <section id='white-page'  className="hidden z-[1] flex-col gap-8 h-dvh text-center justify-center items-center white-page relative">
          <div className='hidden w-4/5 md:w-full flex-col opacity-0 items-center gap-4 md:gap-8 white-first justify-center'>
                        <p className="text-black text-[14px] md:text-[24px] max-w-[292px]  md:leading-[29.05px] text-center md:md:tracking-[-2px] text-wrap">Спеціальна пропозиція для нових користувачів:</p>
                        <h3 className="md:text-[40px] text-[20px] leading-6 md:leading-[48.41px] text-black max-w-[526px] text-center md:md:tracking-[-3px]">Отримайте акаунт на 14 днів у Keitaro безкоштовно!</h3>
                        <Button href='https://aff.onepartners.io/signup/affiliate'>Приєднатись</Button>  
                  </div>
                   <div className='hidden flex-col opacity-0 items-center white-second w-4/5 md:w-full gap-8 justify-center'>
                         <p className="text-white text-[14px] md:text-[24px] max-w-[292px] md:leading-[29.05px] text-center md:tracking-[-2px] text-wrap">Бонуси</p>
                        <h3 className="md:text-[40px] text-[20px] md:leading-[48.41px] text-white max-w-[774px] text-center md:tracking-[-3px]">Ми надаємо бонусний баланс для наших вебмайстрів, що служить приємним стимулом та гарантією нашої продуктивної співпраці.</h3>
                        <Button href='https://aff.onepartners.io/signup/affiliate'>Приєднатись</Button> 
                  </div>
                   <div className='hidden flex-col opacity-0  md:w-full items-center white-third w-4/5 gap-8 justify-center'>
                        <p className="text-black text-[14px] md:text-[24px] max-w-[292px] md:leading-[29.05px] text-center md:tracking-[-2px] text-wrap">ТОП оффери тижня</p>
                        <h3 className="md:text-[40px] text-[20px] md:leading-[48.41px] text-black max-w-[591px] text-center md:tracking-[-3px]">Щотижня ми публікуємо найкращі оффери для різних географічних регіонів.</h3>
                        <Button href='https://aff.onepartners.io/signup/affiliate'>Приєднатись</Button> 
          </div>
          <div className='hidden flex-col opacity-0 items-center  w-4/5 md:w-full white-fourth gap-8 justify-center'>
               <p className="text-white  text-[14px] md:text-[24px] max-w-[292px] md:leading-[29.05px] text-center md:tracking-[-2px] text-wrap">ТОП джерело тижня</p>
                  <h3 className="md:text-[40px] text-[20px] md:leading-[48.41px] text-white max-w-[526px] text-center md:tracking-[-3px]">Щотижня ми публікуємо воронку на найкращі джерела трафіку.</h3>
                  <Button href='https://aff.onepartners.io/signup/affiliate'>Приєднатись</Button> 
          </div>
           <div className='hidden flex-col white-five opacity-0 w-4/5  md:w-full items-center gap-8 justify-center pb-16 md:pb-0'>
                  <h3 className="md:leading-[48.41px] md:text-[40px] text-[20px] text-black max-w-[526px] text-center md:tracking-[-3px]">Приєднуйтесь до Traffic Radar і розвивайте свій бізнес разом з нами!</h3>
          <Button href='https://aff.onepartners.io/signup/affiliate'>Приєднатись</Button> 
          </div>
             </section>
  )
}

export default WhitePage