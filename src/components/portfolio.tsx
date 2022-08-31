import Weddings from "../images/wedding.jpeg";
import Events from "../images/event.jpg";
import Portrait from "../images/portrait.jpg";
import Industrial from "../images/industrial.jpg";
import Fashion from "../images/fashion.jpg";
import Architectural from "../images/architectural.jpg";
import { useNavigate } from "react-router-dom";
import { ImArrowRight, ImArrowDown } from "react-icons/im";
import { Element, Link } from "react-scroll";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { relative } from "path";

interface categoriesProps {
  id: number;
  category: string;
  image: string;
}

const Categories: categoriesProps[] = [
  { id: 1, category: "Weddings", image: Weddings },
  { id: 2, category: "Events", image: Events },
  { id: 6, category: "Industrial", image: Industrial },
  // { id: 7, category: "Music Videos", image: Music },
  { id: 4, category: "Fashion", image: Fashion },
  { id: 3, category: "Portrait", image: Portrait },
  { id: 5, category: "Architectural", image: Architectural },
];

const Portfolio = () => {
  const navigate = useNavigate();
  const [scrolling, setScrolling] = useState<number>(0);

  const motionComponent = (
    <motion.p
      animate={{
        y: [
          -5,
          5,
          -5,
          5,
          -5,
          5,
          -5,
          5,
          -5,
          5,
          -5,
          5 - 5,
          5,
          -5,
          5,
          -5,
          5,
          -5,
          5,
        ],
      }}
      transition={{
        ease: "easeInOut",
        duration: 20,
        delay: 0.3,
        repeat: Infinity,
      }}
    >
      {" "}
      <ImArrowDown />
    </motion.p>
  );

  useEffect(() => {
    scrolled();
    window.addEventListener("scroll", scrolled);
  }, []);

  const scrolled = () => {
    setScrolling(window.scrollY);
    console.log(window.scrollY);
  };
  return (
    <div className="w-full h-full bg-gradient-to-b from-black via-sky-900 to-sky-700 ">
      <Element name="gallery"></Element>
      <div className="invisible sm:visible">
        {scrolling >= 3260 && scrolling <= 4245 && (
          <div className="flex mt-10 h-72 justify-center items-center">
            <motion.div
              className="bg-gradient-to-br from-cyan-400 to-emerald-400"
              style={{
                width: 140,
                height: 140,
                borderRadius: 30,
              }}
              animate={{ rotate: 360, scale: 1.5, x: [0, 500, -500] }}
              transition={{ ease: "anticipate", duration: 2, delay: 0.3 }}
            ></motion.div>
            <Link to="home">
              <motion.div
                className="absolute left-96 text-xl font-serif text-white"
                animate={{ scale: 1.5, x: [500, -100] }}
              >
                We encapture the best moment ...
              </motion.div>
            </Link>
          </div>
        )}{" "}
        {scrolling >= 3400 && (
          <Link to="portfolio">
            <div className="p-8 text-3xl flex justify-center indent-7 font-semibold font-serif text-slate-300 cursor-pointer">
              {motionComponent}
              Check out our Diverse Portfolio &nbsp;
              {motionComponent}
            </div>
          </Link>
        )}
        {scrolling >= 3600 && (
          <div className="flex h-72 justify-center items-center">
            <motion.div
              className="bg-gradient-to-tr from-emerald-400 to-cyan-400"
              style={{
                width: 140,
                height: 140,
                borderRadius: 30,
                backgroundColor: "#fff",
              }}
              animate={{ rotate: 90, scale: 1.5, x: [0, -500, 500] }}
              transition={{ ease: "anticipate", duration: 2, delay: 0.3 }}
            ></motion.div>{" "}
            <motion.div
              className="absolute left-36 text-xl font-serif text-white"
              animate={{ scale: 1.5, x: [-500, 600] }}
            >
              and frame them to the fullest form or artistery...
            </motion.div>
          </div>
        )}
      </div>
      <div className="pt-[100px] sm:pt[0%] sm:pt-[200px]">
        <br />
        <div className="columns-2 md:columns-3 lg:columns-3 mx-3 ">
          <Element name="portfolio"></Element>
          {Categories.map((c: categoriesProps) => (
            <div
              onClick={() => navigate(`/${c.category}`)}
              key={c.id}
              className=" cursor-pointer group mb-5 origin-top hover:scale-105 duration-1000 "
            >
              <div className="z-10">
                <img className=" w-full h-full" src={c.image} alt="wow" />
              </div>
              <div className="relative  mt-[-95px]">
                <div className=" opacity-50 bg-sky-800 group-hover:bg-transparent h-24 duration-1000 "></div>
                <div className=" mt-[-95px] opacity-0 h-24 group-hover:opacity-100 group-hover:bg-gradient-to-r from-sky-900 via-sky-800 to-cyan-900 duration-1000 "></div>
                <div className="mt-[-90px] flex flex-col justify-center relative items-center h-full font-serif font-medium text-2xl text-lime-200 my-10 tracking-wide">
                  <p className=" w-full flex justify-center items-center group-hover:tracking-widest m-[-1px] p-0  duration-700 ">
                    {c.category}
                  </p>
                  <div className="w-full  flex flex-row justify-center items-center opacity-0 group-hover:opacity-100  duration-1000">
                    <p> go to gallery </p>
                    <div className="mx-4 ">
                      <ImArrowRight />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
