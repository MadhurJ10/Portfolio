import React from 'react'
import { FaRegFilePdf } from "react-icons/fa";

const About = () => {
    return (
        <div className='flex flex-col sm:flex-row sm:justify-between sm:gap-[2rem]'>
            
            {/* Left Side */}
            <div className='sm:w-[32rem]'>
                <h1 className='text-3xl font-bold mb-4'>About.</h1>
                <p className='text-[#8A8A8C] leading-relaxed'>
                    Hey, I’m <span className="font-semibold">Madhur Bhawsar</span>, a full-stack developer currently in my 3rd year of 
                    B.Tech in Computer Science & Engineering (IoT specialization). I build modern web applications with 
                    <span className="font-medium"> React, Node.js, Express, MongoDB, and PostgreSQL</span>, focusing on creating secure, 
                    scalable, and user-friendly solutions. Besides development, I’m skilled in APIs, authentication systems, and 
                    database design, and I enjoy exploring AI-driven tools and system design to bring creative ideas into impactful projects.
                </p>

                <a href="#about-more" className="mt-4 inline-block text-sm text-white hover:underline">
                    More about me. →
                </a>
            </div>

            {/* Right Side */}
            <div className='flex flex-col gap-6 mt-8 sm:mt-0'>
                {/* Status */}
                <div>
                    <h3 className='font-semibold mb-2'>STATUS</h3>
                    <div className='flex items-center gap-2'>
                        <span className='w-2 h-2 bg-green-500 rounded-full'></span>
                        <span>Available for work</span>
                    </div>
                    <div className='flex items-center gap-2 mt-1'>
                        <span className='w-2 h-2 bg-blue-600 rounded-full'></span>
                        <span>Open to freelance</span>
                    </div>
                </div>

                {/* Focus */}
                <div>
                    <h3 className='font-semibold mb-2'>FOCUS</h3>
                    <ul className="list-disc pl-5 space-y-1 text-[#8A8A8C]">
                        <li>Full-Stack Development</li>
                        <li>APIs & Authentication Systems</li>
                        <li>DSA & Problem Solving</li>
                    </ul>
                </div>

{/* //ahdfbdsbfdbsfbds */}
                {/* Resume */}
                <div>
                    <a 
                        href="https://drive.google.com/file/d/1QmxUip8dA9v9ciXdykv2rFUsDmZtc6Fu/view?usp=sharing" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <button className='w-full flex justify-center items-center py-2 bg-[#0B0B0B] border border-[#363636] rounded-lg hover:bg-[#1A1A1A] transition'>
                            <FaRegFilePdf className="mr-2" />
                            <span>Resume</span>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About
