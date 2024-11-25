import Image from 'next/image'
import React from 'react'

import image1 from '../../assets/user-images/about-img-1.jpg'
import image2 from '../../assets/user-images/about-img-2.jpg'
import image3 from '../../assets/user-images/about-img-3.jpg'
import image4 from '../../assets/user-images/footer-image-1.jpg'
import image5 from '../../assets/user-images/footer-image-2.jpg'
import image6 from '../../assets/user-images/hero-image-1.jpg'
import Link from 'next/link'


const page = () => {
  return (
    <div className='px-5 lg:px-10'>
      <nav className="w-full flex justify-center items-center">
        <ul className="flex gap-x-5 mt-5" style={{ color: "var(--secondary-text)" }}>
          <li><Link href={'/'} className='hover-border'>Home</Link></li>
          <li><Link href={'/about'} className='hover-border'>About</Link></li>
          <li><Link href={'/gallery'} className='active hover-border' >Gallery</Link></li>
          <li><Link href={'/blog'} className='hover-border'>Blog</Link></li>
          <li><Link href={'/contact'} className='hover-border'>Contact</Link></li>
        </ul>
      </nav>

      <h2 className="font-bold text-2xl my-5 uppercase">Gallery</h2>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 md:p-10 lg:p-20">
        {/* <!-- Column #1 --> */}
        <div class="grid gap-4">
          <div>
            <Image class="w-full rounded-xl shadow" src={image1} width="232" height="290" alt="Image 01" />
          </div>
          <div>
            <Image class="w-full rounded-xl shadow" src={image2} width="232" height="290" alt="Image 02" />
          </div>
          <div>
            <Image class="w-full rounded-xl shadow" src={image3} width="232" height="174" alt="Image 03" />
          </div>
        </div>
        {/* <!-- Column #2 --> */}
        <div class="grid gap-4">
          <div>
            <Image class="w-full rounded-xl shadow" src={image4} width="232" height="155" alt="Image 04" />
          </div>
          <div>
            <Image class="w-full rounded-xl shadow" src={image5} width="232" height="349" alt="Image 05" />
          </div>
          <div>
            <Image class="w-full rounded-xl shadow" src={image6} width="232" height="250" alt="Image 06" />
          </div>
        </div>
        {/* <!-- Column #3 --> */}
        <div class="grid gap-4">
          <div>
            <Image class="w-full rounded-xl shadow" src={image1} width="232" height="349" alt="Image 07" />
          </div>
          <div>
            <Image class="w-full rounded-xl shadow" src={image2} width="232" height="155" alt="Image 08" />
          </div>
          <div>
            <Image class="w-full rounded-xl shadow" src={image3} width="232" height="250" alt="Image 09" />
          </div>
        </div>
        {/* <!-- Column #4 --> */}
        <div class="grid gap-4">
          <div>
            <Image class="w-full rounded-xl shadow" src={image4} width="232" height="290" alt="Image 10" />
          </div>
          <Image class="w-full rounded-xl shadow" src={image5} width="232" height="155" alt="Image 11" />
          <Image class="w-full rounded-xl shadow" src={image6} width="232" height="309" alt="Image 12" />
        </div>
      </div>
    </div>
  )
}

export default page