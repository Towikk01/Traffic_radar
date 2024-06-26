import React from 'react'
import BenefitText from '../benefit-text/BenefitText'
import FifthCard from '../../elements/cards/FifthCard'
import FourthCard from '../../elements/cards/FourthCard'
import ThirdCard from '../../elements/cards/ThirdCard'
import SecondCard from '../../elements/cards/SecondCard'
import FirstCard from '../../elements/cards/FirstCard'
import SixthCard from '../../elements/cards/SixthCard'

const BenefitsPage = () => {
  return (
      <section className='flex flex-row justify-between items-center w-full'>
          <BenefitText />
          <div className='flex flex-row'>
              <FirstCard />
              <SecondCard />
              <ThirdCard />
              <FourthCard />
              <FifthCard />
              <SixthCard />
          </div>
     </section>
  )
}

export default BenefitsPage