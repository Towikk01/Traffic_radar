"use client" 
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, {useRef} from 'react'



const AnimatedLogo = () => {
  const logoRef = useRef(null)
  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1, onStart: animateDots });
    tl.to('.arrow', {
      duration: 5.3,
      rotation: 360,
      ease: 'none',
      svgOrigin: '40px 40px'
    });
    function animateDots() {
      const dotsTimeline = gsap.timeline({ repeat: -1 });
      const dots = ['.dot-one', '.dot-two', '.dot-three', '.dot-four', '.dot-five',
        '.dot-six', '.dot-seven', '.dot-eight', '.dot-nine', '.dot-ten'];
      dots.forEach((dot, index) => {
        dotsTimeline.fromTo(dot,
          { opacity: 0 },
          { opacity: 1, duration: 0.35},
          index * 0.5)
          .to(dot, { opacity: 0, duration: 0.3 }, `+=${index * 0.01}`);
      });
    }
  });



  return (
 <svg width="80" ref={logoRef} height="80" viewBox="0 0 80 80" className='z-10 w-[40px] h-[40px] md:w-[80px] md:h-[80px]' fill="none" xmlns="http://www.w3.org/2000/svg">
<g style={{ mixBlendMode: "color-dodge" }}> 
<g opacity="0.5">
<path d="M40.0361 9.37781H39.6733V71.7127H40.0361V9.37781Z" fill="url(#paint0_linear_228_258)"/>
<path d="M17.8578 18.4412L17.7295 18.5694L61.8456 62.6467L61.9739 62.5186L17.8578 18.4412Z" fill="url(#paint1_linear_228_258)"/>
<path d="M71.0477 40.4558H8.6582V40.637H71.0477V40.4558Z" fill="url(#paint2_linear_228_258)"/>
<path d="M61.8456 18.4426L17.7295 62.5201L17.8578 62.6482L61.9739 18.5708L61.8456 18.4426Z" fill="url(#paint3_linear_228_258)"/>
<path d="M11.166 28.3079L11.0952 28.4748L68.5412 52.7905L68.612 52.6236L11.166 28.3079Z" fill="url(#paint4_linear_228_258)"/>
<path d="M28.7989 11.3975L28.6294 11.4621L50.8963 69.6917L51.0657 69.627L28.7989 11.3975Z" fill="url(#paint5_linear_228_258)"/>
<path d="M50.8753 11.3859L28.6694 69.6387L28.839 69.7032L51.0448 11.4504L50.8753 11.3859Z" fill="url(#paint6_linear_228_258)"/>
<path d="M68.7475 28.7979L10.8887 52.1186L10.9566 52.2867L68.8154 28.966L68.7475 28.7979Z" fill="url(#paint7_linear_228_258)"/>
</g>
<path d="M39.8493 71.9297C31.4586 71.9297 23.5696 68.6646 17.636 62.7371C11.7025 56.8088 8.43457 48.9266 8.43457 40.5434C8.43457 32.1601 11.7025 24.2779 17.636 18.3495C23.5696 12.4212 31.4586 9.1571 39.8493 9.1571C48.2399 9.1571 56.129 12.4221 62.0625 18.3495C67.9961 24.2779 71.264 32.1601 71.264 40.5434C71.264 48.9266 67.9961 56.8088 62.0625 62.7371C56.129 68.6655 48.2408 71.9297 39.8493 71.9297ZM39.8493 10.0624C23.0272 10.0624 9.34158 23.736 9.34158 40.5424C9.34158 57.3488 23.0272 71.0225 39.8493 71.0225C56.6713 71.0225 70.3561 57.3488 70.3561 40.5424C70.3561 23.736 56.6705 10.0624 39.8493 10.0624Z" fill="url(#paint8_linear_228_258)"/>
<path d="M39.8493 61.2129C34.3239 61.2129 29.1287 59.0625 25.2213 55.1586C21.314 51.2546 19.1626 46.0639 19.1626 40.5434C19.1626 35.0228 21.314 29.832 25.2213 25.9281C29.1287 22.0242 34.3239 19.8738 39.8493 19.8738C45.3748 19.8738 50.57 22.0242 54.4774 25.9281C58.3847 29.832 60.5361 35.0228 60.5361 40.5434C60.5361 46.0639 58.3847 51.2546 54.4774 55.1586C50.57 59.0625 45.3748 61.2129 39.8493 61.2129ZM39.8493 20.3278C28.6924 20.3278 19.6151 29.3971 19.6151 40.5442C19.6151 51.6914 28.6924 60.7607 39.8493 60.7607C51.0063 60.7607 60.0835 51.6914 60.0835 40.5442C60.0835 29.3971 51.0063 20.3278 39.8493 20.3278Z" fill="url(#paint9_linear_228_258)"/>
<path d="M39.8498 43.2101C38.3769 43.2101 37.1787 42.0131 37.1787 40.5414C37.1787 39.0697 38.3769 37.8727 39.8498 37.8727C41.3228 37.8727 42.521 39.0697 42.521 40.5414C42.521 42.0131 41.3228 43.2101 39.8498 43.2101ZM39.8498 39.2329C39.127 39.2329 38.5392 39.8201 38.5392 40.5423C38.5392 41.2645 39.127 41.8518 39.8498 41.8518C40.5727 41.8518 41.1604 41.2645 41.1604 40.5423C41.1604 39.8201 40.5727 39.2329 39.8498 39.2329Z" fill="url(#paint10_linear_228_258)"/>
<path d="M61.379 18.0139L40.8945 38.4805L41.9207 39.5057L62.4051 19.0392L61.379 18.0139Z" fill="url(#paint11_linear_228_258)" className='arrow'/>
<path className='dot-three' d="M59.1114 50.7536C60.2991 50.7536 61.2619 49.7916 61.2619 48.605C61.2619 47.4184 60.2991 46.4564 59.1114 46.4564C57.9237 46.4564 56.9609 47.4184 56.9609 48.605C56.9609 49.7916 57.9237 50.7536 59.1114 50.7536Z" fill="url(#paint12_linear_228_258)"/>
<path className='dot-nine' d="M28.1735 27.1502C29.7899 27.1502 31.1004 25.841 31.1004 24.2259C31.1004 22.6109 29.7899 21.3016 28.1735 21.3016C26.557 21.3016 25.2466 22.6109 25.2466 24.2259C25.2466 25.841 26.557 27.1502 28.1735 27.1502Z" fill="url(#paint13_linear_228_258)"/>
<path className='dot-six' d="M33.8251 50.6732C34.3987 50.6732 34.8636 50.2087 34.8636 49.6356C34.8636 49.0626 34.3987 48.598 33.8251 48.598C33.2516 48.598 32.7866 49.0626 32.7866 49.6356C32.7866 50.2087 33.2516 50.6732 33.8251 50.6732Z" fill="url(#paint14_linear_228_258)"/>
<path className='dot-seven' d="M22.8789 45.0339C23.4524 45.0339 23.9174 44.5694 23.9174 43.9963C23.9174 43.4233 23.4524 42.9587 22.8789 42.9587C22.3053 42.9587 21.8403 43.4233 21.8403 43.9963C21.8403 44.5694 22.3053 45.0339 22.8789 45.0339Z" fill="url(#paint15_linear_228_258)"/>
<path className='dot-five' d="M22.8789 58.0892C23.7089 58.0892 24.3818 57.4169 24.3818 56.5876C24.3818 55.7583 23.7089 55.086 22.8789 55.086C22.0489 55.086 21.376 55.7583 21.376 56.5876C21.376 57.4169 22.0489 58.0892 22.8789 58.0892Z" fill="url(#paint16_linear_228_258)"/>
<path className='dot-two' d="M55.459 39.0439C56.289 39.0439 56.9619 38.3716 56.9619 37.5423C56.9619 36.7129 56.289 36.0407 55.459 36.0407C54.6289 36.0407 53.9561 36.7129 53.9561 37.5423C53.9561 38.3716 54.6289 39.0439 55.459 39.0439Z" fill="url(#paint17_linear_228_258)"/>
<path className='dot-one' d="M62.3109 29.365C63.141 29.365 63.8138 28.6927 63.8138 27.8634C63.8138 27.034 63.141 26.3618 62.3109 26.3618C61.4809 26.3618 60.8081 27.034 60.8081 27.8634C60.8081 28.6927 61.4809 29.365 62.3109 29.365Z" fill="url(#paint18_linear_228_258)"/>
<path className='dot-ten' d="M44.5874 28.9635C45.4174 28.9635 46.0903 28.2912 46.0903 27.462C46.0903 26.6327 45.4174 25.9604 44.5874 25.9604C43.7574 25.9604 43.0845 26.6327 43.0845 27.462C43.0845 28.2912 43.7574 28.9635 44.5874 28.9635Z" fill="url(#paint19_linear_228_258)"/>
<path className='dot-four' d="M45.6255 57.08C46.4555 57.08 47.1284 56.4077 47.1284 55.5784C47.1284 54.7491 46.4555 54.0768 45.6255 54.0768C44.7954 54.0768 44.1226 54.7491 44.1226 55.5784C44.1226 56.4077 44.7954 57.08 45.6255 57.08Z" fill="url(#paint20_linear_228_258)"/>
<path className='dot-eight' d="M15.7343 36.0392C16.5644 36.0392 17.2372 35.3669 17.2372 34.5376C17.2372 33.7084 16.5644 33.0361 15.7343 33.0361C14.9043 33.0361 14.2314 33.7084 14.2314 34.5376C14.2314 35.3669 14.9043 36.0392 15.7343 36.0392Z" fill="url(#paint21_linear_228_258)"/>
<path d="M4.0145 49.7379C3.19095 49.6192 2.38463 49.4397 1.58104 49.2414C1.32345 49.1643 1.0314 49.147 0.835488 48.9622L0.336637 48.4901L0.377453 48.1684C0.394686 48.0315 0.385616 47.8022 0.38743 47.66C0.38743 47.3519 0.38743 46.4584 0.38743 46.1349C0.38743 42.4086 0.38743 37.6628 0.38743 33.9356C0.388336 33.6239 0.38743 32.7186 0.38743 32.4105C0.385616 32.2954 0.393779 32.0244 0.380174 31.9021L0.32666 31.4807C0.431872 31.4119 0.891716 31.0584 1.00056 31.0013C1.13117 30.937 1.4468 30.8826 1.58739 30.84C1.85042 30.773 2.11889 30.7131 2.38554 30.6506C2.92158 30.5319 3.46033 30.4186 4.01541 30.3325C3.48754 30.9832 2.93609 31.5822 2.36196 32.1793L2.07807 32.473C1.98918 32.579 1.87853 32.6452 1.75155 32.6932L2.20868 31.9021C2.18872 32.4676 2.20777 33.3584 2.20142 33.9356C2.20142 38.2428 2.20142 43.3583 2.20142 47.6591V47.9129C2.20142 47.9971 2.20143 48.0823 2.2114 48.1666L1.75246 47.3727C2.01004 47.4498 2.17149 47.6935 2.3674 47.8784C2.94153 48.4747 3.49933 49.0836 4.0145 49.7361V49.7379Z" fill="url(#paint22_linear_228_258)"/>
<path d="M75.7634 30.2609C76.5869 30.3795 77.3928 30.559 78.1965 30.7575C78.4541 30.8344 78.7462 30.8517 78.9421 31.0366L79.4412 31.5086L79.4001 31.8304C79.384 31.9672 79.3921 32.1965 79.3906 32.3387C79.3906 32.6468 79.3906 33.5404 79.3906 33.8639C79.3906 37.5902 79.3906 42.3359 79.3906 46.0631C79.3891 46.3749 79.3906 47.2802 79.3906 47.5883C79.3921 47.7034 79.384 47.9743 79.3979 48.0967L79.4508 48.518C79.3458 48.587 78.8864 48.9404 78.777 48.9975C78.6464 49.0618 78.3308 49.1161 78.1906 49.1588C77.9271 49.2258 77.6592 49.2856 77.3921 49.3481C76.8563 49.4669 76.3176 49.5801 75.7627 49.6662C76.2904 49.0156 76.8416 48.4166 77.4155 47.8194L77.6996 47.5258C77.7884 47.4198 77.8992 47.3536 78.0262 47.3056L77.5689 48.0967C77.5888 47.5312 77.5697 46.6404 77.5763 46.0631C77.5763 41.756 77.5763 36.6405 77.5763 32.3397V32.086C77.5763 32.0016 77.5763 31.9165 77.5667 31.8322L78.0254 32.626C77.7678 32.549 77.6064 32.3052 77.4104 32.1204C76.8365 31.5241 76.2787 30.9151 75.7634 30.2626V30.2609Z" fill="url(#paint23_linear_228_258)"/>
<path d="M49.6343 75.8407C49.5155 76.6635 49.3359 77.4693 49.1373 78.2723C49.0601 78.5299 49.043 78.8213 48.8579 79.0172L48.3853 79.5156L48.0634 79.4745C47.9264 79.4583 47.697 79.4664 47.5545 79.4649C47.2462 79.4649 46.3519 79.4649 46.0281 79.4649C42.2985 79.4649 37.5486 79.4649 33.8181 79.4649C33.5061 79.4642 32.6 79.4649 32.2916 79.4649C32.1765 79.4664 31.9053 79.4583 31.7828 79.4723L31.3611 79.5258C31.2921 79.4201 30.9384 78.9607 30.8813 78.8521C30.8168 78.7214 30.7624 78.4066 30.7198 78.2657C30.6526 78.0029 30.5928 77.735 30.5302 77.4686C30.4114 76.9328 30.2981 76.3948 30.2119 75.84C30.8631 76.3677 31.4626 76.9181 32.0604 77.4921L32.3542 77.7754C32.4604 77.8642 32.5266 77.975 32.5746 78.102L31.7828 77.6455C32.3488 77.6653 33.2403 77.6462 33.8181 77.6521C38.1291 77.6521 43.2491 77.6521 47.5536 77.6521H47.8076C47.892 77.6521 47.9772 77.6521 48.0616 77.6425L47.267 78.1013C47.3442 77.8436 47.5881 77.6822 47.7732 77.4862C48.3699 76.913 48.9795 76.3559 49.6325 75.8407H49.6343Z" fill="url(#paint24_linear_228_258)"/>
<path d="M30.1372 4.15764C30.256 3.33481 30.4356 2.52919 30.6342 1.7263C30.7114 1.46894 30.7285 1.17714 30.9136 0.981403L31.3862 0.482991L31.7081 0.52377C31.8451 0.540082 32.0745 0.531925 32.2169 0.533738C32.5253 0.533738 33.4196 0.533738 33.7434 0.533738C37.473 0.533738 42.2229 0.533738 45.9534 0.533738C46.2654 0.534644 47.1715 0.533738 47.4799 0.533738C47.595 0.531925 47.8662 0.540082 47.9887 0.526488L48.4105 0.473022C48.4794 0.578142 48.8331 1.03759 48.8902 1.14633C48.9547 1.27682 49.0091 1.59218 49.0517 1.73264C49.1188 1.99544 49.1787 2.26368 49.2413 2.5301C49.3601 3.06566 49.4734 3.60395 49.5596 4.15854C48.9084 3.63114 48.3089 3.08016 47.7112 2.50653L47.4173 2.22289C47.3112 2.13409 47.2449 2.02353 47.1969 1.89666L47.9887 2.35339C47.4227 2.33345 46.5312 2.35249 45.9534 2.34614C41.6425 2.34614 36.5225 2.34614 32.2179 2.34614H31.9639C31.8795 2.34614 31.7943 2.34614 31.7099 2.35611L32.5045 1.89757C32.4274 2.15493 32.1834 2.31624 31.9983 2.51197C31.4016 3.0856 30.792 3.64292 30.139 4.15764H30.1372Z" fill="url(#paint25_linear_228_258)"/>
</g>
      <defs>
        
<linearGradient id="paint0_linear_228_258" x1="10.8753" y1="4.35205" x2="67.8842" y2="75.6757" gradientUnits="userSpaceOnUse">
<stop stopColor="#3FC245"/>
<stop offset="1" stopColor="#3CEE38"/>
</linearGradient>
<linearGradient id="paint1_linear_228_258" x1="10.872" y1="4.35126" x2="67.8811" y2="75.6756" gradientUnits="userSpaceOnUse">
<stop stopColor="#3FC245"/>
<stop offset="1" stopColor="#3CEE38"/>
</linearGradient>
<linearGradient id="paint2_linear_228_258" x1="10.874" y1="4.35386" x2="67.8826" y2="75.6779" gradientUnits="userSpaceOnUse">
<stop stopColor="#3FC245"/>
<stop offset="1" stopColor="#3CEE38"/>
</linearGradient>
<linearGradient id="paint3_linear_228_258" x1="10.8727" y1="4.35272" x2="67.8816" y2="75.677" gradientUnits="userSpaceOnUse">
<stop stopColor="#3FC245"/>
<stop offset="1" stopColor="#3CEE38"/>
</linearGradient>
<linearGradient id="paint4_linear_228_258" x1="10.8775" y1="4.35361" x2="67.8866" y2="75.6778" gradientUnits="userSpaceOnUse">
<stop stopColor="#3FC245"/>
<stop offset="1" stopColor="#3CEE38"/>
</linearGradient>
<linearGradient id="paint5_linear_228_258" x1="10.8701" y1="4.35044" x2="67.8792" y2="75.6748" gradientUnits="userSpaceOnUse">
<stop stopColor="#3FC245"/>
<stop offset="1" stopColor="#3CEE38"/>
</linearGradient>
<linearGradient id="paint6_linear_228_258" x1="10.8773" y1="4.3521" x2="67.8863" y2="75.6763" gradientUnits="userSpaceOnUse">
<stop stopColor="#3FC245"/>
<stop offset="1" stopColor="#3CEE38"/>
</linearGradient>
<linearGradient id="paint7_linear_228_258" x1="10.8705" y1="4.35116" x2="67.8795" y2="75.6756" gradientUnits="userSpaceOnUse">
<stop stopColor="#3FC245"/>
<stop offset="1" stopColor="#3CEE38"/>
</linearGradient>
<linearGradient id="paint8_linear_228_258" x1="10.8699" y1="4.35059" x2="67.8788" y2="75.6748" gradientUnits="userSpaceOnUse">
<stop stopColor="#3FC245"/>
<stop offset="1" stopColor="#3CEE38"/>
</linearGradient>
<linearGradient id="paint9_linear_228_258" x1="10.8699" y1="4.35148" x2="67.8789" y2="75.6755" gradientUnits="userSpaceOnUse">
<stop stopColor="#3FC245"/>
<stop offset="1" stopColor="#3CEE38"/>
</linearGradient>
<linearGradient id="paint10_linear_228_258" x1="10.8704" y1="4.34956" x2="67.8794" y2="75.6741" gradientUnits="userSpaceOnUse">
<stop stopColor="#3FC245"/>
<stop offset="1" stopColor="#3CEE38"/>
</linearGradient>
<linearGradient id="paint11_linear_228_258" x1="23.8233" y1="-5.99843" x2="80.8323" y2="65.3249" gradientUnits="userSpaceOnUse">
<stop stopColor="#3FC245"/>
<stop offset="1" stopColor="#3CEE38"/>
</linearGradient>
<linearGradient id="paint12_linear_228_258" x1="18.6775" y1="-1.89303" x2="75.6865" y2="69.4303" gradientUnits="userSpaceOnUse">
<stop stopColor="#3FC245"/>
<stop offset="1" stopColor="#3CEE38"/>
</linearGradient>
<linearGradient id="paint13_linear_228_258" x1="11.7151" y1="3.67146" x2="68.7242" y2="74.9945" gradientUnits="userSpaceOnUse">
<stop stopColor="#3FC245"/>
<stop offset="1" stopColor="#3CEE38"/>
</linearGradient>
<linearGradient id="paint14_linear_228_258" x1="2.75507" y1="10.832" x2="59.7642" y2="82.1555" gradientUnits="userSpaceOnUse">
<stop stopColor="#3FC245"/>
<stop offset="1" stopColor="#3CEE38"/>
</linearGradient>
<linearGradient id="paint15_linear_228_258" x1="-1.16561" y1="13.9675" x2="55.8435" y2="85.291" gradientUnits="userSpaceOnUse">
<stop stopColor="#3FC245"/>
<stop offset="1" stopColor="#3CEE38"/>
</linearGradient>
<linearGradient id="paint16_linear_228_258" x1="-7.31322" y1="18.8806" x2="49.6956" y2="90.2041" gradientUnits="userSpaceOnUse">
<stop stopColor="#3FC245"/>
<stop offset="1" stopColor="#3CEE38"/>
</linearGradient>
<linearGradient id="paint17_linear_228_258" x1="21.8539" y1="-4.42756" x2="78.8628" y2="66.8957" gradientUnits="userSpaceOnUse">
<stop stopColor="#3FC245"/>
<stop offset="1" stopColor="#3CEE38"/>
</linearGradient>
<linearGradient id="paint18_linear_228_258" x1="30.7567" y1="-11.5455" x2="87.7655" y2="59.7777" gradientUnits="userSpaceOnUse">
<stop stopColor="#3FC245"/>
<stop offset="1" stopColor="#3CEE38"/>
</linearGradient>
<linearGradient id="paint19_linear_228_258" x1="20.1447" y1="-3.06523" x2="77.1533" y2="68.2581" gradientUnits="userSpaceOnUse">
<stop stopColor="#3FC245"/>
<stop offset="1" stopColor="#3CEE38"/>
</linearGradient>
<linearGradient id="paint20_linear_228_258" x1="7.04905" y1="7.40026" x2="64.058" y2="78.7237" gradientUnits="userSpaceOnUse">
<stop stopColor="#3FC245"/>
<stop offset="1" stopColor="#3CEE38"/>
</linearGradient>
<linearGradient id="paint21_linear_228_258" x1="-0.90449" y1="13.7585" x2="56.1045" y2="85.0818" gradientUnits="userSpaceOnUse">
<stop stopColor="#3FC245"/>
<stop offset="1" stopColor="#3CEE38"/>
</linearGradient>
<linearGradient id="paint22_linear_228_258" x1="-11.5495" y1="22.2701" x2="45.4585" y2="93.5941" gradientUnits="userSpaceOnUse">
<stop stopColor="#3FC245"/>
<stop offset="1" stopColor="#3CEE38"/>
</linearGradient>
<linearGradient id="paint23_linear_228_258" x1="33.8691" y1="-14.0315" x2="90.8783" y2="57.2927" gradientUnits="userSpaceOnUse">
<stop stopColor="#3FC245"/>
<stop offset="1" stopColor="#3CEE38"/>
</linearGradient>
<linearGradient id="paint24_linear_228_258" x1="-6.86793" y1="18.5283" x2="50.1401" y2="89.8517" gradientUnits="userSpaceOnUse">
<stop stopColor="#3FC245"/>
<stop offset="1" stopColor="#3CEE38"/>
</linearGradient>
<linearGradient id="paint25_linear_228_258" x1="29.1812" y1="-10.2891" x2="86.1904" y2="61.0342" gradientUnits="userSpaceOnUse">
<stop stopColor="#3FC245"/>
<stop offset="1" stopColor="#3CEE38"/>
</linearGradient>
</defs>
</svg>
  )
}

export default AnimatedLogo

