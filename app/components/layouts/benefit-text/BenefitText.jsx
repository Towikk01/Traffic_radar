import React from 'react';
import Ellipse from '../../elements/svg/Ellipse';
import { useLanguage } from '@/app/context/translate';
import { dictionary } from '@/app/context/dictionary';

const BenefitText = () => {
    const { language } = useLanguage();
    return (
        <div className="relative px-6 pt-8 md:px-0 flex items-end justify-center">
            <Ellipse />
            <h4 className="benef-text leading-10 md:pl-20 text-left md:leading-[135px] opacity-0 text-white w-full ">
                {dictionary[language].cardsSection.title}
            </h4>
        </div>
    );
};

export default BenefitText;
