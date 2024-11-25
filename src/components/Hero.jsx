import React, { forwardRef, useEffect, useState } from "react";
import Image from 'next/image'



import heroImage1 from '../assets/user-images/hero-image-1.jpg'
import heroImage2 from '../assets/user-images/hero-image-2.jpg'



const Hero = forwardRef((props, ref) => {

  const [showDiv1, setShowDiv1] = useState(false);
  const [showDiv2, setShowDiv2] = useState(false);
  const [showDiv3, setShowDiv3] = useState(false);
  const [showDiv4, setShowDiv4] = useState(false);
  const [showDiv5, setShowDiv5] = useState(false);
  const [showDiv6, setShowDiv6] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowDiv1(true), 200);
    const timer2 = setTimeout(() => setShowDiv2(true), 300);
    const timer3 = setTimeout(() => setShowDiv3(true), 400);
    const timer4 = setTimeout(() => setShowDiv4(true), 700);
    const timer5 = setTimeout(() => setShowDiv5(true), 600);
    const timer6 = setTimeout(() => setShowDiv6(true), 800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
    };
  }, []);






  return (
    <div ref={ref}>
      <section className='h-full xl:h-[610px] grid grid-cols-1 md:grid-cols-3'>


        <div className='relative order-3 md:order-none max-md:h-[300px] w-full'>


          <div className='absolute md:mx-auto md:bottom-10 w-full '>
            <div
              className={`
                 ${showDiv5 ? 'opacity-1' : 'opacity-0 '}
                    transition-all duration-500
              flex justify-center relative 
              md:-bottom-20
              h-[180px] w-[300px]
              sm:w-[380px]
              md:h-[100px] md:w-[200px]
              lg:h-[120px] 
              mx-auto my-10
              sm:my-20`}

              style={{ backgroundColor: "var(--image-base-hero-2)" }}
            >

              <Image
                src={heroImage2}
                alt='miss nepal international second runnerup Snehalata R Thapa'
                priority
                className={`
                    ${showDiv6 ? 'opacity-1' : 'opacity-0 '}
                    transition-all duration-1000
              absolute 
              -top-5
              sm:-top-10
              md:-top-3
              size-[180px]
              sm:size-[200px] 
              md:size-[100px]`}
              />
              <p
                className='
                text-white absolute 
                bottom-0 
                space-x-5 
                md:space-x-2
                tracking-[16px]
                md:tracking-[10px]
                sm:text-lg
                md:text-xs
                '>
                <span className='uppercase'>Nepal</span>
                <span className='uppercase'>Nepal</span>
              </p>
            </div>
          </div>

        </div>

        <div className=' relative  order-1 md:order-none'>

          <div className='size-full h-[160px] pt-5 relative'>

            <p
              className='
              py-5 pl-2 
              lg:pb-4
            '>
              <span className='
              absolute 
              md:-left-[95%]
              md:text-xs 
              lg:text-base 
              '
                style={{ color: "var(--secondary-text)" }}
              >
                Last updated: 2024
              </span>
            </p>
            {/* Main-text-start */}
            <h1
              className=
              {`
              ${showDiv3 ? 'opacity-1 translate-x-0' : 'opacity-0 -translate-x-10 '}
              transition-all duration-1000
              uppercase absolute z-10 font-extrabold
              hidden md:block
              md:text-[65px] md:leading-none md:-left-[95%] 
              lg:text-[90px] lg:md:-left-[100%]
              xl:text-[126px]  
              2xl:text-[145px]  
              md:w-[600px]
              lg:w-[900px]
              xl:w-[1000px]
              `}>
              Snehalata R <br /> Thapa
            </h1>
            <h1
              className={`
                 ${showDiv3 ? 'opacity-1' : 'opacity-0 '}
              md:hidden uppercase absolute z-10
              text-[54px] leading-[50px]
            sm:text-[70px]`}
            >
              Snehalata <br /> R Thapa
            </h1>
            {/* Main-text-end */}
          </div>


          <div
            className=' 
            max-sm:py-3
            md:absolute md:top-[38%] md:-left-[5%]
            lg:top-[45%] lg:left-[8%]
            '>
            <ul
              className={`
              ${showDiv4 ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-10 '}
                 transition-all duration-1000
              md:text-xs
              lg:text-sm
              xl:text-base
              2xl:text-lg
              `}
              style={{ color: "var(--secondary-text)" }}>
              <li>Mrs. Bhairahawa 2019</li>
              <li>Mrs. Nepal International 2nd Runner-up 2019</li>
              <li>Award Winner at TKS Mrs. International 2019</li>
              <li>Certified Life Skills and Leadership Trainer</li>
            </ul>
          </div>
        </div>


        {/* hero-image-1 */}
        <div className=' order-2 md:order-none mt-5 md:mt-0'>
          <div
            className={`
        ${showDiv1 ? 'opacity-1' : 'opacity-0'}
        transition-all duration-200
        mx-auto relative
        sm:my-5
        md:mb-10 md:mt-28
        h-[360px] w-[300px]
        sm:h-[440px] sm:w-[380px]
        md:h-[280px] md:w-[240px]
        lg:h-[390px] lg:w-[350px]
        xl:h-[460px] xl:w-[390px]
        2xl:h-[470px] 2xl:w-[420px]
      `}
            style={{ backgroundColor: 'var(--image-base-hero-1)' }}
          >
            <Image
              src={heroImage1}
              alt='hero image of Snehalata R Thapa'
              priority
              className={`
                 ${showDiv2 ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-10'}
                    transition-all duration-1000
              absolute 
              bottom-3 right-4
              lg:bottom-5 lg:right-5
              h-[360px] w-[300px] 
              sm:h-[440px] sm:w-[380px]
              md:h-[280px] md:w-[240px] 
              lg:h-[390px] lg:w-[350px]
              xl:h-[460px] xl:w-[390px]
              2xl:h-[470px] 2xl:w-[420px]
              `}
            />
          </div>
        </div>
        {/* hero-image-1 */}


      </section >
    </div >
  )
})

Hero.displayName = 'Hero';
export default Hero