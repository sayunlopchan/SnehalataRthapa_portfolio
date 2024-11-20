import Image from 'next/image'
import React from 'react'


import IntroductionImage from '../assets/user-images/introduction-image-1.jpg'



const Introduction = () => {
  return (
    <div>
      <h2 className='font-bold text-2xl my-5 uppercase'>Introduction</h2>
      <div className='grid grid-cols-1 md:grid-cols-7 py-5'>
        <section className='col-span-4 order-2 md:order-none p-10'>
          <p className='lg:text-lg xl:text-xl 2xl:text-2xl max-md:text-center'>
            An instructor, entrepreneur, life skills trainer, and founder of  Cultivate Your Canvas, Sparkle Kids Academy, and Sneh Studio Yoga Center, I am passionate about uplifting my community. Through my work, I empower individuals to reach their full potential. My involvement in various clubs and community projects reflects my commitment to personal growth, leadership, and lasting positive impact.
          </p>
        </section>
        <section className='col-span-3 order-1 md:order-none'>

          <div
            style={{ backgroundColor: "var( --image-base-about)" }}
            className='
          mx-auto relative mt-10
          h-[360px] w-[300px]
          xl:h-[440px] xl:w-[400px]
        '
          >
            <Image src={IntroductionImage} alt='About' className='
          absolute
          h-[340px] w-[200px]
          xl:h-[440px] xl:w-[290px] 
          left-10 bottom-10 
          xl:left-12 
          ' />
          </div>

        </section>
      </div>
    </div>
  )
}

export default Introduction