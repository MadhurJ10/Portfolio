import React from "react";
import eduWireLogo from "../assets/Edu-wire-log.png";
import eduWireWhite from "../assets/eduwire-white-logo.png"
import favicon from "../assets/favicon.png"
import sheryiansLogo from "../assets/companyLogo.webp";


const Experience = () => {
  return (
    <section className="bg-black text-white mt-16">
      <h2 className="text-3xl font-bold mb-12 tracking-tight">
        Experience
      </h2>

      {/* Experience Item */}
      <div className="group flex items-start justify-between border-b border-white/10 pb-8 transition-all hover:border-white/30">
        <div className="flex items-start gap-5">
          {/* Logo */}
          <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center ring-1 ring-white/10 group-hover:ring-white/30 transition">
            <img
              src={eduWireLogo}
              alt="Edu-Wire Logo"
              className="w-9 h-9 object-contain"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-lg font-semibold">
              Edu-Wire
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              Full Stack Developer Intern
            </p>
          </div>
        </div>

        {/* Date */}
        <p className="text-sm text-gray-500 tracking-wide">
          FEB 2026 — APRIL 2026
        </p>
      </div>

      {/* Experience Item */}
      <div className="group flex items-start justify-between border-b border-white/10 pb-8 mt-10 transition-all hover:border-white/30">
        <div className="flex items-start gap-5">
          {/* Logo */}
          <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center ring-1 ring-white/10 group-hover:ring-white/30 transition">
            <img
              src={sheryiansLogo}
              alt="Sheryians Logo"
              className="w-9 h-9 object-contain"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-lg font-semibold">
              Sheryians Pvt. Ltd.
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              Full Stack Developer Intern
            </p>
          </div>
        </div>

        {/* Date */}
        <p className="text-sm text-gray-500 tracking-wide">
          SEPT 2025 — DEC 2025
        </p>
      </div>
    </section>
  );
};

export default Experience;
