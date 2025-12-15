import React from "react";
import companyLogo from "../assets/companyLogo.webp";

const Experience = () => {
  return (
    <section className="bg-black text-white mt-10">
      {/* Section Title */}
      <h2 className="text-3xl font-bold mb-10">Experience</h2>

      {/* Experience Card */}
      <div className="flex items-start justify-between border-b border-gray-700 pb-8">
        
        {/* Left Side */}
        <div className="flex items-start gap-4">
          
          {/* Company Logo */}
          <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center overflow-hidden">
            <img
              src={companyLogo}
              alt="Sheryians Logo"
              className="w-full h-full object-center"
            />
          </div>

          {/* Company Details */}
          <div>
            <h3 className="text-lg font-semibold">Sheryians Pvt. Ltd.</h3>
            <p className="text-gray-400 text-sm">
              Full Stack Developer Intern
            </p>
          </div>
        </div>

        {/* Right Side (Date) */}
        <p className="text-gray-400 text-sm">
          SEPT 2025 — DEC 2025
        </p>
      </div>
    </section>
  );
};

export default Experience;
