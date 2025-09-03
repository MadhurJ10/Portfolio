import React from 'react'
import pfp from '../assets/pfp.jpg'
import { PiGithubLogoBold } from "react-icons/pi";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = () => {
  return (
    <div className="bg-[#0A0A0A] w-[20rem] px-6 py-6 border border-[#363636] relative rounded-lg overflow-hidden">
      {/* Decorative Corners */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white"></div>
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white"></div>
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white"></div>
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white"></div>

      {/* Thumbnail */}
      <img
        src={pfp}
        alt="project thumbnail"
        className="h-36 w-full object-cover rounded-md"
      />

      {/* Content */}
      <div className="flex flex-col mt-6 gap-3">
        {/* Title + Badge */}
        <div className="flex justify-between items-center">
          <strong className="text-white text-lg">Privacy Guard</strong>
          <span className="bg-green-500 text-black text-xs px-3 py-0.5 rounded-full font-medium">
            Running
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          voluptas eaque excepturi magni asperiores repellat placeat ipsam
          consequatur, itaque est?
        </p>

        {/* Tech stack row (example, you can map these later) */}
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="bg-[#1c1c1c] border border-[#2f2f2f] text-gray-300 text-xs px-2 py-1 rounded-md">
            Next.js
          </span>
          <span className="bg-[#1c1c1c] border border-[#2f2f2f] text-gray-300 text-xs px-2 py-1 rounded-md">
            Tailwind
          </span>
          <span className="bg-[#1c1c1c] border border-[#2f2f2f] text-gray-300 text-xs px-2 py-1 rounded-md">
            MongoDB
          </span>
        </div>

        {/* Footer Icons */}
        <div className="flex justify-end gap-4 mt-3 text-gray-400">
          <a href="#" target="_blank" rel="noreferrer">
            <FaExternalLinkAlt className="text-[1.2rem] hover:text-white cursor-pointer" />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <PiGithubLogoBold className="text-[1.2rem] hover:text-white cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
