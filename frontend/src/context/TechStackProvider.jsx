import React, { createContext } from 'react'
import { FaHtml5, FaBootstrap, FaJs, FaReact, FaNodeJs, FaDocker, FaGitAlt, FaGithub, FaJava, FaProjectDiagram } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiPostman, SiRedux, SiExpress, SiSocketdotio, SiMongodb, SiPostgresql } from "react-icons/si";
import { PiFileCssFill } from "react-icons/pi";
import pfp from '../assets/pfp.jpg'
import privacy from '../assets/privacy.png'
import mindweave from '../assets/mindweave.png'
import mind2 from '../assets/mind2.png'
import mind3 from '../assets/mind3.png'



export const TechStackContext = createContext();

const TechStackProvider = ({ children }) => {
  const data = [
    { name: "HTML", icon: FaHtml5, color: "text-orange-500", variant: "outline" },
    { name: "CSS", icon: PiFileCssFill, color: "text-blue-500", variant: "outline" },
    { name: "JavaScript", icon: FaJs, color: "text-yellow-500", variant: "secondary" },
    { name: "React", icon: FaReact, color: "text-cyan-500", variant: "outline" },
    { name: "Next.js", icon: RiNextjsFill, color: "text-gray-900 dark:text-white", variant: "outline" },
    { name: "Tailwind", icon: RiTailwindCssFill, color: "text-cyan-600", variant: "outline" },
    { name: "Framer Motion", icon: TbBrandFramerMotion, color: "text-purple-600", variant: "outline" },
    { name: "Redux", icon: SiRedux, color: "text-purple-700", variant: "outline" },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-600", variant: "outline" },
    { name: "Express", icon: SiExpress, color: "text-gray-600", variant: "outline" },
    { name: "REST API", icon: FaProjectDiagram, color: "text-green-600", variant: "outline" },
    { name: "WebSockets", icon: SiSocketdotio, color: "text-gray-800", variant: "outline" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500", variant: "outline" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-sky-700", variant: "outline" },
    { name: "Postman", icon: SiPostman, color: "text-[#FF6C37]", variant: "outline" },
    { name: "Git", icon: FaGitAlt, color: "text-red-600", variant: "outline" },
    { name: "GitHub", icon: FaGithub, color: "text-gray-900 dark:text-white", variant: "outline" },
    { name: "Java", icon: FaJava, color: "text-orange-600", variant: "secondary" },
  ];

  const projects = [
    {
      title: "Float Chat",
      status: "Building",
      description: "A full-stack security tool that helps users generate strong passwords, check for data breaches, manage app permissions, and more. Features a password vault, disposable email, fake-data generator, and a modern dashboard — all crafted with the MERN stack.",
      image: privacy,
      liveLink: "https://privacy-guard-rho.vercel.app/",
      githubLink: "https://github.com/MadhurJ10/Privacy-Guard",
      techStack: [
        { name: "React", icon: FaReact, color: "text-cyan-500" },
        { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
        { name: "REST API", icon: FaProjectDiagram, color: "text-green-600" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-sky-700" },
      ],
    },
    {
      title: "MindWeave",
      status: "Completed",
      description: "An AI-powered concept-mapping platform that lets you brainstorm, organize, and visualize ideas in real time. Built with Prisma, PostgreSQL, and Gemini AI, it supports zoomable, Excalidraw-style layouts for effortless knowledge mapping.",
      image: mind2,
      liveLink: "https://mindweave-theta.vercel.app/",
      githubLink: "https://github.com/MadhurJ10/Mind-Weave",
      techStack: [
        { name: "React", icon: FaReact, color: "text-cyan-500" },
        { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
        { name: "REST API", icon: FaProjectDiagram, color: "text-green-600" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-sky-700" },
      ],
    },
    {
      title: "Privacy Guard",
      status: "Running",
      description: "A full-stack security tool that helps users generate strong passwords, check for data breaches, manage app permissions, and more. Features a password vault, disposable email, fake-data generator, and a modern dashboard — all crafted with the MERN stack.",
      image: privacy,
      liveLink: "https://privacy-guard-rho.vercel.app/",
      githubLink: "https://github.com/MadhurJ10/Privacy-Guard",
      techStack: [
        { name: "React.js", icon: RiNextjsFill, color: "text-gray-900 dark:text-white" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
        { name: "Tailwind", icon: RiTailwindCssFill, color: "text-cyan-600" },
        { name: "JavaScript", icon: FaJs, color: "text-yellow-500" }
      ],
    }, {
      title: "resume-checker",
      status: "Running",
      description: "A full-stack security tool that helps users generate strong passwords, check for data breaches, manage app permissions, and more. Features a password vault, disposable email, fake-data generator, and a modern dashboard — all crafted with the MERN stack.",
      image: privacy,
      liveLink: "https://privacy-guard-rho.vercel.app/",
      githubLink: "https://github.com/MadhurJ10/Privacy-Guard",
      techStack: [
        { name: "React.js", icon: RiNextjsFill, color: "text-gray-900 dark:text-white" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
        { name: "Tailwind", icon: RiTailwindCssFill, color: "text-cyan-600" },
        { name: "JavaScript", icon: FaJs, color: "text-yellow-500" }
      ],
    }
  ];

  return (
    <TechStackContext.Provider value={{ data, projects }}>
      {children}
    </TechStackContext.Provider>
  )
}

export default TechStackProvider
