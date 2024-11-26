import Link from 'next/link';
import { client } from '../../../lib/contentfulClient';
import React from 'react';
import Image from 'next/image';




// Function to extract plain text from a Contentful rich-text document
const extractTextFromMethod = (method) => {
  if (!method || !method.content) return ''; // Return empty string if there's no content

  return method.content.map((node) => {
    if (node.nodeType === 'text') {
      return node.value; // Extract the text value
    }
    // Recursively extract text from child nodes if any
    if (node.content) {
      return extractTextFromMethod(node);
    }
    return ''; // Default empty string if no text is found
  }).join(''); // Join the array into a single string
};

// Fetch the single blog post based on the slug
const fetchBlogPostBySlug = async (slug) => {
  try {
    const response = await client.getEntries({
      content_type: 'sayunPosts',
      'fields.slug': slug,
    });

    return response.items[0]; // Return the first item (only one post should match)
  } catch (error) {
    console.error('Error fetching the blog post:', error);
    return null; // Return null if there's an error
  }
};
// Await params to extract the slug
const page = async ({ params }) => {
  const { slug } = await params;

  const post = await fetchBlogPostBySlug(slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  // Extracting the necessary data from the post fields
  const { title, thumbnail, featuredImage, body, method } = post.fields;
  const thumbnailUrl = thumbnail?.fields?.file?.url; // Ensure thumbnail exists and has a URL
  const featuredImageUrl = featuredImage?.fields?.file?.url; // Ensure featuredImage exists and has a URL
  const methodText = extractTextFromMethod(method); // Extract the text from the `method` object

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

      <div className='p-10'>
        <h1 className='text-2xl font-bold'>{title}</h1>
        {featuredImageUrl && (
          <div className='
        mx-auto
        h-[180px] w-full
        sm:h-[240px] sm:w-[560px]
        lg:h-[290px] lg:w-2/3
        overflow-hidden'>
            <Image
              src={`https:${featuredImageUrl}`}
              alt={title}
              width={750}
              height={400}
              priority
              className="object-cover h-auto w-auto mx-auto"
            />
          </div>
        )}
        {methodText && (
          <p>{methodText}</p>
        )}
      </div>
    </div>
  )
}

export default page






// import Link from 'next/link';
// import { client } from '../../../lib/contentfulClient';
// import React from 'react';
// import Image from 'next/image';

// // Function to extract plain text from a Contentful rich-text document
// const extractTextFromMethod = (method) => {
//   if (!method || !method.content) return ''; // Return empty string if there's no content

//   return method.content.map((node) => {
//     if (node.nodeType === 'text') {
//       return node.value; // Extract the text value
//     }
//     // Recursively extract text from child nodes if any
//     if (node.content) {
//       return extractTextFromMethod(node);
//     }
//     return ''; // Default empty string if no text is found
//   }).join(''); // Join the array into a single string
// };

// // Fetch the single blog post based on the slug
// const fetchBlogPostBySlug = async (slug) => {
//   try {
//     const response = await client.getEntries({
//       content_type: 'sayunPosts',
//       'fields.slug': slug,
//     });

//     return response.items[0]; // Return the first item (only one post should match)
//   } catch (error) {
//     console.error('Error fetching the blog post:', error);
//     return null; // Return null if there's an error
//   }
// };

// // Await params to extract the slug
// const page = async ({ params }) => {
//   const { slug } = await params;

//   const post = await fetchBlogPostBySlug(slug);

//   if (!post) {
//     return <div>Post not found</div>;
//   }

//   // Extracting the necessary data from the post fields
//   const { title, thumbnail, featuredImage, body, method } = post.fields;
//   const thumbnailUrl = thumbnail?.fields?.file?.url; // Ensure thumbnail exists and has a URL
//   const featuredImageUrl = featuredImage?.fields?.file?.url; // Ensure featuredImage exists and has a URL
//   const methodText = extractTextFromMethod(method); // Extract the text from the `method` object

//   return (
//     <div className="post-detail">
//       <nav className="w-full flex justify-center items-center">
//         <ul className="flex gap-x-5 mt-5" style={{ color: "var(--secondary-text)" }}>
//           <li><Link href={'/'} className='hover-border'>Home</Link></li>
//           <li><Link href={'/about'} className='hover-border'>About</Link></li>
//           <li><Link href={'/gallery'} className='hover-border'>Gallery</Link></li>
//           <li><Link href={'/blog'} className='active hover-border'>Blog</Link></li>
//           <li><Link href={'/contact'} className='hover-border'>Contact</Link></li>
//         </ul>
//       </nav>

//       <div className="p-10">
//         <h1>{title}</h1>

//         {/* Featured Image */}
//         {featuredImageUrl && (
//           <div className="relative mb-5">
//             <Image
//               src={`https:${featuredImageUrl}`}
//               alt={title}
//               width={750}
//               height={400}
//               priority
//               className="object-cover h-auto w-auto"
//             />
//           </div>
//         )}

//         {/* Thumbnail Image */}
//         {thumbnailUrl && (
//           <div className="relative mb-5">
//             <Image
//               src={`https:${thumbnailUrl}`}
//               alt={title}
//               width={750}
//               height={400}
//               priority
//               className="object-cover h-auto w-auto"
//             />
//           </div>
//         )}

//         {/* Body Content */}
//         <div className="post-content">
//           <div
//             className="text-lg"
//             dangerouslySetInnerHTML={{
//               __html: body || '<p>No content available</p>', // Fallback for empty body
//             }}
//           />
//         </div>

//         {/* Displaying Text Inside the 'method' */}
//         {methodText && (
//           <div className="method-text mt-10">
//             <h2>Method</h2>
//             <p>{methodText}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default page;
