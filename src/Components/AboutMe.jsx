import React from 'react';

const AboutMe = () => {
  return (
    <div className="mt-5 lg:mt-0 w-[290px] lg:w-full lg:h-auto h-auto border border-gray-200 rounded-md p-5">
      <h1 className="text-2xl lg:text-3xl font-bold">About Me</h1>
      <p className="mt-3 w-full lg:w-full w-[280px] text-sm lg:text-base text-justify leading-relaxed text-gray-500">
        I’m a full-stack blockchain developer skilled in React, Next.js, Tailwind CSS, and Solidity. I build decentralized applications (DApps) with a focus on seamless user experiences and robust functionality.
      </p>
      <p className="mt-3 text-sm lg:w-full w-[250px] lg:text-base text-justify leading-relaxed text-gray-500">
        I work with Ethereum for smart contracts and explore enterprise solutions using Hyperledger Fabric. Passionate about technology, I enjoy creating innovative solutions and tackling challenges in web and blockchain development.
      </p>
    </div>
  );
};

export default AboutMe;
