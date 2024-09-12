'use client';
import React from 'react';
import '../../../app/globals.css';

const MobileMenuButton = ({ isOpen, toggleMenu }) => {
    return (
        <button
            onClick={toggleMenu}
            className="flex menu-button md:hidden border-custom relative flex-col justify-around items-center w-8 h-8"
        >
            <svg
                width="28"
                height="24"
                className="absolute"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    x="0.25"
                    y="0.25"
                    width="27.5"
                    height="23.5"
                    stroke="url(#paint0_linear_349_4514)"
                    stroke-width="0.5"
                />
                <rect
                    x="0.25"
                    y="0.25"
                    width="27.5"
                    height="23.5"
                    stroke="url(#paint1_linear_349_4514)"
                    stroke-width="0.5"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear_349_4514"
                        x1="0.875"
                        y1="0.75"
                        x2="23.8515"
                        y2="27.5559"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="white" />
                        <stop
                            offset="0.2"
                            stop-color="#070000"
                            stop-opacity="0"
                        />
                        <stop
                            offset="0.8"
                            stop-color="#070000"
                            stop-opacity="0"
                        />
                        <stop offset="1" stop-color="white" />
                    </linearGradient>
                    <linearGradient
                        id="paint1_linear_349_4514"
                        x1="27.125"
                        y1="2.79397e-09"
                        x2="4.25952"
                        y2="27.5369"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="white" />
                        <stop
                            offset="0.2"
                            stop-color="#070000"
                            stop-opacity="0"
                        />
                        <stop
                            offset="0.8"
                            stop-color="#070000"
                            stop-opacity="0"
                        />
                        <stop offset="1" stop-color="white" />
                    </linearGradient>
                </defs>
            </svg>
            <div
                className={`w-3 h-[1.5px] transition-all duration-300 mt-2 bg-white ${
                    isOpen ? 'rotate-45  translate-y-[0.325rem]' : ''
                }`}
            ></div>
            <div
                className={`w-3 h-[1.5px] bg-white ${
                    isOpen ? 'opacity-0' : ''
                }`}
            ></div>
            <div
                className={`w-3 h-[1.5px] transition-all duration-300 mb-2  bg-white ${
                    isOpen ? '-rotate-45 -translate-y-[0.325rem]' : ''
                }`}
            ></div>
        </button>
    );
};

export default MobileMenuButton;
