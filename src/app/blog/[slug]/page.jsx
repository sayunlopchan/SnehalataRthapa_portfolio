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
      {/* Navigation-end */}

      {/* blog design */}
      <div className='p-10 space-y-3'>

        {/* Blog title */}
        <div className='
        h-10 w-[200px]
        rounded-md
        bg-gray-300'>
          {/* title here */}
        </div>
        {/* Blog title-end */}

        {/* Blog Short summary */}
        <div className='
        h-8 w-full
        rounded-md
        bg-gray-300'>
          {/* title short summary type here */}
        </div>
        {/* Blog Short summary-end */}


        {/* Blog Thumbnail */}
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
        {/* Blog Thumbnail-end */}

        {/* Blog Starting */}
        {/* starting tiitle */}
        <div className='bg-gray-300 h-10 w-32 rounded-md' />
        {/* starting tiitle-end */}


        {/* starting title paragraph */}
        <div className='bg-gray-300 h-3 w-full rounded-md' />
        <div className='bg-gray-300 h-3 w-2/5 rounded-md' />
        <div className='bg-gray-300 h-3 w-full rounded-md' />
        {/* starting title paragraph */}
        {/* Blog Starting-end */}



      </div>
      {/* blog design-end*/}

    </div>
  )
}

export default page