import React from 'react'

const AboutMe = () => {
  return (
    <div className='mt-5 lg:mt-0 lg:w-full w-[290px] lg:h-[200px] h-[350px] border border-gray-200 rounded-md'>
      <div className='text-xl font-bold pt-3 pl-5'>About Me</div>
      <p className="lg:w-[670px] w-[270px] pl-5 pt-2 text-pretty lg:text-[110%]  text-wrap text-sm text-justify text-gray-500">
        I’m a full-stack blockchain developer skilled in React, Next.js, Tailwind CSS, and Solidity. I build decentralized applications (DApps) with a focus on seamless user experiences and robust functionality.
      </p>
      <p className="lg:w-[670px] w-[270px] pl-5 lg:pt-2 pt-5 font-sans lg:text-[110%] text-wrap text-sm text-pretty text-justify text-gray-500">
        I work with Ethereum for smart contracts and explore enterprise solutions using Hyperledger Fabric. Passionate about technology, I enjoy creating innovative solutions and tackling challenges in web and blockchain development.
      </p>

    </div>
  )
}

export default AboutMe
