
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


          {/* if data loading show this */}
          <div className='space-y-2 my-5'>
            <div className='h-5 w-40 bg-gray-300  rounded-md' />
            <div className='bg-gray-300 h-10 lg:h-20 w-full lg:w-[70%] rounded-md space-y-2' />
          </div>
          {/* if data loading show this */}


          {/* if data loaded show this */}
          <div className='w-fit p-2 rounded-md border shadow-sm'>
            <h1 className='font-bold text-lg'>Title Here</h1>
            <p
              className='text-sm'
              style={{ color: "var(--secondary-text)" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, dicta.</p>
          </div>
          {/* if data loaded show this */}

        </div>
      </div>


    </div>
  );
};

export default page;
