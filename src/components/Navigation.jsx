import Link from 'next/link';
import React, { useState } from 'react'


const Navigation = () => {

  const [openNav, setOpenNav] = useState(false);

  const handleOpen = () => {
    setOpenNav(prev => !prev);
  };


  return (
    <div className='flex justify-between md:px-5 h-10 items-center sticky top-0 z-50 py-8 lg:py-5 '>

      <div className='bg-transparent'></div>

      <div className='space-x-4 max-md:hidden' style={{ color: "var(--secondary-text)" }}>
        <Link href={'/about'}>About</Link>
        <Link href={'/gallery'}>Gallery</Link>
        <Link href={'/blog'}>Blog</Link>
        <Link href={'/contact'}>Contact</Link>
      </div>

      <div className='order-2 p-5 md:hidden'>
        <div className='flex flex-col gap-1' onClick={handleOpen}>
          <span className={`transition-all duration-300  border-2 border-black w-9 bg-black ${openNav ? 'rotate-[-30deg] ' : ''}`}></span>
          <span className={`transition-all duration-300  border-2 border-black w-9 bg-black ${openNav ? 'rotate-[30deg]' : ''}`}></span>
          <span className={`transition-all duration-300  border-2 border-black w-9 bg-black ${openNav ? ' rotate-[-30deg] ' : ''}`}></span>
        </div>
      </div>

      <div
        className={`order-1 md:hidden transition-all duration-300 w-full bg-b/50 backdrop-blur-lg p-5  ${openNav ? 'translate-y-0' : '-translate-y-20'
          }`}
      >
        <ul className='grid grid-cols-2' style={{ color: "var(--secondary-text)" }}>
          <Link href={'/about'}>About</Link>
          <Link href={'/gallery'}>Gallery</Link>
          <Link href={'/blog'}>Blog</Link>
          <Link href={'/contact'}>Contact</Link>
        </ul>
      </div>



    </div >
  )
}
Navigation.displayName = 'Navigation';
export default Navigation