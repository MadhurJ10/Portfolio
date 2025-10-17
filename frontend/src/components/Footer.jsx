import React from "react";
import { FaGithub, FaMedium, FaThreads ,FaXTwitter } from "react-icons/fa6";
import { SiLeetcode, SiLinkedin } from "react-icons/si";



const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-12 px-6 text-center">
      {/* Connect Section */}
      <h2 className="text-3xl font-bold mb-3">Let’s Connect</h2>
      <p className="mb-6">
        Explore my contributions, projects, and collaborations on these platforms:
      </p>

      {/* Social Links */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <a
          href="https://github.com/MadhurJ10"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-gray-600 px-4 py-2 rounded-md hover:bg-gray-800 transition"
        >
          <FaGithub /> GitHub
        </a>
        {/* <a
          href="https://leetcode.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-gray-600 px-4 py-2 rounded-md hover:bg-gray-800 transition"
        >
          <SiLeetcode /> LeetCode
        </a> */}
        <a
          href="https://www.linkedin.com/in/madhur-bhawsar-aa71a8290/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-gray-600 px-4 py-2 rounded-md hover:bg-gray-800 transition"
        >
          <SiLinkedin /> LinkedIn
        </a>
        <a
          href="https://x.com/0xmadhur"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-gray-600 px-4 py-2 rounded-md hover:bg-gray-800 transition"
        >
          <FaXTwitter /> 
        </a>
        {/* <a
          href="https://medium.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-gray-600 px-4 py-2 rounded-md hover:bg-gray-800 transition"
        >
          <FaMedium /> Medium
        </a> */}
      </div>

      {/* Reach Out Section */}
      <h2 className="text-2xl font-bold mb-3">Reach Out</h2>
      <p className="mb-2">
        Have a project idea, feedback, or just want to say hi?
      </p>
      <p>
        Feel free to drop me an{" "}
        <a
          href="madhurbhawsar7@gmail.com"
          className="text-blue-400 hover:underline"
        >
          email
        </a>{" "}
        or connect with me on{" "}
        <a
          href="https://www.linkedin.com/in/madhur-bhawsar-aa71a8290/"
          className="text-blue-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        .
      </p>

      {/* Footer Bottom */}
      <div className="mt-10 text-sm text-gray-500">
        Made with <span className="text-red-500">❤️</span> by{" "}
        <span className="font-semibold">Madhur Bhawsar</span>
        <br />
        © 2025 Madhur Bhawsar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
