import React from 'react';
import Link from 'next/link';

const links = ['Про нас', 'Переваги', 'Бонуси'];

const Footer = () => {
    return (
        <footer className="hidden opacity-0 footer w-full fixed z-10 flex-col gap-8 justify-between items-center md:pl-[42px] bg-transparent bottom-0">
            <h1 className="text-radar md:leading-[250px] text-[130px]  leading-[90px] text-[#444444] w-full text-center md:tracking-[-20px]">
                Traffic Radar
            </h1>
            <nav className="flex flex-row pb-6 md:pb-0 md:items-center gap-[180px]"></nav>
        </footer>
    );
};

export default Footer;
