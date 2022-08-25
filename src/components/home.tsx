import React, { useState } from "react";
import photo from "../images/photo.jpg";

import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div className="h-full w-full bg-gradient-to-b from-black via-black to-gray-800 flex flex-col lg:flex-row lg:h-screen">
      <div className=" mx-20 flex flex-col items-center justify-center h-full px-5 w-10/12 lg:w-6/12">
        <div>
          <h2 className="text-slate-300 text-xl from-neutral-400 indent-7 leading-8 mt-28 sm:mt-28 lg:md:20 xl:mt-10 sm:py-0">
            An Artist and a photographer, who has captured love all over Morocco
            in spectacular locations for refined and adventurous clients.
            Creating imagery that withstands the test of time. He gathers
            inspiration from the famous works of artists in the renaissance era
            and modern fashion. He creates art that will be tasteful and elegant
            for many year to come.
          </h2>
          <div className=" ">
            <button className=" group border-2 rounded px-4 py-2 my-5 flex items-center border-cyan-400 bg-cyan-400 hover:bg-cyan-500 hover:border-cyan-500">
              Portfolio
              <span className="group-hover:rotate-90 duration-300 m-2">
                <HiArrowNarrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>{" "}
      <div className="">
        <img src={photo} alt="" className="rounded-2xl mx-6  my-36  w-11/12 " />
      </div>
    </div>
  );
};

export default Home;
