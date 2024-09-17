import React from 'react';
import Button from './Button';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';
import { BiLogoTelegram } from 'react-icons/bi';

import LanguageMenu from './LanguageMenu';

const MobileMenu = ({ isOpen, links }) => {
    return (
        <div className="absolute inset-0 transition-all duration-150 -z-10">
            <div
                class={`sliced-corners-div flex pt-[6.5rem]  flex-col-reverse gap-2 pb-8 justify-center transition-all duration-300 ${
                    isOpen ? '-translate-y-0' : '-translate-y-[193px]'
                } `}
            >
                <nav className="flex flex-row header-nav items-center gap-10 ">
                    <ul className="flex flex-row gap-6 items-center justify-center w-full">
                        {links.map((link, index) => (
                            <Button
                                key={index}
                                mixBlend="normal"
                                href={link.href}
                            >
                                {link.text}
                            </Button>
                        ))}
                    </ul>
                </nav>
                <div className="flex flex-row gap-3 justify-center items-end w-full h-full">
                    <Link href="https://t.me/trafficradar" target="_blank">
                        <BiLogoTelegram className="text-white mix-blend-difference text-[45px]" />
                    </Link>
                    <Link
                        href="https://www.instagram.com/trafficradar.partners"
                        target="_blank"
                    >
                        <FaInstagram className="text-white mix-blend-difference text-[45px]" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
