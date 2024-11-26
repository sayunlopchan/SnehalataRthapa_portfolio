import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      {/* Navigation */}
      <nav className="w-full flex justify-center items-center">
        <ul className="flex gap-x-5 mt-5" style={{ color: "var(--secondary-text)" }}>
          <li><Link href={'/'} className='hover-border'>Home</Link></li>
          <li><Link href={'/about'} className='hover-border'>About</Link></li>
          <li><Link href={'/gallery'} className='hover-border'>Gallery</Link></li>
          <li><Link href={'/blog'} className='active hover-border'>Blog</Link></li>
          <li><Link href={'/contact'} className='hover-border'>Contact</Link></li>
        </ul>
      </nav>
      {/* Navigation */}

      {/* blog design */}
      <div className='p-10 space-y-5'>


        <div className='
        h-10 w-[200px]
        rounded-md
        bg-gray-300'>
          {/* title here */}
        </div>
        <div className='
        h-8 w-full
        rounded-md
        bg-gray-300'>
          {/* title short summary type here */}
        </div>



        <div className='
        h-[200px] w-full
        sm:h-[260px]
        md:h-[340px] md:w-[600px]
        lg:h-[390px] lg:w-[800px]


        mx-auto
        rounded-md
        bg-gray-300
        sm:bg-gray-400
        md:bg-gray-500
        lg:bg-gray-600
        xl:bg-gray-700
        '>
          {/* thumbnail image here */}
        </div>





      </div>
      {/* blog design */}

    </div>
  )
}

export default page