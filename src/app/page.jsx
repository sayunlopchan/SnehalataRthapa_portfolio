import React from 'react'

import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Introduction from '../components/Introduction'
import Founded from '../components/Founded'
import Associated from '../components/Associated'
import Contact from '../components/Contact'
import MoreLinks from '../components/MoreLinks'

const page = () => {
  return (
    <div
      className='
      px-5
      md:space-y-5
      lg:px-10
    '>
      <Navigation />
      <Hero />
      <Introduction />
      <Founded />
      <Associated />
      <Contact />
      <MoreLinks />
    </div>
  )
}

export default page