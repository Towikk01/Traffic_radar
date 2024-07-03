'use client'

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import Preloader from "./components/layouts/preloader/Preloader";
import { ScrollTrigger } from "gsap/all";
import HomePage from "./components/layouts/pages/HomePage";
import TextPage from "./components/layouts/pages/TextPage";
import BenefitsPage from "./components/layouts/pages/BenefitsPage";
import WhitePage from "./components/layouts/pages/WhitePage";
import Overlay from "./components/layouts/Overlay";



export default function Home() {
  const appRef = useRef(null)
  useGSAP(() => {
    gsap.ticker.fps(30)
    gsap.registerPlugin(ScrollTrigger)
    const globalTimeline = gsap.timeline({
      ease: 'power2.inOut',
    })

    const firstSection = gsap.timeline()
    firstSection
      .to('.radar', { scale: 6, ease: 'power2.inOut', duration: 10 })
      .to('.home', { opacity: 0, duration: 2 }, '<=')
      .to('.home', { height: 0 }, '+=0.2', '<')
      .to('.radar', { opacity: 0, duration: 1.5 }, '<')
  
    
    const textSection = gsap.timeline()
    textSection
      .to('.char', {
      y: 0,
      stagger: 0.1,
      duration: 3,
      }, '+=0.5')
      .to('.char', {
        y: 115,
        stagger: 0.1,
        duration: 0.5,
      }, '+=1.5')
      .to('.text-page', {
        height: 0, 
      }, "+=0.5")
     
    
    const benefitsSection = gsap.timeline()
    benefitsSection
      .to('.benefits-section', {
        height: '100dvh'
      })
      .to('.ellipse', {
      opacity: 1,
      duration: 1.5,
    }, "+=0.5")
       .to('.radar', {scale: 1, translateY: '-35%'}, "+=0.1")
      .to('.benef-text', {
        opacity: 1,
        duration: 2
      }, "+=1")
      .to('.card-1', {
        translateX: '6%',
        duration: 3,
      }).to('.card-2', {
        translateX: '9.5%',
        duration: 3,
      })
      .to('.first-icon', {
        translateX: '-150%',
        duration: 1.5,
      }, )
      .to('.card-3', {
        translateX: '13%',
        duration: 3,
      })
      .to('.second-icon', {
        translateX: '-200%',
        duration: 1.5,
      }).to('.card-4', {
        translateX: '16.5%',
        duration: 3,
      })
      .to('.third-icon', {
        translateX: '-200%',
        translateY: '-10%',
        duration: 1.5,
      })
      .to('.card-5', {
        translateX: '20%',
        duration: 3,
      })
      .to('.fourth-icon', {
        translateX: '-200%',
        duration: 1.5,
      })
      .to('.card-6', {
        translateX: '23.5%',
        duration: 3,
      })
     .to('.fifth-icon', {
        translateX: '-200%',
        duration: 1.5,
     })
      .to('.card-7', {
          translateX: '55%',
        duration: 3,
      })
      .to('.sixth-icon', {
        translateX: '-150%',
        duration: 1.5,
      })
      .to('.card-7', {
        translateX: '-150%',
        duration: 10
      }, "+=1")
      .to('.main', {
        backgroundColor: '#E8E8E8'
      }, '<+5')
      .to('.benefits-section', {
                  display: 'none',
      }, '<+0.1')
    
    
        const whiteSection = gsap.timeline()
    whiteSection
      .to('.white-page', {
        display: 'flex'
      })
      .to('.white-first', {
        display: 'flex',
        opacity: 1,
        duration: 2,
      }, "<=")
      .to('.radar', {
        opacity: 1,
        duration: 6,
        background: 'none',
      })
      .to('.overlay', {
        duration: 8,
        clipPath: 'circle(100%)'
      }, '+=1')
      .to('.white-first', {
        opacity: 0,
        duration: .2,
      }, '<')
      .to('.main', {
        background: 'black'
      })
      .to('.overlay', {
        opacity: 0
      })
      .to('.white-first', {
        display: 'none',
      })
      .to('.overlay', {
        clipPath: 'circle(0%)',
        opacity: 1
      }, '<')
      .to('.white-second', {
        display: 'flex',
        opacity: 1,
        duration: 3,
      })
      .to('.overlay', {
        background: '#E8E8E8'
      }, "<=+2")
      .to('.overlay', {
        clipPath: 'circle(100%)',
        duration: 8
      }, '+=2')
       .to('.white-second', {
        opacity: 0,
        duration: .2,
      }, '<')
       .to('.header', {
      opacity: 0,
      duration: 0.5
      }, '<')
      .to('.header', {
        justifyContent: 'center',
      }, "<+0.5")
      .to('.header-nav', {
        display: 'none',
      }, "<")
      .to('.header', {
        opacity: 1,
        duration: 1
      }, "+=0.5")
     
      .to('.white-second', {
        display: 'none',
      }, "<")
      .to('.footer', {
        opacity: 1,
        duration: 1,
        display: 'flex',
      }, "+=1")
      .to('.white-third', {
        display: 'flex',
        opacity: 1,
        duration: 1,
      }, "<")
     
    //  .to('.header', {
    //    opacity: 0,
    //    duration: 0.5
    //   }, "+=")
    //   .to('.header', {
    //     justifyContent: 'center',
    //   }, "<")
    //   .to('.header-nav', {
    //     display: 'none',
    //   }, "<")
    //   .to('.header', {
    //     opacity: 1,
    //     duration: 1
    //   }, "<")
    
    globalTimeline.add(firstSection).add(textSection).add(benefitsSection).add(whiteSection)

    ScrollTrigger.create({
      trigger: appRef.current,
      animation: globalTimeline,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
    })  }, [appRef])
  return (
    <div ref={appRef} className="h-[8500px] w-full">
    <div className="fixed w-full">
       <Preloader />
       <HomePage/>
        <TextPage/>
        <BenefitsPage /> 
        <WhitePage />
    </div>
    </div>
  );
}
