import React, { useContext } from 'react'
import { FaBootstrap, FaGitAlt, FaGithub, FaHtml5, FaJava, FaJs, FaNodeJs, FaProjectDiagram, FaReact, FaDocker } from "react-icons/fa";
import { PiFileCssFill } from "react-icons/pi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiExpress, SiGithubactions, SiKubernetes, SiMongodb, SiMysql, SiPostgresql, SiRedux, SiSocketdotio } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { TechStackContext } from '../context/TechStackProvider';


const TeckStack = () => {
    const { data } = useContext(TechStackContext);
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
