import React from 'react'

const FifthCard = () => {
  return (
      <div style={{
           clipPath: 'polygon(8% 0%, 100% 0%, 100% 100%, 8% 100%, 0 95%,  0% 5%)',
         }} className='flex items-center gap-5 relative justify-start px-20 bg-gradient-to-b max-w-[717px] h-screen  from-[#d2d2d2] via-[#e8e8e8] to-[#d2d2d2]'>

          
          <svg width="695" height="459"  className='absolute bottom-5 right-0' viewBox="0 0 695 459" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M695 207H599.5L348.5 458H182.5H60L1 399V298.5V207M1 207V175V51V34.5L16.625 18H28.25H55.5H110L134.5 42.5H430L454.5 18H527.5M1 207H28L60 175H134.5L194 115.5H430L527.5 18M527.5 18H539.5H616L633 1" stroke="url(#paint0_linear_223_4221)"/>
<path d="M160.038 37H424L403.962 46H140L160.038 37Z" fill="#D91616"/>
<path d="M320 115.857L338 103L338 128L320 115.857Z" fill="#828282"/>
<path d="M340 115.857L358 103L358 128L340 115.857Z" fill="#828282"/>
<path d="M360 115.857L378 103L378 128L360 115.857Z" fill="#828282"/>
<path d="M380 115.857L398 103L398 128L380 115.857Z" fill="#828282"/>
<path d="M400 115.857L418 103L418 128L400 115.857Z" fill="#828282"/>
<circle cx="14" cy="194" r="5" fill="#D91616"/>
<circle cx="102" cy="162" r="5" fill="#D91616"/>
<circle cx="118" cy="162" r="5" fill="#D91616"/>
<circle cx="70" cy="162" r="5" fill="#D91616"/>
<circle cx="86" cy="162" r="5" fill="#D91616"/>
<circle cx="234" cy="102" r="5" fill="#D91616"/>
<circle cx="250" cy="102" r="5" fill="#D91616"/>
<circle cx="202" cy="102" r="5" fill="#D91616"/>
<circle cx="218" cy="102" r="5" fill="#D91616"/>
<path d="M319 455H341.59L589.989 207H567.398L319 455Z" fill="#828282"/>
<path d="M345 455H347.59L595.989 207H593.398L345 455Z" fill="#828282"/>
<path d="M28 211L23 208.113V213.887L28 211ZM5 211V210.5L4.5 211H5ZM5 398H4.5L4.64645 398.354L5 398ZM61 454L60.6464 454.354L61 454.5V454ZM309 454L304 451.113V456.887L309 454ZM23.5 210.5H5V211.5H23.5V210.5ZM4.5 211V398H5.5V211H4.5ZM4.64645 398.354L60.6464 454.354L61.3536 453.646L5.35355 397.646L4.64645 398.354ZM61 454.5H304.5V453.5H61V454.5Z" fill="#828282"/>
<defs>
<linearGradient id="paint0_linear_223_4221" x1="626.5" y1="17" x2="561.924" y2="67.9698" gradientUnits="userSpaceOnUse">
<stop stop-color="#D91616" stop-opacity="0"/>
<stop offset="1" stop-color="#828282"/>
</linearGradient>
</defs>
         </svg>

          
          <svg width="72" height="224" viewBox="0 0 72 224" className='absolute bottom-[425px] right-[4rem]' fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24 20.1591C23.1439 20.1591 22.4148 19.9261 21.8125 19.4602C21.2102 18.9905 20.75 18.3106 20.4318 17.4205C20.1136 16.5265 19.9545 15.447 19.9545 14.1818C19.9545 12.9242 20.1136 11.8504 20.4318 10.9602C20.7538 10.0663 21.2159 9.38447 21.8182 8.91477C22.4242 8.44129 23.1515 8.20455 24 8.20455C24.8485 8.20455 25.5739 8.44129 26.1761 8.91477C26.7822 9.38447 27.2443 10.0663 27.5625 10.9602C27.8845 11.8504 28.0455 12.9242 28.0455 14.1818C28.0455 15.447 27.8864 16.5265 27.5682 17.4205C27.25 18.3106 26.7898 18.9905 26.1875 19.4602C25.5852 19.9261 24.8561 20.1591 24 20.1591ZM24 18.9091C24.8485 18.9091 25.5076 18.5 25.9773 17.6818C26.447 16.8636 26.6818 15.697 26.6818 14.1818C26.6818 13.1742 26.5739 12.3163 26.358 11.608C26.1458 10.8996 25.839 10.3598 25.4375 9.98864C25.0398 9.61742 24.5606 9.43182 24 9.43182C23.1591 9.43182 22.5019 9.84659 22.0284 10.6761C21.5549 11.5019 21.3182 12.6705 21.3182 14.1818C21.3182 15.1894 21.4242 16.0455 21.6364 16.75C21.8485 17.4545 22.1534 17.9905 22.5511 18.358C22.9527 18.7254 23.4356 18.9091 24 18.9091ZM33.9755 8.36364V20H32.5664V9.84091H32.4982L29.6573 11.7273V10.2955L32.5664 8.36364H33.9755ZM37.3145 20.0909C37.0342 20.0909 36.7937 19.9905 36.593 19.7898C36.3922 19.589 36.2918 19.3485 36.2918 19.0682C36.2918 18.7879 36.3922 18.5473 36.593 18.3466C36.7937 18.1458 37.0342 18.0455 37.3145 18.0455C37.5948 18.0455 37.8354 18.1458 38.0361 18.3466C38.2369 18.5473 38.3373 18.7879 38.3373 19.0682C38.3373 19.2538 38.2899 19.4242 38.1952 19.5795C38.1043 19.7348 37.9812 19.8598 37.8259 19.9545C37.6744 20.0455 37.5039 20.0909 37.3145 20.0909Z" fill="#C4C4C4"/>
<rect x="48.5" y="0.5" width="23" height="23" fill="url(#paint0_radial_223_4199)"/>
<rect x="48.5" y="0.5" width="23" height="23" stroke="url(#paint1_linear_223_4199)"/>
<rect x="48.5" y="0.5" width="23" height="23" stroke="url(#paint2_linear_223_4199)"/>
<path d="M21 60.1591C20.1439 60.1591 19.4148 59.9261 18.8125 59.4602C18.2102 58.9905 17.75 58.3106 17.4318 57.4205C17.1136 56.5265 16.9545 55.447 16.9545 54.1818C16.9545 52.9242 17.1136 51.8504 17.4318 50.9602C17.7538 50.0663 18.2159 49.3845 18.8182 48.9148C19.4242 48.4413 20.1515 48.2045 21 48.2045C21.8485 48.2045 22.5739 48.4413 23.1761 48.9148C23.7822 49.3845 24.2443 50.0663 24.5625 50.9602C24.8845 51.8504 25.0455 52.9242 25.0455 54.1818C25.0455 55.447 24.8864 56.5265 24.5682 57.4205C24.25 58.3106 23.7898 58.9905 23.1875 59.4602C22.5852 59.9261 21.8561 60.1591 21 60.1591ZM21 58.9091C21.8485 58.9091 22.5076 58.5 22.9773 57.6818C23.447 56.8636 23.6818 55.697 23.6818 54.1818C23.6818 53.1742 23.5739 52.3163 23.358 51.608C23.1458 50.8996 22.839 50.3598 22.4375 49.9886C22.0398 49.6174 21.5606 49.4318 21 49.4318C20.1591 49.4318 19.5019 49.8466 19.0284 50.6761C18.5549 51.5019 18.3182 52.6705 18.3182 54.1818C18.3182 55.1894 18.4242 56.0455 18.6364 56.75C18.8485 57.4545 19.1534 57.9905 19.5511 58.358C19.9527 58.7254 20.4356 58.9091 21 58.9091ZM26.8845 60V58.9773L30.7255 54.7727C31.1762 54.2803 31.5474 53.8523 31.8391 53.4886C32.1308 53.1212 32.3467 52.7765 32.4868 52.4545C32.6308 52.1288 32.7027 51.7879 32.7027 51.4318C32.7027 51.0227 32.6042 50.6686 32.4073 50.3693C32.2141 50.0701 31.9489 49.839 31.6118 49.6761C31.2747 49.5133 30.8959 49.4318 30.4755 49.4318C30.0285 49.4318 29.6383 49.5246 29.305 49.7102C28.9755 49.892 28.7198 50.1477 28.538 50.4773C28.3599 50.8068 28.2709 51.1932 28.2709 51.6364H26.93C26.93 50.9545 27.0872 50.3561 27.4016 49.8409C27.716 49.3258 28.144 48.9242 28.6857 48.6364C29.2311 48.3485 29.8429 48.2045 30.5209 48.2045C31.2027 48.2045 31.8069 48.3485 32.3334 48.6364C32.8599 48.9242 33.2728 49.3125 33.572 49.8011C33.8713 50.2898 34.0209 50.8333 34.0209 51.4318C34.0209 51.8598 33.9433 52.2784 33.788 52.6875C33.6364 53.0928 33.3713 53.5455 32.9925 54.0455C32.6175 54.5417 32.0967 55.1477 31.43 55.8636L28.8164 58.6591V58.75H34.2255V60H26.8845ZM37.252 60.0909C36.9717 60.0909 36.7312 59.9905 36.5305 59.7898C36.3297 59.589 36.2293 59.3485 36.2293 59.0682C36.2293 58.7879 36.3297 58.5473 36.5305 58.3466C36.7312 58.1458 36.9717 58.0455 37.252 58.0455C37.5323 58.0455 37.7729 58.1458 37.9736 58.3466C38.1744 58.5473 38.2748 58.7879 38.2748 59.0682C38.2748 59.2538 38.2274 59.4242 38.1327 59.5795C38.0418 59.7348 37.9187 59.8598 37.7634 59.9545C37.6119 60.0455 37.4414 60.0909 37.252 60.0909Z" fill="#C4C4C4"/>
<rect x="48.5" y="40.5" width="23" height="23" fill="url(#paint3_radial_223_4199)"/>
<rect x="48.5" y="40.5" width="23" height="23" stroke="url(#paint4_linear_223_4199)"/>
<rect x="48.5" y="40.5" width="23" height="23" stroke="url(#paint5_linear_223_4199)"/>
<path d="M21 100.159C20.1439 100.159 19.4148 99.9261 18.8125 99.4602C18.2102 98.9905 17.75 98.3106 17.4318 97.4205C17.1136 96.5265 16.9545 95.447 16.9545 94.1818C16.9545 92.9242 17.1136 91.8504 17.4318 90.9602C17.7538 90.0663 18.2159 89.3845 18.8182 88.9148C19.4242 88.4413 20.1515 88.2045 21 88.2045C21.8485 88.2045 22.5739 88.4413 23.1761 88.9148C23.7822 89.3845 24.2443 90.0663 24.5625 90.9602C24.8845 91.8504 25.0455 92.9242 25.0455 94.1818C25.0455 95.447 24.8864 96.5265 24.5682 97.4205C24.25 98.3106 23.7898 98.9905 23.1875 99.4602C22.5852 99.9261 21.8561 100.159 21 100.159ZM21 98.9091C21.8485 98.9091 22.5076 98.5 22.9773 97.6818C23.447 96.8636 23.6818 95.697 23.6818 94.1818C23.6818 93.1742 23.5739 92.3163 23.358 91.608C23.1458 90.8996 22.839 90.3598 22.4375 89.9886C22.0398 89.6174 21.5606 89.4318 21 89.4318C20.1591 89.4318 19.5019 89.8466 19.0284 90.6761C18.5549 91.5019 18.3182 92.6705 18.3182 94.1818C18.3182 95.1894 18.4242 96.0455 18.6364 96.75C18.8485 97.4545 19.1534 97.9905 19.5511 98.358C19.9527 98.7254 20.4356 98.9091 21 98.9091ZM30.8164 100.159C30.0664 100.159 29.3978 100.03 28.8107 99.7727C28.2273 99.5152 27.7633 99.1572 27.4186 98.6989C27.0777 98.2367 26.8921 97.7008 26.8618 97.0909H28.2936C28.3239 97.4659 28.4527 97.7898 28.68 98.0625C28.9073 98.3314 29.2046 98.5398 29.572 98.6875C29.9395 98.8352 30.3467 98.9091 30.7936 98.9091C31.2936 98.9091 31.7368 98.822 32.1232 98.6477C32.5095 98.4735 32.8126 98.2311 33.0323 97.9205C33.252 97.6098 33.3618 97.25 33.3618 96.8409C33.3618 96.4129 33.2558 96.036 33.0436 95.7102C32.8315 95.3807 32.5209 95.1231 32.1118 94.9375C31.7027 94.7519 31.2027 94.6591 30.6118 94.6591H29.68V93.4091H30.6118C31.0739 93.4091 31.4792 93.3258 31.8277 93.1591C32.18 92.9924 32.4546 92.7576 32.6516 92.4545C32.8523 92.1515 32.9527 91.7955 32.9527 91.3864C32.9527 90.9924 32.8656 90.6496 32.6914 90.358C32.5171 90.0663 32.2709 89.839 31.9527 89.6761C31.6383 89.5133 31.2671 89.4318 30.8391 89.4318C30.4376 89.4318 30.0588 89.5057 29.7027 89.6534C29.3505 89.7973 29.0626 90.0076 28.8391 90.2841C28.6156 90.5568 28.4944 90.8864 28.4755 91.2727H27.1118C27.1345 90.6629 27.3183 90.1288 27.663 89.6705C28.0077 89.2083 28.4584 88.8485 29.0152 88.5909C29.5758 88.3333 30.1914 88.2045 30.8618 88.2045C31.5815 88.2045 32.1989 88.3504 32.7141 88.642C33.2292 88.9299 33.6251 89.3106 33.9016 89.7841C34.1781 90.2576 34.3164 90.7689 34.3164 91.3182C34.3164 91.9735 34.144 92.5322 33.7993 92.9943C33.4584 93.4564 32.9944 93.7765 32.4073 93.9545V94.0455C33.1421 94.1667 33.716 94.4792 34.1289 94.983C34.5417 95.483 34.7482 96.1023 34.7482 96.8409C34.7482 97.4735 34.5758 98.0417 34.2311 98.5455C33.8902 99.0455 33.4243 99.4394 32.8334 99.7273C32.2425 100.015 31.5702 100.159 30.8164 100.159ZM37.3927 100.091C37.1124 100.091 36.8718 99.9905 36.6711 99.7898C36.4703 99.589 36.3699 99.3485 36.3699 99.0682C36.3699 98.7879 36.4703 98.5473 36.6711 98.3466C36.8718 98.1458 37.1124 98.0455 37.3927 98.0455C37.673 98.0455 37.9135 98.1458 38.1143 98.3466C38.315 98.5473 38.4154 98.7879 38.4154 99.0682C38.4154 99.2538 38.368 99.4242 38.2734 99.5795C38.1824 99.7348 38.0593 99.8598 37.904 99.9545C37.7525 100.045 37.5821 100.091 37.3927 100.091Z" fill="#C4C4C4"/>
<rect x="48.5" y="80.5" width="23" height="23" fill="url(#paint6_radial_223_4199)"/>
<rect x="48.5" y="80.5" width="23" height="23" stroke="url(#paint7_linear_223_4199)"/>
<rect x="48.5" y="80.5" width="23" height="23" stroke="url(#paint8_linear_223_4199)"/>
<path d="M21 140.159C20.1439 140.159 19.4148 139.926 18.8125 139.46C18.2102 138.991 17.75 138.311 17.4318 137.42C17.1136 136.527 16.9545 135.447 16.9545 134.182C16.9545 132.924 17.1136 131.85 17.4318 130.96C17.7538 130.066 18.2159 129.384 18.8182 128.915C19.4242 128.441 20.1515 128.205 21 128.205C21.8485 128.205 22.5739 128.441 23.1761 128.915C23.7822 129.384 24.2443 130.066 24.5625 130.96C24.8845 131.85 25.0455 132.924 25.0455 134.182C25.0455 135.447 24.8864 136.527 24.5682 137.42C24.25 138.311 23.7898 138.991 23.1875 139.46C22.5852 139.926 21.8561 140.159 21 140.159ZM21 138.909C21.8485 138.909 22.5076 138.5 22.9773 137.682C23.447 136.864 23.6818 135.697 23.6818 134.182C23.6818 133.174 23.5739 132.316 23.358 131.608C23.1458 130.9 22.839 130.36 22.4375 129.989C22.0398 129.617 21.5606 129.432 21 129.432C20.1591 129.432 19.5019 129.847 19.0284 130.676C18.5549 131.502 18.3182 132.67 18.3182 134.182C18.3182 135.189 18.4242 136.045 18.6364 136.75C18.8485 137.455 19.1534 137.991 19.5511 138.358C19.9527 138.725 20.4356 138.909 21 138.909ZM26.6118 137.614V136.455L31.7255 128.364H32.5664V130.159H31.9982L28.1345 136.273V136.364H35.0209V137.614H26.6118ZM32.0891 140V137.261V136.722V128.364H33.43V140H32.0891ZM37.2833 140.091C37.003 140.091 36.7625 139.991 36.5617 139.79C36.3609 139.589 36.2606 139.348 36.2606 139.068C36.2606 138.788 36.3609 138.547 36.5617 138.347C36.7625 138.146 37.003 138.045 37.2833 138.045C37.5636 138.045 37.8041 138.146 38.0049 138.347C38.2056 138.547 38.306 138.788 38.306 139.068C38.306 139.254 38.2587 139.424 38.164 139.58C38.0731 139.735 37.95 139.86 37.7947 139.955C37.6431 140.045 37.4727 140.091 37.2833 140.091Z" fill="#C4C4C4"/>
<rect x="48.5" y="120.5" width="23" height="23" fill="url(#paint9_radial_223_4199)"/>
<rect x="48.5" y="120.5" width="23" height="23" stroke="url(#paint10_linear_223_4199)"/>
<rect x="48.5" y="120.5" width="23" height="23" stroke="url(#paint11_linear_223_4199)"/>
<path d="M5 180.159C4.14394 180.159 3.41477 179.926 2.8125 179.46C2.21023 178.991 1.75 178.311 1.43182 177.42C1.11364 176.527 0.954545 175.447 0.954545 174.182C0.954545 172.924 1.11364 171.85 1.43182 170.96C1.75379 170.066 2.21591 169.384 2.81818 168.915C3.42424 168.441 4.15152 168.205 5 168.205C5.84848 168.205 6.57386 168.441 7.17614 168.915C7.7822 169.384 8.24432 170.066 8.5625 170.96C8.88447 171.85 9.04545 172.924 9.04545 174.182C9.04545 175.447 8.88636 176.527 8.56818 177.42C8.25 178.311 7.78977 178.991 7.1875 179.46C6.58523 179.926 5.85606 180.159 5 180.159ZM5 178.909C5.84848 178.909 6.50758 178.5 6.97727 177.682C7.44697 176.864 7.68182 175.697 7.68182 174.182C7.68182 173.174 7.57386 172.316 7.35795 171.608C7.14583 170.9 6.83902 170.36 6.4375 169.989C6.03977 169.617 5.56061 169.432 5 169.432C4.15909 169.432 3.50189 169.847 3.02841 170.676C2.55492 171.502 2.31818 172.67 2.31818 174.182C2.31818 175.189 2.42424 176.045 2.63636 176.75C2.84848 177.455 3.15341 177.991 3.55114 178.358C3.95265 178.725 4.43561 178.909 5 178.909ZM14.5209 180.159C13.8542 180.159 13.2539 180.027 12.7198 179.761C12.1857 179.496 11.7577 179.133 11.4357 178.67C11.1137 178.208 10.9376 177.682 10.9073 177.091H12.2709C12.3239 177.617 12.5626 178.053 12.9868 178.398C13.4148 178.739 13.9262 178.909 14.5209 178.909C14.9982 178.909 15.4224 178.797 15.7936 178.574C16.1686 178.35 16.4622 178.044 16.6743 177.653C16.8902 177.259 16.9982 176.814 16.9982 176.318C16.9982 175.811 16.8864 175.358 16.663 174.96C16.4433 174.559 16.1402 174.242 15.7539 174.011C15.3675 173.78 14.9262 173.663 14.43 173.659C14.0739 173.655 13.7084 173.71 13.3334 173.824C12.9584 173.934 12.6497 174.076 12.4073 174.25L11.0891 174.091L11.7936 168.364H17.8391V169.614H12.9755L12.5664 173.045H12.6345C12.8732 172.856 13.1724 172.699 13.5323 172.574C13.8921 172.449 14.2671 172.386 14.6573 172.386C15.3694 172.386 16.0039 172.557 16.5607 172.898C17.1213 173.235 17.5607 173.697 17.8789 174.284C18.2008 174.871 18.3618 175.542 18.3618 176.295C18.3618 177.038 18.1952 177.701 17.8618 178.284C17.5323 178.864 17.0777 179.322 16.4982 179.659C15.9186 179.992 15.2595 180.159 14.5209 180.159ZM20.8614 180.091C20.5811 180.091 20.3406 179.991 20.1398 179.79C19.9391 179.589 19.8387 179.348 19.8387 179.068C19.8387 178.788 19.9391 178.547 20.1398 178.347C20.3406 178.146 20.5811 178.045 20.8614 178.045C21.1417 178.045 21.3823 178.146 21.583 178.347C21.7838 178.547 21.8841 178.788 21.8841 179.068C21.8841 179.254 21.8368 179.424 21.7421 179.58C21.6512 179.735 21.5281 179.86 21.3728 179.955C21.2213 180.045 21.0508 180.091 20.8614 180.091Z" fill="#070000"/>
<rect x="48.5" y="160.5" width="23" height="23" fill="url(#paint12_radial_223_4199)"/>
<rect x="48.5" y="160.5" width="23" height="23" stroke="url(#paint13_linear_223_4199)"/>
<rect x="48.5" y="160.5" width="23" height="23" stroke="url(#paint14_linear_223_4199)"/>
<path d="M21 220.159C20.1439 220.159 19.4148 219.926 18.8125 219.46C18.2102 218.991 17.75 218.311 17.4318 217.42C17.1136 216.527 16.9545 215.447 16.9545 214.182C16.9545 212.924 17.1136 211.85 17.4318 210.96C17.7538 210.066 18.2159 209.384 18.8182 208.915C19.4242 208.441 20.1515 208.205 21 208.205C21.8485 208.205 22.5739 208.441 23.1761 208.915C23.7822 209.384 24.2443 210.066 24.5625 210.96C24.8845 211.85 25.0455 212.924 25.0455 214.182C25.0455 215.447 24.8864 216.527 24.5682 217.42C24.25 218.311 23.7898 218.991 23.1875 219.46C22.5852 219.926 21.8561 220.159 21 220.159ZM21 218.909C21.8485 218.909 22.5076 218.5 22.9773 217.682C23.447 216.864 23.6818 215.697 23.6818 214.182C23.6818 213.174 23.5739 212.316 23.358 211.608C23.1458 210.9 22.839 210.36 22.4375 209.989C22.0398 209.617 21.5606 209.432 21 209.432C20.1591 209.432 19.5019 209.847 19.0284 210.676C18.5549 211.502 18.3182 212.67 18.3182 214.182C18.3182 215.189 18.4242 216.045 18.6364 216.75C18.8485 217.455 19.1534 217.991 19.5511 218.358C19.9527 218.725 20.4356 218.909 21 218.909ZM30.7482 220.159C30.2709 220.152 29.7936 220.061 29.3164 219.886C28.8391 219.712 28.4035 219.419 28.0095 219.006C27.6156 218.589 27.2993 218.027 27.0607 217.318C26.822 216.606 26.7027 215.712 26.7027 214.636C26.7027 213.606 26.7993 212.693 26.9925 211.898C27.1857 211.098 27.466 210.426 27.8334 209.881C28.2008 209.331 28.644 208.915 29.163 208.631C29.6857 208.347 30.2747 208.205 30.93 208.205C31.5815 208.205 32.1611 208.335 32.6686 208.597C33.18 208.854 33.5967 209.214 33.9186 209.676C34.2406 210.138 34.4489 210.67 34.5436 211.273H33.1573C33.0285 210.75 32.7785 210.316 32.4073 209.972C32.0361 209.627 31.5436 209.455 30.93 209.455C30.0285 209.455 29.3183 209.847 28.7993 210.631C28.2842 211.415 28.0247 212.515 28.0209 213.932H28.1118C28.3239 213.61 28.5758 213.335 28.8675 213.108C29.163 212.877 29.4887 212.699 29.8448 212.574C30.2008 212.449 30.5777 212.386 30.9755 212.386C31.6421 212.386 32.252 212.553 32.805 212.886C33.358 213.216 33.8012 213.672 34.1345 214.256C34.4679 214.835 34.6345 215.5 34.6345 216.25C34.6345 216.97 34.4736 217.629 34.1516 218.227C33.8296 218.822 33.377 219.295 32.7936 219.648C32.2141 219.996 31.5323 220.167 30.7482 220.159ZM30.7482 218.909C31.2255 218.909 31.6535 218.79 32.0323 218.551C32.4148 218.312 32.716 217.992 32.9357 217.591C33.1592 217.189 33.2709 216.742 33.2709 216.25C33.2709 215.769 33.163 215.331 32.947 214.938C32.7349 214.54 32.4414 214.223 32.0664 213.989C31.6952 213.754 31.2709 213.636 30.7936 213.636C30.4338 213.636 30.0986 213.708 29.788 213.852C29.4773 213.992 29.2046 214.186 28.9698 214.432C28.7387 214.678 28.5569 214.96 28.4243 215.278C28.2917 215.593 28.2255 215.924 28.2255 216.273C28.2255 216.735 28.3334 217.167 28.5493 217.568C28.769 217.97 29.0683 218.294 29.447 218.54C29.8296 218.786 30.2633 218.909 30.7482 218.909ZM37.002 220.091C36.7217 220.091 36.4812 219.991 36.2805 219.79C36.0797 219.589 35.9793 219.348 35.9793 219.068C35.9793 218.788 36.0797 218.547 36.2805 218.347C36.4812 218.146 36.7217 218.045 37.002 218.045C37.2823 218.045 37.5229 218.146 37.7236 218.347C37.9244 218.547 38.0248 218.788 38.0248 219.068C38.0248 219.254 37.9774 219.424 37.8827 219.58C37.7918 219.735 37.6687 219.86 37.5134 219.955C37.3619 220.045 37.1914 220.091 37.002 220.091Z" fill="#C4C4C4"/>
<rect x="48.5" y="200.5" width="23" height="23" fill="url(#paint15_radial_223_4199)"/>
<rect x="48.5" y="200.5" width="23" height="23" stroke="url(#paint16_linear_223_4199)"/>
<rect x="48.5" y="200.5" width="23" height="23" stroke="url(#paint17_linear_223_4199)"/>
<defs>
<radialGradient id="paint0_radial_223_4199" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60 12) rotate(90) scale(12)">
<stop stop-color="#828282"/>
<stop offset="1" stop-color="#E8E8E8" stop-opacity="0"/>
</radialGradient>
<linearGradient id="paint1_linear_223_4199" x1="48.75" y1="0.75" x2="72" y2="24" gradientUnits="userSpaceOnUse">
<stop/>
<stop offset="0.2" stop-color="#E8E8E8" stop-opacity="0"/>
<stop offset="0.8" stop-color="#E8E8E8" stop-opacity="0"/>
<stop offset="1"/>
</linearGradient>
<linearGradient id="paint2_linear_223_4199" x1="71.25" y1="2.79397e-09" x2="48" y2="24" gradientUnits="userSpaceOnUse">
<stop/>
<stop offset="0.2" stop-color="#E8E8E8" stop-opacity="0"/>
<stop offset="0.8" stop-color="#E8E8E8" stop-opacity="0"/>
<stop offset="1"/>
</linearGradient>
<radialGradient id="paint3_radial_223_4199" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60 52) rotate(90) scale(12)">
<stop stop-color="#828282"/>
<stop offset="1" stop-color="#E8E8E8" stop-opacity="0"/>
</radialGradient>
<linearGradient id="paint4_linear_223_4199" x1="48.75" y1="40.75" x2="72" y2="64" gradientUnits="userSpaceOnUse">
<stop/>
<stop offset="0.2" stop-color="#E8E8E8" stop-opacity="0"/>
<stop offset="0.8" stop-color="#E8E8E8" stop-opacity="0"/>
<stop offset="1"/>
</linearGradient>
<linearGradient id="paint5_linear_223_4199" x1="71.25" y1="40" x2="48" y2="64" gradientUnits="userSpaceOnUse">
<stop/>
<stop offset="0.2" stop-color="#E8E8E8" stop-opacity="0"/>
<stop offset="0.8" stop-color="#E8E8E8" stop-opacity="0"/>
<stop offset="1"/>
</linearGradient>
<radialGradient id="paint6_radial_223_4199" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60 92) rotate(90) scale(12)">
<stop stop-color="#D91616"/>
<stop offset="1" stop-color="#E8E8E8" stop-opacity="0"/>
</radialGradient>
<linearGradient id="paint7_linear_223_4199" x1="48.75" y1="80.75" x2="72" y2="104" gradientUnits="userSpaceOnUse">
<stop/>
<stop offset="0.2" stop-color="#E8E8E8" stop-opacity="0"/>
<stop offset="0.8" stop-color="#E8E8E8" stop-opacity="0"/>
<stop offset="1"/>
</linearGradient>
<linearGradient id="paint8_linear_223_4199" x1="71.25" y1="80" x2="48" y2="104" gradientUnits="userSpaceOnUse">
<stop/>
<stop offset="0.2" stop-color="#E8E8E8" stop-opacity="0"/>
<stop offset="0.8" stop-color="#E8E8E8" stop-opacity="0"/>
<stop offset="1"/>
</linearGradient>
<radialGradient id="paint9_radial_223_4199" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60 132) rotate(90) scale(12)">
<stop stop-color="#828282"/>
<stop offset="1" stop-color="#E8E8E8" stop-opacity="0"/>
</radialGradient>
<linearGradient id="paint10_linear_223_4199" x1="48.75" y1="120.75" x2="72" y2="144" gradientUnits="userSpaceOnUse">
<stop/>
<stop offset="0.2" stop-color="#E8E8E8" stop-opacity="0"/>
<stop offset="0.8" stop-color="#E8E8E8" stop-opacity="0"/>
<stop offset="1"/>
</linearGradient>
<linearGradient id="paint11_linear_223_4199" x1="71.25" y1="120" x2="48" y2="144" gradientUnits="userSpaceOnUse">
<stop/>
<stop offset="0.2" stop-color="#E8E8E8" stop-opacity="0"/>
<stop offset="0.8" stop-color="#E8E8E8" stop-opacity="0"/>
<stop offset="1"/>
</linearGradient>
<radialGradient id="paint12_radial_223_4199" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60 172) rotate(90) scale(12)">
<stop stop-color="#D91616"/>
<stop offset="1" stop-color="#E8E8E8" stop-opacity="0"/>
</radialGradient>
<linearGradient id="paint13_linear_223_4199" x1="48.75" y1="160.75" x2="72" y2="184" gradientUnits="userSpaceOnUse">
<stop/>
<stop offset="0.2" stop-color="#E8E8E8" stop-opacity="0"/>
<stop offset="0.8" stop-color="#E8E8E8" stop-opacity="0"/>
<stop offset="1"/>
</linearGradient>
<linearGradient id="paint14_linear_223_4199" x1="71.25" y1="160" x2="48" y2="184" gradientUnits="userSpaceOnUse">
<stop/>
<stop offset="0.2" stop-color="#E8E8E8" stop-opacity="0"/>
<stop offset="0.8" stop-color="#E8E8E8" stop-opacity="0"/>
<stop offset="1"/>
</linearGradient>
<radialGradient id="paint15_radial_223_4199" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60 212) rotate(90) scale(12)">
<stop stop-color="#828282"/>
<stop offset="1" stop-color="#E8E8E8" stop-opacity="0"/>
</radialGradient>
<linearGradient id="paint16_linear_223_4199" x1="48.75" y1="200.75" x2="72" y2="224" gradientUnits="userSpaceOnUse">
<stop/>
<stop offset="0.2" stop-color="#E8E8E8" stop-opacity="0"/>
<stop offset="0.8" stop-color="#E8E8E8" stop-opacity="0"/>
<stop offset="1"/>
</linearGradient>
<linearGradient id="paint17_linear_223_4199" x1="71.25" y1="200" x2="48" y2="224" gradientUnits="userSpaceOnUse">
<stop/>
<stop offset="0.2" stop-color="#E8E8E8" stop-opacity="0"/>
<stop offset="0.8" stop-color="#E8E8E8" stop-opacity="0"/>
<stop offset="1"/>
</linearGradient>
</defs>
</svg>


          <div className='flex gap-6 items-start mt-16'>
   <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" r="19.5" stroke="#D91616"/>
