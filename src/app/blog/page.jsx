
import Link from 'next/link'
import Image from 'next/image';


const page = () => {


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
        <h1 className='text-2xl font-bold p-2'>Blog Posts</h1>
        <div className='grid grid-cols-1 gap-4'>
          <div className='w-full text-center my-20'>
            <h2>No Blog Post!</h2>
          </div>

        </div>
      </div>


    </div>
  );
};

export default page;
