'use client'
import React, { useState, useEffect } from 'react';

const PreloaderCounter = ({ onComplete }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => {
        if (prevCount < 100) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          if (onComplete) {
            onComplete();
          }
          return prevCount;
        }
      });
    }, 50); 

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className='flex md:text-[96px] preloader-count absolute z-10 text-[#444444] text-[40px] w-full h-screen justify-center items-center'>
      {count}%
    </div>
  );
};

export default PreloaderCounter;
