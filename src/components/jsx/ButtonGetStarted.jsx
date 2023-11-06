import React from "react";

const ButtonGetStarted = () => {
  return (
    <div className="my-10">
      <button className="text-gray-50 duration-300 relative group cursor-pointer overflow-hidden h-14 w-56 bg-neutral-800 rounded-full font-extrabold hover:bg-sky-700 shadow-md shadow-slate-400">
        <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-700 right-12 top-12 bg-yellow-500"></div>
        <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150  duration-700 right-20 -top-6 bg-orange-500"></div>
        <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8 rounded-full group-hover:scale-150  duration-700 right-32 top-6 bg-gray-500"></div>
        <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4   rounded-full group-hover:scale-150  duration-700 right-2 top-12 bg-red-600"></div>
        <p className="z-50 relative text-xl font-bold text-gray-50 text-center">
          Get Started
        </p>
      </button>
    </div>
  );
};

export default ButtonGetStarted;
