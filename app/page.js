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
import PreloaderCounter from "./components/layouts/pages/PreloaderCounter";



export default function Home() {
  const appRef = useRef(null)
  useGSAP(() => {
    gsap.ticker.fps(20)
    gsap.registerPlugin(ScrollTrigger)
    const globalTimeline = gsap.timeline({
      ease: 'power2.inOut',
    })



    const preloader = gsap.timeline({ once: true })
    preloader.set('.body', {overflow: 'hidden'})
    preloader.set('.home', { opacity: 0 })
    preloader.set('.header', { opacity: 0 })
    preloader.to(['.circle5', '.circle4', '.circle3', '.circle2', '.circle1'], {
      filter: 'blur(10px)',
      duration: 0.5,
    })
    .to(['.circle5', '.circle4', '.circle3', '.circle2', '.circle1'], {
      filter: 'blur(0px)',
      duration: 0.5,
    })
    .to(['.circle5', '.circle4', '.circle3', '.circle2', '.circle1'], {
      filter: 'blur(10px)',
      duration: 0.5,
    })
    .to(['.circle5', '.circle4', '.circle3', '.circle2', '.circle1'], {
      filter: 'blur(0px)',
      duration: 0.5,
    })
    .to(['.circle5', '.circle4', '.circle3', '.circle2', '.circle1'], {
      filter: 'blur(10px)',
      duration: 0.5,
    })
    .to(['.circle5', '.circle4', '.circle3', '.circle2', '.circle1'], {
      filter: 'blur(0px)',
      duration: 0.5,
    })
    .to(['.circle5', '.circle4', '.circle3', '.circle2', '.circle1'], {
      filter: 'blur(10px)',
      duration: 0.5,
    })
    .to(['.circle5', '.circle4', '.circle3', '.circle2', '.circle1'], {
      filter: 'blur(0px)',
      duration: 0.5,
    })
      .to(['.circle5', '.circle4', '.circle3', '.circle2', '.circle1'], {
      filter: 'blur(10px)',
      duration: 0.5,
    })
    .to(['.circle5', '.circle4', '.circle3', '.circle2', '.circle1'], {
      filter: 'blur(0px)',
      duration: 0.5,
    })
      .to(['.circle5', '.circle4', '.circle3', '.circle2', '.circle1'], {
      filter: 'blur(10px)',
      duration: 0.5,
    })
    .to(['.circle5', '.circle4', '.circle3', '.circle2', '.circle1'], {
      filter: 'blur(0px)',
      duration: 0.5,
    })
      .to('.preloader-count', {
        opacity: 0,
        duration: 1
      }, "<")
      .to('.header', {
        opacity: 1,
        display: 'flex',
        duration: 1
      }, "<")
        .to('.home', {
        display: 'flex',
        duration: 1
    })
      .to('.body', { overflow: 'visible' }, "<")
    
   

    const firstSection = gsap.timeline()
    firstSection
      .set('.home', {
        opacity: 1,
        duration: 1
    })
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
    if (window.matchMedia('(min-width: 768px)').matches) {
      benefitsSection
               .to('.benefits-section', { height: '100dvh' })
          .to('.ellipse', { opacity: 1, duration: 1.5 }, "+=0.5")
          .to('.radar', { scale: 1, translateY: '-35%' }, "+=0.1")
          .to('.benef-text', { opacity: 1, duration: 2 }, "+=1")
          .to('.card-1', { translateX: '6%', duration: 3 })
          .to('.card-2', { translateX: '9.5%', duration: 3 })
          .to('.first-icon', { translateX: '-150%', duration: 1.5 })
          .to('.card-3', { translateX: '13%', duration: 3 })
          .to('.second-icon', { translateX: '-200%', duration: 1.5 })
          .to('.card-4', { translateX: '16.5%', duration: 3 })
          .to('.third-icon', { translateX: '-200%', translateY: '-10%', duration: 1.5 })
          .to('.card-5', { translateX: '20%', duration: 3 })
          .to('.fourth-icon', { translateX: '-200%', duration: 1.5 })
          .to('.card-6', { translateX: '23.5%', duration: 3 })
          .to('.fifth-icon', { translateX: '-200%', duration: 1.5 })
          .to('.card-7', { translateX: '55%', duration: 3 })
          .to('.sixth-icon', { translateX: '-150%', duration: 1.5 })
          .to('.card-7', { translateX: '-150%', duration: 10 }, "+=1")
          .to('.main', { backgroundColor: '#E8E8E8' }, '<+5')
          .to('.benefits-section', { display: 'none' }, '<+0.1');
    }
      else {
       benefitsSection
        .to('.benefits-section', {
          height: '100dvh'
        })
        .to('.ellipse', {
          opacity: 1,
          duration: 1.5,
        }, "+=0.5")
        .to('.radar', { scale: 1.5, translateY: '-40%' }, "+=0.1")
        .to('.benef-text', {
          opacity: 1,
          duration: 2
        }, "+=1")
        .to('.card-1', {
          translateY: '1%',
          duration: 3,
        }).to('.card-2', {
          translateY: '8.7%',
          duration: 3,
        })
        .to('.first-icon-mob', {
          translateY: '-100%',
          duration: 1.5,
        },)
        .to('.card-3', {
          translateY: '17.5%',
          duration: 3,
        })
        .to('.icon-second-mob', {
          translateY: '-100%',
          duration: 1.5,
        }).to('.card-4', {
          translateY: '28.5%',
          duration: 3,
        })
        .to('.icon-third-mob', {
          translateY: '-100%',
          duration: 1.5,
        })
        .to('.card-5', {
          translateY: '42%',
          duration: 3,
        })
        .to('.icon-fourth-mob', {
          translateY: '-100%',
          duration: 1.5,
        })
        .to('.card-6', {
          translateY: '59.5%',
          duration: 3,
        })
        .to('.icon-fifth-mob', {
          translateY: '-100%',
          duration: 1.5,
        })
        .to('.card-7', {
          translateY: '14.2%',
          duration: 3,
        })
        .to('.icon-sixth-mob', {
          translateY: '-120%',
          duration: 1.5,
        })
        .to('.card-7', {
          translateY: '-80%',
          duration: 10
        }, "+=1")
        .to('.main', {
          backgroundColor: '#E8E8E8'
        }, '<+5')
        .to('.benefits-section', {
          display: 'none',
        }, '<+0.1')
    }

    
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
        .to('.white-second', {
          display: 'none',
        })
        .to('.white-third', {
          display: 'flex',
          opacity: 1,
          duration: 3,
        }, '+=1')
        .to('.overlay', {
          background: '#E8E8E8'
        }, "<=+2")
        .to('.main', {
          background: '#E8E8E8'
        })
        .to('.overlay', {
          clipPath: 'circle(0%)',
        })
        .to('.overlay', {
          background: "black"
        })
        .to('.overlay', {
          clipPath: 'circle(100%)',
          duration: 8
        }, '+=2')
        .to('.white-third', {
          opacity: 0,
          duration: .2,
        }, '<')
        .to('.white-third', {
          display: 'none',
        })
        .to('.white-fourth', {
          display: 'flex',
          opacity: 1,
          duration: 3,
        })
        .to('.main', {
          background: 'black'
        })
        .to('.overlay', {
          clipPath: 'circle(0%)',
        }, '+=2')
        .to('.overlay', {
          background: '#E8E8E8'
        })
        .to('.white-fourth', {
          opacity: 0,
          duration: .2,
        }, '<')
        .to('.white-fourth', {
          display: 'none',
        })
        .to('.overlay', {
          clipPath: 'circle(100%)',
          duration: 8
        }, '<')
        .to('.header', {
          opacity: 0,
          duration: 0.5
        }, '<')
        .to('.header', {
          mixBlendMode: 'unset',
        })
        .to('.header', {
          justifyContent: 'center',
        }, "<+0.5")
        .to('.header-nav', {
          display: 'none',
        }, "<")
        .to('.menu-button', {
          display: 'none',
        }, "<")
        .to('.mob-button', {
          display: 'none'
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
        .to('.white-five', {
          display: 'flex',
          opacity: 1,
          duration: 1,
        }, "<")

     
    
      globalTimeline.add(firstSection).add(textSection).add(benefitsSection).add(whiteSection)

      ScrollTrigger.create({
        trigger: appRef.current,
        animation: globalTimeline,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      })
    }, [appRef])

  return (
    <div ref={appRef} className="h-[8500px] w-full">
      <div className="fixed w-full">
        <PreloaderCounter/>
        <Preloader />
        <HomePage/>
        <TextPage/>
        <BenefitsPage /> 
        <WhitePage />
    </div>
    </div>
  );
}
