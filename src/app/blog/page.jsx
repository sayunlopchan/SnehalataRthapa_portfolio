"use client"
import Link from 'next/link'
import { useEffect, useState } from 'react';
import Nav from '../../components/Nav';

const Page = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Nav />
      <div className='px-5'>
        <h1 className='text-2xl font-bold'>Blog Posts</h1>
        <div className='grid grid-cols-1 gap-4'>
          {
            loading ?
              <div className='space-y-2 my-5'>
                <div className='flex gap-3'>
                  <div className='h-3 w-10 bg-gray-300 rounded-md animate-pulse' />
                  <div className='h-3 w-10 bg-gray-300 rounded-md animate-pulse' />
                </div>
                <div className='h-5 w-40 bg-gray-300 rounded-md animate-pulse' />
                <div className='bg-gray-300 h-10 lg:h-20 w-full lg:w-[70%] rounded-md space-y-2 animate-pulse' />
              </div>
              :
              <div>
                <div className='w-full text-center my-20'>
                  <h2>No Blog Post!</h2>
                </div>
              </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Page;
