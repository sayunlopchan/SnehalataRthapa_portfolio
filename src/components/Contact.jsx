import Image from 'next/image'
import React from 'react'


import image from '../assets/user-images/user-image-6.jpg'

const Contact = () => {
  return (
    <div
      className='mb-20'>
      <h2 className='font-bold text-2xl my-3 uppercase'>Contact</h2>

      <div className='grid grid-cols-1 lg:grid-cols-3'>

        <div className='col-span-2 order-2 lg:order-none py-20 mx-auto'>
          <div
            className='
            mx-auto
            h-[260px] w-[300px]
            sm:h-[300px] sm:w-[450px]
            md:w-[400px]
            lg:w-[460px] lg:h-[300px]
            relative
          '
            style={{ backgroundColor: "var(--image-base-contact)" }}
          >
            <div
              className='
               absolute
               h-[200px] w-[300px]
               sm:h-[240px] sm:w-[400px]
               md:w-[380px]
               lg:h-[240px] lg:w-[410px]     
             bg-gray-500
               right-5 top-7
               sm:right-20
               md:right-10
               lg:right-20
               
             '>
              <Image
                src={image}
                alt='snehalata r thapa image'
                className='size-full object-cover'
              />
            </div>
          </div>
        </div>

        <div className='col-span-1 order-1 lg:order-none  p-2'>
          <form className=" p-6 w-full max-w-md mx-auto">

            <label className="block mb-4">
              <span className="text-gray-700 font-medium">Full Name</span>
              <input
                type="text"
                name="fullName"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
                placeholder="Enter your full name"
                required
              />
            </label>

            <label className="block mb-4">
              <span className="text-gray-700 font-medium">Email</span>
              <input
                type="email"
                name="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </label>

            <label className="block mb-4">
              <span className="text-gray-700 font-medium">Message</span>
              <textarea
                name="message"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
                placeholder="Enter your message"
                rows="4"
                required
              ></textarea>
            </label>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-300 focus:outline-none font-medium"
            >
              Submit
            </button>
          </form>

        </div>

      </div>
    </div>
  )
}

export default Contact