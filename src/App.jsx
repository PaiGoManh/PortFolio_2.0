import React from 'react'
import Profile from './Pages/Profile'
import Home from './Pages/Home'

const App = () => {
  return (
    <div className='flex mx-[20%] gap-[2%] mt-[3%]'>
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
