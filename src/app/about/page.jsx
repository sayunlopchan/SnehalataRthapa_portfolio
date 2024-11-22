import Image from 'next/image'
import React from 'react'

import aboutImg from '../../assets/user-images/about-img.jpg'
import aboutImg1 from '../../assets/user-images/about-img-1.jpg'
import aboutImg2 from '../../assets/user-images/about-img-2.jpg'
import aboutImg3 from '../../assets/user-images/about-img-3.jpg'




const page = () => {
  return (
    <div className='px-5'>
      <h1>About</h1>

      {/* TEXTS */}
      <div className='grid grid-cols-4 w-full md:h-[300px]'>

        <section className='bg-transparent max-md:hidden'></section>

        <section className='flex justify-center items-center'>
          <h1 className='uppercase font-bold text-3xl'>Lorem ipsum dolor sit amet.</h1>
        </section>

        <section className='flex justify-center items-center'>
          <p className='text-sm mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas autem sapiente fugit nostrum provident quas mollitia eum, magni explicabo vel?</p>
        </section>

        <section className='bg-transparent max-md:hidden'></section>

      </div>
      {/* TEXTS */}

      {/* CARDS */}
      <div
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:h-[400px] m-10'>

        <section className=' flex flex-col gap-3 justify-center items-center'>
          <div className='bg-gray-300 h-[260px] w-[200px]'>
            <Image src={aboutImg} alt='' className='object-cover size-full' />
          </div>
          <div className='bg-gray-300 w-[200px] h-10 flex justify-center items-center'>
            <h2>LOREM LOREM</h2>
          </div>

        </section>

        <section className=' flex flex-col gap-3 justify-center items-center mt-10'>
          <div className='bg-gray-300 h-[260px] w-[200px]'>
            <Image src={aboutImg1} alt='' className='object-cover size-full' />
          </div>
          <div className='bg-gray-300 w-[200px] h-10 flex justify-center items-center'>
            <h2>LOREM LOREM</h2>
          </div>

        </section>

        <section className=' flex flex-col gap-3 justify-center items-center mb-20'>
          <div className='bg-gray-300 h-[260px] w-[200px]'>
            <Image src={aboutImg2} alt='' className='object-cover size-full' />
          </div>
          <div className='bg-gray-300 w-[200px] h-10 flex justify-center items-center'>
            <h2>LOREM LOREM</h2>
          </div>

        </section>

        <section className=' flex flex-col gap-3 justify-center items-center mt-20'>
          <div className='bg-gray-300 h-[260px] w-[200px]'>
            <Image src={aboutImg3} alt='' className='object-cover size-full' />
          </div>
          <div className='bg-gray-300 w-[200px] h-10 flex justify-center items-center'>
            <h2>LOREM LOREM</h2>
          </div>

        </section>


      </div>
      {/* CARDS */}

    </div>
  )
}

export default page