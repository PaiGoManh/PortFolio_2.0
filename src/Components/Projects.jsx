import React from 'react'
import { FaRegShareSquare } from "react-icons/fa";

const Projects = () => {
  return (
    <div className='mt-5'>
      <h1 className='text-xl font-bold mb-5'>Featured Projects</h1>
      <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-[4%] gap-4 mt-5'>
        <div className='lg:w-[330px] lg:h-[150px] w-[290px] lg:pb-0 pb-3 rounded-md border border-gray-200'>
          <h1 className='pt-3 pl-5 text-l font-bold'>ZeroCheck</h1>
          <p className='pt-3 pl-5 text-sm text-gray-500'>Verify Age and Identity, Safely and Privately, with Zero-Knowledge Proofs.</p>
          <div className='flex items-center justify-between text-sm pt-5 mx-5'>
            <div className='flex items-center gap-2'>
              <div className='w-3 h-3 bg-yellow-400 rounded-full'></div>
              <div className='text-gray-500'>Javascript</div>
            </div>
            <div className='flex items-center gap-2'>
              <div>View Project</div>
              <div><FaRegShareSquare /></div>
            </div>
          </div>
        </div>

        <div className='lg:w-[330px] lg:h-[150px] w-[290px] lg:pb-0 pb-3 rounded-md border border-gray-200'>
          <h1 className='pt-3 pl-5 text-l font-bold'>Harvest2Home</h1>
          <p className='pt-3 pl-5 text-sm text-gray-500 pr-4'>A supply chain management platform built with Hyperledger Fabric</p>
          <div className='flex items-center justify-between text-sm pt-5 mx-5'>
            <div className='flex items-center gap-2'>
              <div className='w-3 h-3 bg-yellow-400 rounded-full'></div>
              <div className='text-gray-500'>Javascript</div>
            </div>
            <div className='flex items-center gap-2'>
              <div>View Project</div>
              <div><FaRegShareSquare /></div>
            </div>
          </div>
        </div>

        <div className='lg:w-[330px] lg:h-[150px] w-[290px] lg:pb-0 pb-3  rounded-md border border-gray-200'>
          <h1 className='pt-3 pl-5 text-l font-bold'>Daapzon</h1>
          <p className='pt-3 pl-5 text-sm text-gray-500'>A decentralized clone of Amazon built on Ethereum</p>
          <div className='flex items-center justify-between text-sm pt-5 mx-5'>
            <div className='flex items-center gap-2'>
              <div className='w-3 h-3 bg-yellow-400 rounded-full'></div>
              <div className='text-gray-500'>Javascript</div>
            </div>
            <div className='flex items-center gap-2'>
              <div>View Project</div>
              <div><FaRegShareSquare /></div>
            </div>
          </div>
        </div>

        <div className='lg:w-[330px] lg:h-[150px] w-[290px] lg:pb-0 pb-3 rounded-md border border-gray-200'>
          <h1 className='pt-3 pl-5 text-l font-bold'>Certi Dapp</h1>
          <p className='pt-3 pl-5 text-sm text-gray-500'>Digital certificate management DApp built with Solidity and Ethereum</p>
          <div className='flex items-center justify-between text-sm pt-5 mx-5'>
            <div className='flex items-center gap-2'>
              <div className='w-3 h-3 bg-yellow-400 rounded-full'></div>
              <div className='text-gray-500'>Javascript</div>
            </div>
            <div className='flex items-center gap-2'>
              <div>View Project</div>
              <div><FaRegShareSquare /></div>
            </div>
          </div>
        </div>

        <div className='lg:w-[330px] lg:h-[150px] w-[290px] lg:pb-0 pb-3 rounded-md border border-gray-200'>
          <h1 className='pt-3 pl-5 text-l font-bold'>EasySplit</h1>
          <p className='pt-3 pl-5 text-sm text-gray-500'>A MERN Stack application for managing and splitting group expenses</p>
          <div className='flex items-center justify-between text-sm pt-5 mx-5'>
            <div className='flex items-center gap-2'>
              <div className='w-3 h-3 bg-yellow-400 rounded-full'></div>
              <div className='text-gray-500'>Javascript</div>
            </div>
            <div className='flex items-center gap-2'>
              <div>View Project</div>
              <div><FaRegShareSquare /></div>
            </div>
          </div>
        </div>

        <div className='lg:w-[330px] lg:h-[150px] w-[290px] lg:pb-0 pb-3 rounded-md border border-gray-200'>
          <h1 className='pt-3 pl-5 text-l font-bold'>Quizapp</h1>
          <p className='pt-3 pl-5 text-sm text-gray-500'>Quiz application buit with NextJs </p>
          <div className='flex items-center justify-between text-sm pt-5 mx-5'>
            <div className='flex items-center gap-2'>
              <div className='w-3 h-3 bg-yellow-400 rounded-full'></div>
              <div className='text-gray-500'>Javascript</div>
            </div>
            <div className='flex items-center gap-2'>
              <div>View Project</div>
              <div><FaRegShareSquare /></div>
            </div>
          </div>
        </div>

        <div className='lg:w-[330px] lg:h-[150px] w-[290px] lg:pb-0 pb-3 rounded-md border border-gray-200'>
          <h1 className='pt-3 pl-5 text-l font-bold'>NillQ</h1>
          <p className='pt-3 pl-5 text-sm text-gray-500'>A medical appointment booking system for hospitals and home clinics</p>
          <div className='flex items-center justify-between text-sm pt-5 mx-5'>
            <div className='flex items-center gap-2'>
              <div className='w-3 h-3 bg-yellow-400 rounded-full'></div>
              <div className='text-gray-500'>Javascript</div>
            </div>
            <div className='flex items-center gap-2'>
              <div>View Project</div>
              <div><FaRegShareSquare /></div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Projects
