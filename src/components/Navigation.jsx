import Link from 'next/link';
import React, { useState } from 'react'


const Navigation = () => {

  const [openNav, setOpenNav] = useState(false);

  const handleOpen = () => {
    setOpenNav(prev => !prev);
  };


  return (
    <div className='flex justify-between h-10 items-center sticky top-0 z-50 py-8 lg:py-5 '>

      <div className='bg-transparent'></div>

      <div className='space-x-4 max-md:hidden bg-b/50 backdrop-blur-lg p-4' style={{ color: "var(--secondary-text)" }}>
        <Link href={'/about'} className='hover-border-inline'>About</Link>
        <Link href={'/gallery'} className='hover-border-inline'>Gallery</Link>
        <Link href={'/blog'} className='hover-border-inline'>Blog</Link>
        <Link href={'/contact'} className='hover-border-inline'>Contact</Link>
      </div>

      <div className='order-2  md:hidden'>
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
        <ul className='flex gap-x-2 text-sm' style={{ color: "var(--secondary-text)" }}>
          <Link href={'/about'} className='hover-border'>About</Link>
          <Link href={'/gallery'} className='hover-border'>Gallery</Link>
          <Link href={'/blog'} className='hover-border'>Blog</Link>
          <Link href={'/contact'} className='hover-border'>Contact</Link>
        </ul>
      </div>


    </div >
  )
}
Navigation.displayName = 'Navigation';
export default Navigation