<circle cx="20" cy="20" r="16" fill="#D91616"/>
<g clip-path="url(#clip0_223_4194)">
<path d="M29 16C27.55 16 26.74 17.44 27.07 18.51L23.52 22.07C23.22 21.98 22.78 21.98 22.48 22.07L19.93 19.52C20.27 18.45 19.46 17 18 17C16.55 17 15.73 18.44 16.07 19.52L11.51 24.07C10.44 23.74 9 24.55 9 26C9 27.1 9.9 28 11 28C12.45 28 13.26 26.56 12.93 25.49L17.48 20.93C17.78 21.02 18.22 21.02 18.52 20.93L21.07 23.48C20.73 24.55 21.54 26 23 26C24.45 26 25.27 24.56 24.93 23.48L28.49 19.93C29.56 20.26 31 19.45 31 18C31 16.9 30.1 16 29 16Z" fill="white"/>
<path d="M23 17L23.94 14.93L26 14L23.94 13.07L23 11L22.08 13.07L20 14L22.08 14.93L23 17Z" fill="white"/>
<path d="M11.5 19L12 17L14 16.5L12 16L11.5 14L11 16L9 16.5L11 17L11.5 19Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_223_4194">
<rect width="24" height="24" fill="white" transform="translate(8 8)"/>
</clipPath>
</defs>
</svg>


<h3 className='text-[#070000] text-[40px] max-w-[319px] leading-[48.41px] tracking-[-2px] '>Тільки найкращі оффери</h3>
     </div>
          </div>
  )
}

export default FifthCard