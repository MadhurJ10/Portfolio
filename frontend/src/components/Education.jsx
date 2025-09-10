import React from "react";
import logo from '../assets/logo.jpeg'

const Education = () => {
  return (
    <div className="flex min-h-0 flex-col gap-y-3 mt-[4rem]">
      <div
        style={{ opacity: 1, filter: "blur(0px)", transform: "translateY(-6px)" }}
      >
        <h2 className="text-xl font-bold">Education</h2>
      </div>

      <div
        style={{ opacity: 1, filter: "blur(0px)", transform: "translateY(-6px)" }}
      >
        <a className="block cursor-pointer" href="#">
          <div className="rounded-lg bg-card text-card-foreground flex">
            <div className="flex-none">
              <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted-background dark:bg-foreground">
                <img
                  className="aspect-square h-full w-full object-contain"
                  alt="Vellore Institute of Technology"
                  src={logo}
                />
              </span>
            </div>

            <div className="flex-grow ml-4 items-center flex-col group">
              <div className="flex flex-col">
                <div className="flex items-center justify-between gap-x-2 text-base">
                  <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                    Lakshmi Narain College of Technology
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chevron-right size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100 rotate-0"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </h3>
                  <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                    2023 - 2027
                  </div>
                </div>
                <div className="font-sans text-xs">B-Tech in Cse(iot)</div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Education;
