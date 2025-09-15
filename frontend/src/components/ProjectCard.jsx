import React from 'react';
import { PiGithubLogoBold } from "react-icons/pi";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({
  title,
  status,
  description,
  techStack = [],
  image,
  liveLink,
  githubLink,
}) => {
  return (
    <div className="bg-[#0A0A0A] w-[20rem] px-6 py-6 border border-[#363636] relative rounded-lg overflow-hidden">
      {/* Decorative Corners */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white"></div>
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white"></div>
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white"></div>
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white"></div>

      {/* Thumbnail */}
      <img
        src={image}
        alt={`${title} thumbnail`}
        className="h-36 w-full object-cover rounded-md"
      />

      {/* Content */}
      <div className="flex flex-col mt-6 gap-3">
        {/* Title + Badge */}
        <div className="flex justify-between items-center">
          <strong className="text-white text-lg">{title}</strong>
          {status && (
            <span className="bg-green-500 text-black text-xs px-3 py-0.5 rounded-full font-medium">
              {status}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>

        {/* Tech stack row */}
        <div className="flex flex-wrap gap-2 mt-2">
          {techStack.map((tech, index) => {
            const TechIcon = tech.icon;
            return (
              <span
                key={index}
                className="flex items-center gap-2 bg-[#1c1c1c] border border-[#2f2f2f] text-gray-300 text-xs px-2 py-1 rounded-md"
              >
                {TechIcon && <TechIcon className={`${tech.color} text-base`} />}
                {tech.name}
              </span>
            );
          })}
        </div>

        {/* Footer Icons */}
        <div className="flex justify-end gap-4 mt-3 text-gray-400">
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noreferrer">
              <FaExternalLinkAlt className="text-[1.2rem] hover:text-white cursor-pointer" />
            </a>
          )}
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noreferrer">
              <PiGithubLogoBold className="text-[1.2rem] hover:text-white cursor-pointer" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
