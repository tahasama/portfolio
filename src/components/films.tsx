import React, { useState } from "react";
import ReactPlayer from "react-player";
import clip from "../images/video.mp4";
import Eminem from "../images/eminem.mp4";
import Dre from "../images/dre.mp4";
import dre from "../images/dre.png";
import eminem from "../images/eminem.png";
import adele from "../images/adele.png";
import { Element } from "react-scroll";

interface videosProps {
  id: number;
  video: string;
  title: string;
  light: string;
}

const videos: videosProps[] = [
  {
    id: 1,
    video: Eminem,
    title: "Eminem",
    light: eminem,
  },
  {
    id: 5,
    video: "https://www.youtube.com/watch?v=TdrL3QxjyVw",
    title: "music 1",
    light: "",
  },

  {
    id: 3,
    video: clip,
    title: "Adele",
    light: adele,
  },

  //   {
  //     id: 1,
  //     video: "https://www.youtube.com/watch?v=Nh6DuYynq7c",
  //     title: "Eminem",
  //   },
  {
    id: 4,
    video: "https://www.youtube.com/watch?v=H5v3kku4y6Q",
    title: "LP",
    light: "",
  },
  {
    id: 2,
    video: Dre,
    title: "Dr.Dre",
    light: dre,
  },

  {
    id: 6,
    video: "https://www.youtube.com/watch?v=hn3wJ1_1Zsg",
    title: "music 2",
    light: "",
  },
  //   {
  //     id: 5,
  //     video: "https://www.youtube.com/watch?v=RBumgq5yVrA",
  //     title: "music 3",
  //   },
  //   {
  //     id: 6,
  //     video: "https://www.youtube.com/watch?v=0yW7w8F2TVA",
  //     title: "music 4",
  //   },

  //   {
  //     id: 7,
  //     video: "https://www.youtube.com/watch?v=MwpMEbgC7DA",
  //   },
  //   {
  //     id: 8,
  //     video: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
  //   },
];

const Films = () => {
  return (
    <div
      className={`w-full h-full bg-gradient-to-b from-sky-700 via-sky-600 to-sky-600 `}
    >
      <Element name="video clips"></Element>

      <div className="mt-[150px]">
        <p className="m-10 text-3xl indent-7 font-semibold font-serif text-slate-300">
          Video Clips
        </p>
        <br />
        <div className="m-5">
          <div className="columns-1 md:columns-2 lg:columns-3 ">
            {videos.map((v: videosProps) => (
              <div
                key={v.id}
                className="group relative flex flex-col  w-full p-0 pr-[30px] mr-[160px] mb-5 rounded-2xl border-b-4 border-teal-600 bg-gradient-to-b from-black hover:bg-black duration-1000 "
              >
                <ReactPlayer
                  url={v.video}
                  height="250px"
                  width="100%"
                  controls
                  muted
                  style={{ margin: "10px 15px" }}
                  light={v.light}
                />
                <div>
                  <p className="flex justify-center items-center h-10 mb-2 font-medium  text-lg text-black underline underline-offset-4 group-hover:text-white duration-1000 group-hover:no-underline">
                    {v.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Films;
