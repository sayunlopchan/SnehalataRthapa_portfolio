'use client';

import { createClient } from 'contentful';
import Image from 'next/image';
import Link from 'next/link';

async function fetchBlogById(id) {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntry(id); // Fetch entry by ID
  return res;
}

const page = async ({ params }) => {
  const { blogdata } = params;

  // Fetch blog details
  const blog = await fetchBlogById(blogdata);
  const { title, content, thumbnail } = blog.fields;
  const imageUrl = thumbnail?.fields?.file?.url;

  return (
    <div className="px-10">
      <nav className="w-full flex justify-center items-center">
        <ul className="flex gap-x-5 mt-5" style={{ color: 'var(--secondary-text)' }}>
          <li><Link href={'/'}>Home</Link></li>
          <li><Link href={'/about'}>About</Link></li>
          <li><Link href={'/gallery'}>Gallery</Link></li>
          <li><Link href={'/blog'}>Blog</Link></li>
          <li><Link href={'/contact'}>Contact</Link></li>
        </ul>
      </nav>

      <div className="mb-10">
        <h1 className="font-bold text-2xl">{title}</h1>
        <p className="text-sm">Published on: {new Date(blog.sys.createdAt).toLocaleDateString()}</p>
      </div>

      {imageUrl && (
        <div className="bg-gray-300 h-[400px]">
          <Image
            src={`https:${imageUrl}`}
            alt={title}
            fill
            className="rounded-md object-cover"
          />
        </div>
      )}

      <div className="mt-10">
        <h2 className="font-semibold text-xl">Content</h2>
        <div className="text-gray-700">{content}</div>
      </div>
    </div>
  );
};

export default page;
