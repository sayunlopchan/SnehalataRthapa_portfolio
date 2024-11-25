"use client";
import { createClient } from 'contentful';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';  // Import the useParams hook

async function fetchBlogBySlug(slug) {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({
    content_type: 'sayunPosts',
    'fields.slug': slug, // Fetch by the slug
  });

  return res.items[0]; // Assuming only one blog matches the slug
}

const Page = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlog = async () => {
      const fetchedBlog = await fetchBlogBySlug(slug);
      setBlog(fetchedBlog);
      setLoading(false);
    };

    loadBlog();
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!blog) {
    return <div>Blog not found</div>;
  }

  const { title, content, featureImage, thumbnail } = blog.fields;
  const imageUrl = featureImage?.fields?.file?.url;
  const thumbnailUrl = thumbnail?.fields?.file?.url;

  return (
    <div className="px-10 space-y-10">
      {/* Navigation */}
      <nav className="w-full flex justify-center items-center">
        <ul className="flex gap-x-5 mt-5" style={{ color: "var(--secondary-text)" }}>
          <li><Link href={'/'}>Home</Link></li>
          <li><Link href={'/about'}>About</Link></li>
          <li><Link href={'/gallery'}>Gallery</Link></li>
          <li><Link href={'/blog'}>Blog</Link></li>
          <li><Link href={'/contact'}>Contact</Link></li>
        </ul>
      </nav>

      {/* Blog Content */}
      <div className="mb-10">
        {/* Check if featureImage exists */}
        {thumbnailUrl && (
          <Image
            src={`https:${thumbnailUrl}`}
            alt={title}
            width={800}
            height={100}
            className="rounded-md object-cover"
            priority
          />
        )}

        <div className="mt-5">
          <h1 className="text-3xl font-bold">{title}</h1>
          <div className="mt-5" dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </div>
  );
};

export default Page;
