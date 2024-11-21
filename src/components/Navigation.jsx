import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";


const Navigation = () => {
  return (
    <div className='flex justify-between md:px-5 h-10 items-center sticky top-0 z-50 py-8 lg:py-5 '>

      <div className='bg-transparent'></div>
      <div className='space-x-4 max-md:hidden'>
        <a href="#About">About</a>
        <a href="#Achivements">Achivements</a>
        <a href="#Blog">Blog</a>
        <a href="#Contact">Contact</a>
      </div>
      <div className='p-5 md:hidden '>
        <GiHamburgerMenu size={40} />
      </div>


    </div>
  )
}

export default Navigation