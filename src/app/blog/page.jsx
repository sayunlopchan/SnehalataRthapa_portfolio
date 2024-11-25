import { createClient } from 'contentful'
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

async function fetchBlogs() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_API_KEY,
  });

  const res = await client.getEntries({ content_type: 'sayunPosts' });
  return res.items;
}

const page = async () => {
  const blogs = await fetchBlogs();

  return (
    <div className='px-10 space-y-10'>
      <nav className="w-full flex justify-center items-center">
        <ul className="flex gap-x-5 mt-5" style={{ color: "var(--secondary-text)" }}>
          <li><Link href={'/'} className='hover-border'>Home</Link></li>
          <li><Link href={'/about'} className='hover-border'>About</Link></li>
          <li><Link href={'/gallery'} className='hover-border'>Gallery</Link></li>
          <li><Link href={'/blog'} className='active hover-border'>Blog</Link></li>
          <li><Link href={'/contact'} className='hover-border'>Contact</Link></li>
        </ul>
      </nav>


      <div>
        Read My Blogs
      </div>

      {/* blog contents */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 max-lg:place-items-center justify-items-center gap-5">
        {
          blogs.map((blogs, idx) => {
            return <div
              key={idx}
              className="h-[220px] w-[300px] bg-gray-300 sm:h-[240px] sm:w-[380px] md:h-[280px] md:w-[420px] lg:h-[320px] lg:w-[460px] xl:w-full relative rounded-md animate-pulse
          ">
              <Image src={blogs.fields} alt={blogs.fields.thumbnail} className='object-cover' />
              <div className='w-2/3 h-10 bg-gray-400 absolute bottom-0 left-0 rounded-md ml-2 mb-2 animate-pulse'>
                {blogs.fields.title}
              </div>
            </div>
          })
        }
      </div>





    </div>
  )
}

export default page