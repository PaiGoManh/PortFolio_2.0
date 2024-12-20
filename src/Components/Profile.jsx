import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


const Profile = () => {
  return (
    <div className='w-full h-[630px] border border-gray-200 rounded-md'>
      <div className="pt-5 pl-[13%]">
        <img
          src="https://rahulsajeevan-portfolio.netlify.app/assets/paigo-CZHnjRY3.jpg"
          alt="Rounded Image"
          className="w-[260px] rounded-full ring-2 ring-gray-300"
        />
      </div>

      <div className='pl-8 pt-8'>
        <h1 className='text-2xl font-bold'>Rahul Sajeevan</h1>
        <h1 className='text-l text-gray-500'>Full Stack Blockchain Developer</h1>
        <p className='text-l mt-3 w-[280px] text-gray-500'>
          Hi, I'm Rahul Sajeevan. A Passionate Full-stack Blockchain
          developer based in Kerala, India 💻
        </p>
        <button className='mt-3 w-[270px] h-10  bg-black text-white rounded-md'>
          Contact Me
        </button>

        <hr className='mt-5 mr-5' />

        <div className='mt-5 flex items-center gap-2 cursor-pointer'>
          <a
            href="https://github.com/Paigomanh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <div>
              <FaGithub />
            </div>
            <div className='text-gray-500  hover:text-black cursor-pointer'>
              /Paigomanh
            </div>
          </a>
        </div>

        <div className='flex items-center gap-2 cursor-pointer'>
          <a
            href="https://www.linkedin.com/in/rahul-sajeevan-144849192/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <div>
              <FaLinkedin />
            </div>
            <div className='text-gray-500  hover:text-black' >
              /rahul-sajeevan
            </div>
          </a>
        </div>

        <div className='flex items-center gap-2 cursor-pointer'>
          <a
            href="https://github.com/Paigomanh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <div>
              <FaSquareXTwitter />
            </div>
            <div className='text-gray-500  hover:text-black cursor-pointer'>
              /Paigomanh
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Profile
