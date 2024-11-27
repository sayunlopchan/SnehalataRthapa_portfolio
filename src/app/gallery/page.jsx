import React from 'react'
import Script from 'next/script';
import Nav from '../../components/Nav';

const page = () => {
  return (
    <div>
      <Nav />

      <div className='px-5'>

        <h2 className="font-bold text-2xl uppercase">Gallery</h2>



        {/* Elfsight Widget with Next.js Script Component */}
        <Script
          src="https://static.elfsight.com/platform/platform.js"
          strategy="afterInteractive"
          async
        />
        <div
          className="elfsight-app-6a4cd794-3a9a-47ec-a126-2ea72fe7499b"
          data-elfsight-app-lazy
        ></div>
      </div>


    </div>
  )
}

export default page