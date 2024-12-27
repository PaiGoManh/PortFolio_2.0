import React from 'react'
import Profile from './Pages/Profile'
import Home from './Pages/Home'

const App = () => {
  return (
    <div className='lg:flex lg:gap-[2%] lg:mt-[2%] mt-[10%] ml-[5%] lg:ml-[10%]'>
      <div>
        <Profile/>
      </div>
      <div>
        <Home/>
      </div>
    </div>
  )
}

export default App
