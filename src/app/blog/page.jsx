import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='px-10 space-y-10'>
      <nav className="w-full flex justify-center items-center">
        <ul className="flex gap-x-5 mt-5" style={{ color: "var(--secondary-text)" }}>
          <li><Link href={'/'} >Home</Link></li>
          <li><Link href={'/about'} >About</Link></li>
          <li><Link href={'/gallery'} >Gallery</Link></li>
          <li><Link href={'/blog'} >Blog</Link></li>
          <li><Link href={'/contact'} >Contact</Link></li>
        </ul>
      </nav>


      <div>
        Read My Blogs
      </div>

      {/* blog contents */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 max-lg:place-items-center justify-items-center gap-5">
        <div
          className="
          h-[220px] w-[300px] bg-gray-300
          sm:h-[240px] sm:w-[380px] 
          md:h-[280px] md:w-[420px] 
          lg:h-[320px] lg:w-[460px] 
          xl:w-full
          relative rounded-md animate-pulse
          ">
          <div className='w-2/3 h-10 bg-gray-400 absolute bottom-0 left-0 rounded-md ml-2 mb-2 animate-pulse'></div>
        </div>

      </div>





    </div>
  )
}

export default page