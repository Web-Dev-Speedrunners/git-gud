import React from 'react'
import Banner from './banner'
import RightSection from './rightsection'
import Section from './section'
import BottomSection from './bottomsection'

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Banner />
      <Section/>
      <RightSection/>
      <BottomSection/>
  </div>
  )

}

  

export default HomePage