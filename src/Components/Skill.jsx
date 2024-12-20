import React from 'react'

const Skill = () => {
  return (
    <div className='mt-5 pt-5 pl-8 w-full h-[220px] border border-gray-200 rounded-md'>
      <h1 className='text-xl font-bold'>Skills</h1>
      <div class="mt-5 grid grid-cols-3 gap-2 text-sm font-bold">        
        <div className='w-[50px] h-5 bg-gray-100 rounded-md pl-1.5'>HTML</div>
        <div className='w-[50px] h-5 bg-gray-100 rounded-md pl-3'>CSS</div>
        <div className='w-[80px] h-5 bg-gray-100 rounded-md pl-1'>JavaScript</div>
        <div className='w-[60px] h-5 bg-gray-100 rounded-md pl-1'>ReactJs</div>
        <div className='w-[85px] h-5 bg-gray-100 rounded-md pl-1'>TailwindCss</div>
        <div className='w-[55px] h-5 bg-gray-100 rounded-md pl-1'>NextJs</div>
        <div className='w-[70px] h-5 bg-gray-100 rounded-md pl-0.5'>MongoDB</div>
        <div className='w-[60px] h-5 bg-gray-100 rounded-md pl-1'>Express</div>
        <div className='w-[55px] h-5 bg-gray-100 rounded-md pl-0.5'>NodeJs</div>
        <div className='w-[54px] h-5 bg-gray-100 rounded-md pl-1'>Docker</div>
        <div className='w-[58px] h-5 bg-gray-100 rounded-md pl-1'>Solidity</div>
        <div className='w-[70px] h-5 bg-gray-100 rounded-md pl-0.5'>Ethereum</div>
        <div className='w-[140px] h-5 bg-gray-100 rounded-md pl-1'>HyperLedger<span className='ml-1'></span>Fabric</div>
      </div>
    </div>
  )
}

export default Skill
