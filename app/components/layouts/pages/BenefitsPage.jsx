import React from 'react';
import { useLanguage } from '@/app/context/translate';
import { dictionary } from '@/app/context/dictionary';
import BenefitText from '../benefit-text/BenefitText';
import FifthCard from '../../elements/cards/FifthCard';
import FourthCard from '../../elements/cards/FourthCard';
import ThirdCard from '../../elements/cards/ThirdCard';
import SecondCard from '../../elements/cards/SecondCard';
import FirstCard from '../../elements/cards/FirstCard';
import SixthCard from '../../elements/cards/SixthCard';
import SeventhCard from '../../elements/cards/SeventhCard';

const cards = [
    FirstCard,
    SecondCard,
    ThirdCard,
    FourthCard,
    FifthCard,
    SixthCard,
    SeventhCard,
];

const BenefitsPage = () => {
    const { language } = useLanguage();
    const { cardsSection } = dictionary[language];

    return (
        <section
            id="benefits-page"
            className="flex flex-col md:flex-row h-0 justify-between absolute benefits-section  items-center w-full"
        >
            <div className="md:w-2/5 flex items-center md:block w-full h-[55%] md:h-fit benefit-text ">
                <BenefitText />
            </div>
            <div className="flex flex-row card-block relative h-full w-full md:w-3/5">
                {cardsSection.cards.map((Card, index) => (
                    <div
                        key={index}
                        className={`absolute card-${
                            index + 1
                        } w-full translate-y-[250%] card md:translate-y-0 md:translate-x-[200%]`}
                    >
                        <Card />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BenefitsPage;
