import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = ({ params }) => {
  return (
    <div className='px-10'>
      <nav className="w-full flex justify-center items-center">
        <ul className="flex gap-x-5 mt-5" style={{ color: "var(--secondary-text)" }}>
          <li><Link href={'/'} >Home</Link></li>
          <li><Link href={'/about'} >About</Link></li>
          <li><Link href={'/gallery'} >Gallery</Link></li>
          <li><Link href={'/blog'} >Blog</Link></li>
          <li><Link href={'/contact'} >Contact</Link></li>
        </ul>
      </nav>
      <div className='mb-10'>
        <h1 className='font-bold text-2xl'>Title {params.blogdata}</h1>
        <p className='text-sm'>Reference text</p>
      </div>
      <div className='bg-gray-300 h-[400px]'>
        {/* <Image src={''} alt='img' className='bg-cover' /> */}
      </div>

      <h2>Titel 2</h2>

      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, incidunt inventore assumenda quam, cupiditate expedita aliquam possimus est ipsum quidem nesciunt libero impedit perferendis deleniti harum sed reiciendis nihil amet.</p>
      </div>

      <div className='px-10'>
        <section>
          {/* <Image src={''} alt='img' className='h-[400px] w-full' /> */}
        </section>
        <section>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi doloribus minus porro qui rem quae nulla! Ipsum praesentium culpa sed, id, placeat quo delectus veniam mollitia doloremque, pariatur dolorem quis.</p>
        </section>
      </div>
    </div>
  )
}

export default page