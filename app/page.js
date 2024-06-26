'use client'

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import Preloader from "./components/layouts/preloader/Preloader";
import { ScrollTrigger } from "gsap/all";
import HomePage from "./components/layouts/pages/HomePage";
import TextPage from "./components/layouts/pages/TextPage";
import BenefitsPage from "./components/layouts/pages/BenefitsPage";



export default function Home() {
  const appRef = useRef(null)
  useGSAP(() => {
    gsap.ticker.fps(30)
    gsap.registerPlugin(ScrollTrigger)

    const firstSection = gsap.timeline()
    firstSection
      .to('.radar', { scale: 6, ease: 'power2.inOut' })
      .to('.home', { opacity: 0, duration: 0.3 }, '<=')
      .to('.home', { display: 'none' }, '<=')
      .to('.radar', { opacity: 0, duration: 0.5 }, '<' )
    
    ScrollTrigger.create({
      trigger: appRef.current,
      animation: firstSection,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      pin: true,
      // markers: true
    })



    const textSection = gsap.timeline()
    textSection.to('.char', {
      y: 0,
      stagger: 0.2,
      duration: 0.5,
    }, '<+2')

    ScrollTrigger.create({
      trigger: '.text-page',
      animation: textSection,
      start: 'top top',
      end: '+=100% top',
      scrub: true,
      pin: true,

      markers: true,
            duration: 5

    })    
  }, [appRef])
  return (
    <div ref={appRef}>
       <Preloader />
       <HomePage/>
        <TextPage/>
        {/* <BenefitsPage/> */} 
    </div>
  );
}
