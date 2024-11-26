"use client";
import { createClient } from 'contentful';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

async function fetchBlogs() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: 'sayunPosts' });
  return res.items;
}

const Page = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const loadBlogs = async () => {
      const fetchedBlogs = await fetchBlogs();
      setBlogs(fetchedBlogs);
      setLoading(false); // Set loading to false once data is fetched
    };

    loadBlogs();
  }, []);

  return (
    <div className="px-10 space-y-10">
      {/* Navigation */}
      <nav className="w-full flex justify-center items-center">
        <ul className="flex gap-x-5 mt-5" style={{ color: 'var(--secondary-text)' }}>
          <li><Link href={'/'} className="hover-border">Home</Link></li>
          <li><Link href={'/about'} className="hover-border">About</Link></li>
          <li><Link href={'/gallery'} className="hover-border">Gallery</Link></li>
          <li><Link href={'/blog'} className="active hover-border">Blog</Link></li>
          <li><Link href={'/contact'} className="hover-border">Contact</Link></li>
        </ul>
      </nav>

      {/* Title */}
      <div className="text-3xl font-bold">Read My Blogs</div>

      {/* Blog Contents */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 max-lg:place-items-center justify-items-center gap-5">
        {loading ? (
          Array(blogs.length).fill(0).map((_, idx) => (
            <div
              key={idx}
              className="h-[220px] w-[300px] sm:h-[240px] sm:w-[380px] md:h-[280px] md:w-[420px] lg:h-[320px] lg:w-[460px] xl:w-full relative rounded-md bg-gray-300 animate-pulse"
            >
              <div className="w-2/3 h-10 absolute bottom-0 left-0 rounded-md ml-2 mb-2 bg-gray-400 animate-pulse"></div>
            </div>
          ))
        ) : (
          blogs.map((blog, idx) => {
            const { thumbnail, title, slug } = blog.fields;
            const imageUrl = thumbnail?.fields?.file?.url;

            return (
              <div
                key={idx}
                className="h-[220px] w-[300px] bg-gray-300 sm:h-[240px] sm:w-[380px] md:h-[280px] md:w-[420px] lg:h-[320px] lg:w-[460px] xl:w-full relative rounded-md border-2 shadow-sm cursor-pointer"
              >
                {imageUrl && (
                  <Image
                    src={`https:${imageUrl}`}
                    alt={thumbnail?.fields?.title || 'Blog Thumbnail'}
                    fill
                    className="rounded-md object-cover"
                    priority
                  />
                )}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent rounded-md pointer-events-none"></div>

                {/* Blog Title */}
                <div className="absolute bottom-0 left-0 rounded-md ml-2 mb-2">
                  <h3 className="text-lg p-2 text-white">{title}</h3>
                </div>

                {/* Link to the detailed page */}
                <Link href={`/blog/${slug}`} className="absolute inset-0"></Link>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Page;
