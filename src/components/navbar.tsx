import { FC, useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Params, useParams } from "react-router-dom";
import icon from "../images/favicon.png";

interface linksProps {
  id: number;
  link: string;
}

const links: linksProps[] = [
  { id: 1, link: "home" },
  { id: 2, link: "about" },
  { id: 3, link: "portfolio" },
  { id: 4, link: "experience" },
  { id: 5, link: "conctact" },
];

const Navbar: FC = () => {
  const [nav, setNav] = useState<boolean>(false);
  const params = useParams<Params<string>>();
  const [scrolling, setScrolling] = useState<number>(0);

  useEffect(() => {
    scrolled();
    window.addEventListener("scroll", scrolled);
  }, []);

  const scrolled = () => {
    setScrolling(window.scrollY);
    // console.log(window.scrollY);
  };

  return (
    <div
      className={`flex justify-between items-center w-screen z-30 h-20 text-white fixed px-4 ${
        params.category === undefined
          ? scrolling <= 670
            ? "bg-black"
            : scrolling >= 670 && scrolling <= 1975
            ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-800 duration-500"
            : scrolling >= 1975 && scrolling <= 2140
            ? " bg-gradient-to-b from-gray-700  via-sky-900 to-sky-900 duration-500"
            : scrolling >= 1140 && scrolling <= 2050
            ? " bg-gradient-to-b from-sky-900 via-sky-800 to-sky-700"
            : "bg-black"
          : scrolling <= 3000
          ? "bg-gradient-to-b from-purple-900 via-purple-800 to-purple-800"
          : scrolling >= 3000 && scrolling <= 4800
          ? "bg-gradient-to-b from-fuchsia-900 via-fuchsia-800 to-fuchsia-700 "
          : "bg-gradient-to-b from-fuchsia-800 via-fuchsia-700 to-fuchsia-600 "
      }`}
    >
      <img className="w-16 ml-2" src={icon} alt="" />

      <ul className="hidden sm:flex">
        {links.map((l: linksProps) => (
          <li
            key={l.id}
            className={`capitalize font-medium px-4 cursor-pointer text-xl hover:scale-105 duration-100 ${
              params.category === undefined && scrolling <= 470
                ? "text-gray-500"
                : "text-gray-300"
            }`}
          >
            {l.link}
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer mr-4 text-violet-400 z-50 sm:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen text-gray-500 bg-gradient-to-b from-black to-gray-800 sm:hidden">
          {links.map((l: linksProps) => (
            <li
              key={l.id}
              className="px-4 py-4 capitalize cursor-pointer text-4xl"
            >
              {l.link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
