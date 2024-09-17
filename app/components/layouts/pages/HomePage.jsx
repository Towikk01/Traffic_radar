import React from 'react';
import Button from '../../elements/Button';
import { useLanguage } from '@/app/context/translate';
import { dictionary } from '@/app/context/dictionary';

const HomePage = () => {
    const { language } = useLanguage();

    return (
        <section className="flex opacity-100 translate-y-10 z-20 flex-col gap-2 h-dvh pb-[6rem] md:pb-0 justify-center items-center home absolute inset-0">
            <h1 className="text-radar leading-[104px] md:leading-[250px] bg-gradient-to-b from-[#444444] via-white  to-[#444444] text-transparent w-full text-center bg-clip-text tracking-[-4px] md:tracking-[-20px]">
                Traffic Radar
            </h1>
            <p className="text-white md:mb-8 text-[20px] md:text-[40px] md:w-[549px] w-4/5 leading-7  md:leading-[49px] text-center tracking-normal md:tracking-[-2px] text-wrap">
                {dictionary[language].heroTitle}
            </p>
            <Button
                href="https://trafficradar.affise.com/v2/sign/up"
                bgOpacity={0.5}
            >
                {dictionary[language].button}
            </Button>
        </section>
    );
};

export default HomePage;
