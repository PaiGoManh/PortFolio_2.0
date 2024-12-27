import React from "react";
import kba from "../assets/KBA.png";
import Iota from "../assets/iota.png";
import feedfox from "../assets/feedfox.png";
import Feedfox from "../assets/feed-fox.png";
import howincloud from "../assets/howinlogo.png";
import NillQ from "../assets/NillQ.png";
import Nillq from "../assets/Nillq.png";

import { MdOutlineDateRange } from "react-icons/md";

const Experience = () => {
  return (
    <div className="lg:mt-[15%] mt-7">
      <h1 className="text-xl font-bold mb-5">Work Experience</h1>
      <div className="lg:w-full w-[290px] lg:h-[1220px] mb-[10%] border border-gray-200 rounded-md ">
        <div className="lg:p-8 p-4">
          <div>
            <div className="flex">
              <div className="w-[50px] h-[50px] border border-gray-200 shadow-md">
                <img
                  src={kba}
                  alt="kba_logo"
                  className="w-11 h-11 pl-2 pt-1 pb-1 pr-1"
                />
              </div>
              <div className="ml-4">
                <h1 className="lg:text-xl text-l font-bold">Blockchain Developer</h1>
                <h1 className="text-sm text-gray-500">
                  kerala Blockchain Academy
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-1 text-gray-500 lg:mt-5 mt-2">
              <div>
                <MdOutlineDateRange className="w-3.5 h-3.5" />
              </div>
              <div className="text-sm">Nov 2024 - Present</div>
            </div>
            <p className="mt-4 text-sm text-justify">
              Delivered a high-quality seed supply chain management solution
              using IOTA ledger, efficiently adapting to complex requirements
              and enhancing transaction scalability and security within tight
              deadlines.
            </p>
            <img src={Iota} alt="iota" className="w-[300px] border-2 mt-5" />
          </div>

          <hr className="mx-5 border-gray-300 mt-8 " />

          <div className="mt-10">
            <div className="flex">
              <div className="w-[50px] h-[50px] border border-gray-200 shadow-md">
                <img
                  src={feedfox}
                  alt="kba_logo"
                  className="w-11 h-11 pl-2 pt-1 pb-1 pr-1"
                />
              </div>
              <div className="ml-4">
                <h1 className="lg:text-xl text-l font-bold">NextJs Developer</h1>
                <h1 className="text-sm text-gray-500">Feedfox</h1>
              </div>
            </div>
            <div className="flex items-center gap-1 text-gray-500 lg:mt-5 mt-2">
              <div>
                <MdOutlineDateRange className="w-3.5 h-3.5" />
              </div>
              <div className="text-sm">July 2024 - Aug 2024</div>
            </div>
            <p className="mt-4 text-sm text-justify">
              Built interactive and responsive UIs using components and
              optimised performance for better user experience. Collaborated
              with backend teams to integrate APIs enabling dynamic data
              fetching and seamless functionality.
            </p>
            <img src={Feedfox} alt="iota" className="w-[300px] border-2 mt-5" />
          </div>

          <hr className="mx-5 border-gray-300 mt-8 " />

          <div className="mt-10">
            <div className="flex">
              <div className="w-[50px] h-[50px] border border-gray-200 shadow-md">
                <img
                  src={howincloud}
                  alt="kba_logo"
                  className="bg-black mt-5"
                />
              </div>
              <div className="ml-4">
                <h1 className="lg:text-xl text-l font-bold">ReactJs Developer</h1>
                <h1 className="text-sm text-gray-500">
                  Howin Cloud Solutions Private Limted
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-1 text-gray-500 lg:mt-5 mt-2">
              <div>
                <MdOutlineDateRange className="w-3.5 h-3.5" />
              </div>
              <div className="text-sm">Dec 2023 - May 2024</div>
            </div>
            <p className="mt-4 text-sm text-justify">
              Worked on implementing dynamic dashboards and data visualisation.
              collaborated with team members to enhance UI/UX design and
              functionality
            </p>
            <div className="lg:flex gap-5">
              <img src={NillQ} alt="iota" className="w-[300px] border-2 mt-5" />
              <img src={Nillq} alt="iota" className="w-[300px] border-2 mt-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
