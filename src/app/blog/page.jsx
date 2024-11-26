import Link from 'next/link'
import React from 'react'
import { client } from '../../lib/contentfulClient';
import Image from 'next/image';

// Fetch all blog posts
const fetchBlogPosts = async () => {
  try {
    const response = await client.getEntries({
      content_type: 'sayunPosts',
    });

    return response.items;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
};

const page = async () => {
  const blogPosts = await fetchBlogPosts();

  return (
    <div>
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
        <h1>Blog Posts</h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 place-items-center p-10'>
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.fields.slug}`} key={post.sys.id}>
              <div
                className='
                h-full w-full
                sm:w-[460px]
                lg:h-[280px]
                xl:h-[300px] xl:w-full
                bg-gray-400 rounded-md shadow-sm relative cursor-pointer transition-all hover:shadow-xl group overflow-hidden'
              >
                <Image
                  src={`https:${post.fields.thumbnail.fields.file.url}`}
                  alt={post.fields.title}
                  width={750}
                  height={400}
                  priority
                  className='object-cover transform group-hover:scale-105 transition-transform duration-300'
                />

                {/* Overlay with black gradient */}
                <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent'></div>

                {/* Title */}
                <div className='absolute left-0 bottom-0 p-4 text-white'>
                  <h3>{post.fields.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
