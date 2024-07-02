import React from 'react'
import Button from '../../elements/Button'

const WhitePage = () => {
  return (
      <section className="hidden z-[1] flex-col gap-8 h-dvh text-center justify-center items-center white-page relative">
          <div className='hidden flex-col opacity-0 items-center gap-8 white-first justify-center'>
                  <p className="text-black text-[24px] max-w-[292px] leading-[29.05px] text-center tracking-[-2px] text-wrap">Спеціальна пропозиція для нових користувачів:</p>
                  <h3 className="text-[40px] leading-[48.41px] text-black max-w-[526px] text-center tracking-[-3px]">Отримайте акаунт на 14 днів у Keitaro безкоштовно!</h3>
          <Button>Приєднатись</Button> 
          </div>
          <div className='hidden flex-col opacity-0 items-center white-second gap-8 justify-center'>
               <p className="text-white text-[24px] max-w-[292px] leading-[29.05px] text-center tracking-[-2px] text-wrap">ТОП джерело тижня</p>
                  <h3 className="text-[40px] leading-[48.41px] text-white max-w-[526px] text-center tracking-[-3px]">Щотижня ми публікуємо воронку на найкращі джерела трафіку.</h3>
                  <Button>Приєднатись</Button> 
          </div>
           <div className='hidden flex-col white-third opacity-0 items-center gap-8 justify-center'>
                  <h3 className="text-[40px] leading-[48.41px] text-black max-w-[526px] text-center tracking-[-3px]">Приєднуйтесь до Traffic Radar і розвивайте свій бізнес разом з нами!</h3>
          <Button>Приєднатись</Button> 
          </div>
             </section>
  )
}

export default WhitePage