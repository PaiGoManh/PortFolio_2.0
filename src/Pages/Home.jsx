import React from 'react'
import AboutMe from '../Components/AboutMe'
import Projects from '../Components/Projects'
import Experience from '../Components/Experience'
// import Achievements from '../Components/Achievements'
// import Certifications from '../Components/Certifications'

const Home = () => {
  return (
    <div className='lg:w-[690px] lg:h-screen'>
      <AboutMe/>
      <Projects/>
      <Experience/>
      {/* <Achievements/>
      <Certifications/> */}
    </div>
  )
}

export default Home
