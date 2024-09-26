'use client';
import React from 'react';
import AnimatedLogo from '../../elements/AnimatedLogo';
import Button from '../../elements/Button';
import MobileMenuButton from '../../elements/MobileMenuButton';
import { useState } from 'react';
import MobileMenu from '../../elements/MobileMenu';
import { FaTelegramPlane } from 'react-icons/fa';

import { IoLogoInstagram } from 'react-icons/io5';
import Link from 'next/link';
import { useLanguage } from '@/app/context/translate';
import { dictionary } from '@/app/context/dictionary';
const Header = () => {
    const { language, changeLanguage } = useLanguage();

    const links = [
        {
            href: 'https://trafficradar.partner.alanbase.com/login',
            text: dictionary[language].header.buttons[0],
        },
        {
            href: 'https://trafficradar.affise.com/v2/sign/up',
            text: dictionary[language].header.buttons[1],
        },
    ];

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <header className="flex w-full fixed z-50 md:mix-blend-difference gap-2 md:gap-0 flex-row header justify-between items-center md:pl-[42px] px-7 bg-transparent md:pr-[80px] pt-[2.5rem] md:pt-[65px]">
            <AnimatedLogo />
            <nav className="hidden md:flex flex-row header-nav items-center gap-8">
                {links.map((link, index) => (
                    <Button key={index} href={link.href}>
                        {dictionary[language].header.buttons[index]}
                    </Button>
                ))}
                <div className="flex flex-row gap-6 items-center">
                    <Link href="https://t.me/trafficradar" target="_blank">
                        <FaTelegramPlane className="text-white mix-blend-difference text-[30px]" />
                    </Link>
                    <Link
                        href="https://www.instagram.com/trafficradar.partners/"
                        target="_blank"
                    >
                        <IoLogoInstagram className="text-white mix-blend-difference text-[30px]" />
                    </Link>
                </div>
            </nav>
            <MobileMenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
            <MobileMenu links={links} isOpen={isOpen} />
        </header>
    );
};

export default Header;
