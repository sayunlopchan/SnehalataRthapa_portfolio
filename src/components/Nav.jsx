"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation'; // Import usePathname

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);
  const pathname = usePathname(); // Get the current path

  const handleOpen = () => {
    setOpenNav((prev) => !prev);
  };

  const getLinkClassName = (href) => {
    return pathname === href ? 'hover-border-inline active' : 'hover-border-inline';
  };

  return (
    <div className="flex justify-between h-10 items-center sticky top-0 z-50 py-8 lg:py-5 px-10">
      <div className="bg-transparent"></div>

      <div
        className="space-x-4 max-md:hidden bg-b/50 backdrop-blur-lg p-4"
        style={{ color: 'var(--secondary-text)' }}
      >
        <Link href="/" className={getLinkClassName('/')}>Home</Link>
        <Link href="/about" className={getLinkClassName('/about')}>About</Link>
        <Link href="/gallery" className={getLinkClassName('/gallery')}>Gallery</Link>
        <Link href="/blog" className={getLinkClassName('/blog')}>Blog</Link>
        <Link href="/contact" className={getLinkClassName('/contact')}>Contact</Link>
      </div>

      <div className="order-2 md:hidden">
        <div className="flex flex-col gap-1" onClick={handleOpen}>
          <span
            className={`transition-all duration-300 border-2 border-black w-9 bg-black ${openNav ? 'rotate-[-30deg] ' : ''
              }`}
          ></span>
          <span
            className={`transition-all duration-300 border-2 border-black w-9 bg-black ${openNav ? 'rotate-[30deg]' : ''
              }`}
          ></span>
          <span
            className={`transition-all duration-300 border-2 border-black w-9 bg-black ${openNav ? ' rotate-[-30deg] ' : ''
              }`}
          ></span>
        </div>
      </div>

      <div
        className={`order-1 md:hidden transition-all duration-300 w-full bg-b/50 backdrop-blur-lg p-5 ${openNav ? 'translate-y-0' : '-translate-y-20'
          }`}
      >
        <ul className="flex gap-x-2 text-sm" style={{ color: 'var(--secondary-text)' }}>
          <Link href="/" className={getLinkClassName('/')}>Home</Link>
          <Link href="/about" className={getLinkClassName('/about')}>About</Link>
          <Link href="/gallery" className={getLinkClassName('/gallery')}>Gallery</Link>
          <Link href="/blog" className={getLinkClassName('/blog')}>Blog</Link>
          <Link href="/contact" className={getLinkClassName('/contact')}>Contact</Link>
        </ul>
      </div>
    </div>
  );
};

Nav.displayName = 'Nav';
export default Nav;
