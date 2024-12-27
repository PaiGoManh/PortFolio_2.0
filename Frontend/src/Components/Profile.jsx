import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="w-full lg:h-[650px] h-[380px] border border-gray-200 rounded-md">
      <div className="lg:pt-5 lg:pl-[9%] pl-[5%] pt-[5%]">
        <img
          src="https://rahulsajeevan-portfolio.netlify.app/assets/paigo-CZHnjRY3.jpg"
          alt="Rounded Image"
          className="lg:w-[260px] w-[50px] rounded-full ring-2 ring-gray-300 lg:ml-0 ml-2"
        />
      </div>

      <div className="lg:pl-8 lg:pt-8">
        <h1 className="lg:text-3xl font-bold lg:pl-0 pl-[28%] lg:mt-0 mt-[-16%]">Rahul Sajeevan</h1>
        <h1 className="lg:text-[100%] lg:mt-1 mt-0 text-xs text-gray-500 lg:pl-0 pl-[28%]">Full Stack Blockchain Developer</h1>
        <p className="text-l lg:mt-6 mt-5 lg:w-[280px] w-[250px] lg:ml-0 ml-6 text-gray-500">
          Hi, I'm Rahul Sajeevan. A Passionate Full-stack Blockchain developer based in Kerala, India 💻
        </p>
        <button
          onClick={toggleModal}
          className="lg:mt-3 mt-5 lg:w-[270px] w-[230px] lg:ml-0 ml-6 h-10 bg-black text-white rounded-md"
        >
          Contact Me
        </button>

        <hr className="lg:mt-5 lg:mr-5 mt-5 lg:mx-0 mx-6" />

        <div className="lg:ml-0 lg:mb-0 mb-2 lg:mt-5 mt-5 ml-6 flex items-center gap-2 cursor-pointer">
          <a
            href="https://github.com/Paigomanh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <div>
              <FaGithub />
            </div>
            <div className="text-gray-500 hover:text-black cursor-pointer">
              /Paigomanh
            </div>
          </a>
        </div>

        <div className="lg:ml-0 lg:mb-0 mb-2 ml-6 flex items-center gap-2 cursor-pointer">
          <a
            href="https://www.linkedin.com/in/rahul-sajeevan-144849192/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <div>
              <FaLinkedin />
            </div>
            <div className="text-gray-500 hover:text-black">
              /rahul-sajeevan
            </div>
          </a>
        </div>

        <div className="lg:ml-0 ml-6 flex items-center gap-2 cursor-pointer">
          <a
            href="https://github.com/Paigomanh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <div>
              <FaSquareXTwitter />
            </div>
            <div className="text-gray-500 hover:text-black cursor-pointer">
              /Paigomanh
            </div>
          </a>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-md shadow-lg lg:max-w-2xl lg:w-full w-[300px] max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-bold text-gray-800">Contact Me</h2>
              <button
                onClick={toggleModal}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <span className="text-orange-500 text-lg mr-2">📞</span>
                    <h3 className="font-bold">CALL ME</h3>
                  </div>
                  <p className="text-gray-600 lg:text-l text-sm">
                    +91 8606149231, +91 7306047519
                  </p>
                </div>

                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <span className="text-orange-500 text-lg mr-2">🏠︎</span>
                    <h3 className="font-bold">ADDRESS</h3>
                  </div>
                  <p className="text-gray-600 lg:text-l text-sm lg:ml-0 ml-4">
                    Kottakudiyil (H), Kadavoor (PO), Kadavoor, Neduvakkadu, 686671
                  </p>
                </div>

                <div>
                  <div className="flex items-center">
                    <span className="text-orange-500 text-lg mr-2 mt-4">📧</span>
                    <h3 className="font-bold mt-4">MESSAGE ME</h3>
                    <h1 className="lg:ml-5 lg:text-8xl lg:text-blue-500 hidden lg:block">↝</h1>
                  </div>
                </div>
              </div>

              <form className="space-y-4 mt-[-5%]">
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black text-sm"
                />
                <input
                  type="email"
                  placeholder="Enter a valid email address"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black text-sm"
                />
                <textarea
                  placeholder="Your message"
                  rows="3"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black text-sm"
                ></textarea>
                <button
                  type="submit"
                  className="bg-black text-white w-full py-2 rounded-md "
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
