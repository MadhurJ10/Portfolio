import React, { createContext } from 'react'
import { useContext } from 'react'
import { FaHtml5, FaBootstrap, FaJs, FaReact, FaNodeJs, FaDocker, FaGitAlt, FaGithub, FaJava, FaProjectDiagram } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import {SiPostman ,SiRedux, SiExpress, SiSocketdotio, SiMongodb, SiPostgresql, SiMysql, SiKubernetes, SiGithubactions } from "react-icons/si";
import { PiFileCssFill } from "react-icons/pi";
import pfp from '../assets/pfp.jpg'
import { SiC } from 'react-icons/si';
import privacy from '../assets/privacy.png'
import mindweave from '../assets/mindweave.png'





export const TechStackContext = createContext();

const TechStackProvider = ({ children }) => {
    const data = [
        { name: "HTML", icon: FaHtml5, color: "text-orange-500", variant: "outline" },
        { name: "CSS", icon: PiFileCssFill, color: "text-blue-500", variant: "outline" },
        // { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-600", variant: "outline" },
        { name: "JavaScript", icon: FaJs, color: "text-yellow-500", variant: "secondary" },
        // { name: "TypeScript", icon: BiLogoTypescript, color: "text-blue-600", variant: "secondary" },
        { name: "React", icon: FaReact, color: "text-cyan-500", variant: "outline" },
        { name: "Next.js", icon: RiNextjsFill, color: "text-gray-900 dark:text-white", variant: "outline" },
        { name: "Tailwind", icon: RiTailwindCssFill, color: "text-cyan-600", variant: "outline" },
        { name: "Framer Motion", icon: TbBrandFramerMotion, color: "text-purple-600", variant: "outline" },
        { name: "Redux", icon: SiRedux, color: "text-purple-700", variant: "outline" },
        { name: "Node.js", icon: FaNodeJs, color: "text-green-600", variant: "outline" },
        { name: "Express", icon: SiExpress, color: "text-gray-600", variant: "outline" },
        // { name: "jQuery", icon: FaJs, color: "text-yellow-500", variant: "outline" },
        { name: "REST API", icon: FaProjectDiagram, color: "text-green-600", variant: "outline" },
        { name: "WebSockets", icon: SiSocketdotio, color: "text-gray-800", variant: "outline" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-500", variant: "outline" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-sky-700", variant: "outline" },
        // { name: "MySQL", icon: SiMysql, color: "text-blue-700", variant: "outline" },
        // { name: "Docker", icon: FaDocker, color: "text-cyan-600", variant: "outline" },
        // { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-500", variant: "outline" },
        // { name: "CI/CD", icon: SiGithubactions, color: "text-gray-800", variant: "outline" },
        { name: "Postman", icon: SiPostman, color: "text-[#FF6C37]", variant: "outline" },
        { name: "Git", icon: FaGitAlt, color: "text-red-600", variant: "outline" },
        { name: "GitHub", icon: FaGithub, color: "text-gray-900 dark:text-white", variant: "outline" },
        { name: "Java", icon: FaJava, color: "text-orange-600", variant: "secondary" },
        // { name: "C", icon: SiC, color: "text-orange-600", variant: "secondary" },

    ];

    const projects = [
        {
            title: "Privacy Guard",
            status: "Running",
            description: "A full-featured privacy dashboard to manage app permissions, check data breaches, and more.",
            techStack: [ "Next.js", "Tailwind", "MongoDB" ],
            image: privacy,
            liveLink: "https://privacy-guard-rho.vercel.app/",
            githubLink: "https://github.com/MadhurJ10/Privacy-Guard"
        },
        {
            title: "MindWeave",
            status: "Completed",
            description: "Personal AI assistant to manage tasks, answer queries, and generate reports.",
            techStack: [ "React", "Node.js", "OpenAI API" ],
            image: mindweave,
            liveLink: "https://novaai.com",
            githubLink: "https://github.com/MadhurJ10/Mind-Weave"
        }
    ];

    return (
        <TechStackContext.Provider
            value={{
                data
                ,projects
            }}
        >
            {children}
        </TechStackContext.Provider>
    )
}

export default TechStackProvider
