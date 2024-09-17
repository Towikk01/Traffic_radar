import React from 'react';
import Button from '../../elements/Button';
import { useLanguage } from '@/app/context/translate';
import { dictionary } from '@/app/context/dictionary';

const WhitePage = () => {
    const { language } = useLanguage();
    return (
        <section
            id="white-page"
            className="hidden z-[1] flex-col gap-8 h-dvh text-center justify-center items-center white-page relative"
        >
            <div className="hidden w-4/5 md:w-full flex-col opacity-0 items-center gap-4 md:gap-8 white-first justify-center">
                <p className="text-black text-[14px] md:text-[24px] max-w-[292px]  md:leading-[29.05px] text-center md:md:tracking-[-2px] text-wrap">
                    {dictionary[language].overlaySection.firstTitle}
                </p>
                <h3 className="md:text-[40px] text-[20px] leading-6 md:leading-[48.41px] text-black max-w-[526px] text-center md:md:tracking-[-3px]">
                    {dictionary[language].overlaySection.firstDesc}
                </h3>
                <Button href="https://trafficradar.affise.com/v2/sign/up">
                    {dictionary[language].button}
                </Button>
            </div>
            <div className="hidden flex-col opacity-0 items-center white-second w-4/5 md:w-full gap-8 justify-center">
                <p className="text-white text-[14px] md:text-[24px] max-w-[292px] md:leading-[29.05px] text-center md:tracking-[-2px] text-wrap">
                    {dictionary[language].overlaySection.secondTitle}
                </p>
                <h3 className="md:text-[40px] text-[20px] md:leading-[48.41px] text-white max-w-[774px] text-center md:tracking-[-3px]">
                    {dictionary[language].overlaySection.secondDesc}
                </h3>
                <Button href="https://trafficradar.affise.com/v2/sign/up">
                    {dictionary[language].button}
                </Button>
            </div>
            <div className="hidden flex-col opacity-0  md:w-full items-center white-third w-4/5 gap-8 justify-center">
                <p className="text-black text-[14px] md:text-[24px] max-w-[292px] md:leading-[29.05px] text-center md:tracking-[-2px] text-wrap">
                    {dictionary[language].overlaySection.thirdTitle}
                </p>
                <h3 className="md:text-[40px] text-[20px] md:leading-[48.41px] text-black max-w-[591px] text-center md:tracking-[-3px]">
                    {dictionary[language].overlaySection.thirdDesc}
                </h3>
                <Button href="https://trafficradar.affise.com/v2/sign/up">
                    {dictionary[language].button}
                </Button>
            </div>
            <div className="hidden flex-col opacity-0 items-center  w-4/5 md:w-full white-fourth gap-8 justify-center">
                <p className="text-white  text-[14px] md:text-[24px] max-w-[292px] md:leading-[29.05px] text-center md:tracking-[-2px] text-wrap">
                    {dictionary[language].overlaySection.fourthTitle}
                </p>
                <h3 className="md:text-[40px] text-[20px] md:leading-[48.41px] text-white max-w-[526px] text-center md:tracking-[-3px]">
                    {dictionary[language].overlaySection.fourthDesc}
                </h3>
                <Button href="https://trafficradar.affise.com/v2/sign/up">
                    {dictionary[language].button}
                </Button>
            </div>
            <div className="hidden flex-col white-five opacity-0 w-4/5  md:w-full items-center gap-8 justify-center pb-16 md:pb-0">
                <h3 className="md:leading-[48.41px] md:text-[40px] text-[20px] text-black max-w-[526px] text-center md:tracking-[-3px]">
                    {dictionary[language].overlaySection.fifthTitle}
                </h3>
                <Button href="https://trafficradar.affise.com/v2/sign/up">
                    {dictionary[language].button}
                </Button>
            </div>
        </section>
    );
};

export default WhitePage;
