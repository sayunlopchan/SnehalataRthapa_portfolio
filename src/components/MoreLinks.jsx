import Image from 'next/image'
import Link from 'next/link'
import React, { forwardRef } from "react";

import footerImageOne from '../assets/user-images/footer-image-1.jpg'
import footerImageTwo from '../assets/user-images/footer-image-2.jpg'


const MoreLinks = forwardRef((props, ref) => {
  return (
    <div ref={ref} className='pb-10'>
      <h2 className='font-bold text-2xl my-3 uppercase'>More Links</h2>
      <div className='grid grid-cols-1 lg:grid-cols-5 max-md:gap-y-5'>

        <section className=' col-span-2 lg:col-span-1'>
          <h2 className='font-semibold'>Links-</h2>
          <ul style={{ color: "var(--secondary-text)" }}>
            <li><Link href={'/'}>Gallary</Link></li>
            <li><Link href={'/'}>About Me</Link></li>
            <li><Link href={'/'}>Achivements</Link></li>
            <li><Link href={'/'}>Founded</Link></li>
            <li><Link href={'/'}>Associated</Link></li>
          </ul>
        </section>

        <section className='col-span-2 lg:col-span-1'>
          <h2 className='font-semibold'>Socials-</h2>
          <ul style={{ color: "var(--secondary-text)" }}>
            <li><Link href={'/'}>Instagram</Link></li>
            <li><Link href={'/'}>Facebook</Link></li>
            <li><Link href={'/'}>Whatsapp</Link></li>
            <li><Link href={'/'}>Linkden</Link></li>
          </ul>
        </section>

        <section className='
         col-span-3 p-10 flex justify-center'>
          <div
            className='
            relative
            h-[300px] w-[280px]
            xl:h-[400px] xl:w-[340px]
           '
            style={{ backgroundColor: "var(--image-base-footer)" }}
          >
            <div
              className='
              bg-gray-500 
              absolute
              -left-10 -top-5
              h-[300px] w-[180px]
              sm:w-[200px]
              xl:h-[400px] xl:w-[230px]
              overflow-hidden
              '>
              <Image src={footerImageOne} alt='' className='object-cover' />

            </div>
            <div
              className='
            bg-gray-500 
            absolute
            -right-10 -bottom-5
            xl:-right-16
            h-[150px] w-[120px]
            sm:h-[180px] sm:w-[140px]
            xl:h-[220px] xl:w-[190px]
            overflow-hidden
            '>
              <Image src={footerImageTwo} alt='' className='object-cover' />
            </div>
          </div>
        </section>

      </div>
    </div>
  )
})

MoreLinks.displayName = 'MoreLinks';
export default MoreLinks