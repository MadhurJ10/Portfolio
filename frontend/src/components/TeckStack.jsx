import React from 'react'
import { FaBootstrap, FaGitAlt, FaGithub, FaHtml5, FaJava, FaJs, FaNodeJs, FaProjectDiagram, FaReact, FaDocker } from "react-icons/fa";
import { PiFileCssFill } from "react-icons/pi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiExpress, SiGithubactions, SiKubernetes, SiMongodb, SiMysql, SiPostgresql, SiRedux, SiSocketdotio } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";

const data = [
    { name: "HTML", icon: FaHtml5, color: "text-orange-500", variant: "outline" },
    { name: "CSS", icon: PiFileCssFill, color: "text-blue-500", variant: "outline" },
    { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-600", variant: "outline" },
    { name: "JavaScript", icon: FaJs, color: "text-yellow-500", variant: "secondary" },
    { name: "TypeScript", icon: BiLogoTypescript, color: "text-blue-600", variant: "secondary" },
    { name: "React", icon: FaReact, color: "text-cyan-500", variant: "outline" },
    { name: "Next.js", icon: RiNextjsFill, color: "text-gray-900 dark:text-white", variant: "outline" },
    { name: "Tailwind", icon: RiTailwindCssFill, color: "text-cyan-600", variant: "outline" },
    { name: "Framer Motion", icon: TbBrandFramerMotion, color: "text-purple-600", variant: "outline" },
    { name: "Redux", icon: SiRedux, color: "text-purple-700", variant: "outline" },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-600", variant: "outline" },
    { name: "Express", icon: SiExpress, color: "text-gray-600", variant: "outline" },
    { name:"jQuery", icon: FaJs, color: "text-yellow-500", variant: "outline" },
    { name: "REST API", icon: FaProjectDiagram, color: "text-green-600", variant: "outline" },
    { name: "WebSockets", icon: SiSocketdotio, color: "text-gray-800", variant: "outline" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500", variant: "outline" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-sky-700", variant: "outline" },
    { name: "MySQL", icon: SiMysql, color: "text-blue-700", variant: "outline" },
    { name: "Docker", icon: FaDocker, color: "text-cyan-600", variant: "outline" },
    { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-500", variant: "outline" },
    { name: "CI/CD", icon: SiGithubactions, color: "text-gray-800", variant: "outline" },
    { name: "Git", icon: FaGitAlt, color: "text-red-600", variant: "outline" },
    { name: "GitHub", icon: FaGithub, color: "text-gray-900 dark:text-white", variant: "outline" },
    { name: "Java", icon: FaJava, color: "text-orange-600", variant: "secondary" },
];

const TeckStack = () => {
    return (
        <div className="flex flex-wrap gap-4 mt-[4rem]">
            <h1 className='text-2xl'>Tech Stack.</h1>
            <div className='flex flex-wrap gap-3'>
            {data.map((item, index) => {
                const Icon = item.icon; // Assign the icon component
                return (
                    <div key={index} className="flex items-center gap-2 px-2 py-1 rounded-lg  bg-[#131313] border border-[#363636]">
                        <Icon className={`w-6 h-6 ${item.color}`} />
                        <span>{item.name}</span>
                    </div>
                );
            })}
            </div>
        </div>
    )
}

export default TeckStack;
