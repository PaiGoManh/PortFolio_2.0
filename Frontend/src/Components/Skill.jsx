import React from 'react';

const Skill = () => {
  return (
    <div className="mt-5 lg:pt-5 pt-5 px-4 lg:px-8 lg:w-full h-auto border border-gray-200 rounded-md">
      <h1 className="text-xl font-bold">Skills</h1>
      <div className="mt-5 lg:pb-5 pb-5 grid grid-cols-3 lg:grid-cols-3 gap-4 lg:text-sm text-xs font-bold">
        <div className="w-full h-8 bg-gray-100 rounded-md flex items-center justify-center">HTML</div>
        <div className="w-full h-8 bg-gray-100 rounded-md flex items-center justify-center">CSS</div>
        <div className="w-full h-8 bg-gray-100 rounded-md flex items-center justify-center">JavaScript</div>
        <div className="w-full h-8 bg-gray-100 rounded-md flex items-center justify-center">ReactJs</div>
        <div className="lg:w-[89px] w-full h-8 bg-gray-100 rounded-md flex items-center justify-center">TailwindCss</div>
        <div className=" lg:ml-2 ml-0 w-full h-8 bg-gray-100 rounded-md flex items-center justify-center">NextJs</div>
        <div className="w-full h-8 bg-gray-100 rounded-md flex items-center justify-center">MongoDB</div>
        <div className="w-full h-8 bg-gray-100 rounded-md flex items-center justify-center">Express</div>
        <div className="w-full h-8 bg-gray-100 rounded-md flex items-center justify-center">NodeJs</div>
        <div className="w-full h-8 bg-gray-100 rounded-md flex items-center justify-center">Docker</div>
        <div className="w-full h-8 bg-gray-100 rounded-md flex items-center justify-center">Solidity</div>
        <div className="w-full h-8 bg-gray-100 rounded-md flex items-center justify-center">Ethereum</div>
        <div className="w-[150px] h-8 bg-gray-100 rounded-md flex items-center justify-center">
          HyperLedger<span className="ml-1">Fabric</span>
        </div>
      </div>
    </div>
  );
};

export default Skill;
