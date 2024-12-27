import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


const Profile = () => {
  return (
    <div className='w-full lg:h-[650px] h-[380px]  border border-gray-200 rounded-md'>
      <div className="lg:pt-5 lg:pl-[9%] pl-[5%] pt-[5%]">
        <img
          src="https://rahulsajeevan-portfolio.netlify.app/assets/paigo-CZHnjRY3.jpg"
          alt="Rounded Image"
          className="lg:w-[260px] w-[50px] rounded-full ring-2 ring-gray-300 lg:ml-0 ml-2"
        />
      </div>

      <div className='lg:pl-8 lg:pt-8'>
        <h1 className='lg:text-3xl font-bold lg:pl-0 pl-[28%] lg:mt-0 mt-[-16%]'>Rahul Sajeevan</h1>
        <h1 className='lg:text-[100%] lg:mt-1 mt-0 text-xs text-gray-500 lg:pl-0 pl-[28%]'>Full Stack Blockchain Developer</h1>
        <p className='text-l lg:mt-6 mt-5 lg:w-[280px] w-[250px] lg:ml-0 ml-6 text-gray-500'>
          Hi, I'm Rahul Sajeevan. A Passionate Full-stack Blockchain
          developer based in Kerala, India 💻
        </p>
        <button className='lg:mt-3 mt-5 lg:w-[270px] w-[230px] lg:ml-0 ml-6  h-10  bg-black text-white rounded-md'>
          Contact Me
        </button>

        <hr className='lg:mt-5 lg:mr-5 mt-5 lg:mx-0 mx-6' />

        <div className='lg:ml-0 lg:mb-0 mb-2 lg:mt-5 mt-5 ml-6 flex items-center gap-2 cursor-pointer'>
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

        <div className='lg:ml-0 lg:mb-0 mb-2 ml-6 flex items-center gap-2 cursor-pointer'>
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

        <div className='lg:ml-0 ml-6 flex items-center gap-2 cursor-pointer'>
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
