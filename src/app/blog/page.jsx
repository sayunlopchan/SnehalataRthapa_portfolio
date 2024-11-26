
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

          <div className='border-2 p-2'>


            <p>UI for Blog data in different stages</p>



            <h4>Stage: No data</h4>
            {/* if there is no data */}
            <div className='w-full text-center my-20'>
              <h2>No Blog Post!</h2>
            </div>
            {/* if there is no data */}


            <h4>Stage: loading data</h4>
            {/* if data loading show this */}
            <div className='space-y-2 my-5'>

              <div className='flex gap-3'>
                <div className='h-3 w-10 bg-gray-300  rounded-md animate-pulse' />
                <div className='h-3 w-10 bg-gray-300  rounded-md animate-pulse' />
              </div>

              <div className='h-5 w-40 bg-gray-300 rounded-md animate-pulse' />
              <div className='bg-gray-300 h-10 lg:h-20 w-full lg:w-[70%] rounded-md space-y-2 animate-pulse' />
            </div>
            {/* if data loading show this */}


            <h4>Stage: data loaded</h4>
            {/* if data loaded show this */}
            <div className='w-fit p-2 rounded-md border shadow-sm'>
              <p className='space-x-2 py-1' style={{ color: "var(--secondary-text)" }}>
                <span className='text-xs border px-2 py-1 rounded-md bg-gray-50'>tag1</span>
                <span className='text-xs border px-2 py-1 rounded-md bg-gray-50'>tag2</span>
              </p>
              <h1 className='font-bold text-lg'>Title Here</h1>
              <p
                className='text-sm'
                style={{ color: "var(--secondary-text)" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, dicta.</p>
            </div>
            {/* if data loaded show this */}
          </div>
        </div>
      </div>


    </div>
  );
};

export default page;
