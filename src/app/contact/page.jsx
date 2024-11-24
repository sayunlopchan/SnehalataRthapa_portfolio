import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <nav className="w-full flex justify-center items-center">
        <ul className="flex gap-x-5 mt-5" style={{ color: "var(--secondary-text)" }}>
          <li><Link href={'/'} >Home</Link></li>
          <li><Link href={'/about'} >About</Link></li>
          <li><Link href={'/gallery'} >Gallery</Link></li>
          <li><Link href={'/blog'} >Blog</Link></li>
          <li><Link href={'/contact'} >Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default page