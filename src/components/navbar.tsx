import { FC, useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Params, useParams } from "react-router-dom";
import icon from "../images/favicon.png";
import { Link } from "react-scroll";

interface linksProps {
  id: number;
  link: string;
}

const links: linksProps[] = [
  { id: 1, link: "home" },
  { id: 2, link: "about" },
  { id: 3, link: "gallery" },
  { id: 4, link: "video clips" },
  { id: 5, link: "contact" },
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
    console.log(window.scrollY);
  };

  return (
    <div
      className={`flex overflow-visible justify-between items-center w-screen h-20 z-50 text-white fixed px-4 ${
        params.category === undefined
          ? scrolling <= 464
            ? "bg-gradient-to-b from-gray-800 via-gray-900 to-gray-900"
            : scrolling >= 464 && scrolling <= 2368
            ? "bg-gradient-to-b from-gray-900 via-black to-black duration-1000"
            : scrolling >= 2368 && scrolling <= 4130
            ? "bg-gradient-to-b from- via-black to-sky-900 duration-1000 "
            : scrolling >= 4130 && scrolling <= 5400
            ? "bg-gradient-to-b from-sky-900 via-sky-900 to-sky-800 duration-1000 "
            : scrolling >= 5400 && scrolling <= 6300
            ? "bg-gradient-to-b from-sky-800 via-sky-700 to-sky- duration-1000 "
            : // : scrolling >= 4200 && scrolling <= 4785
              // ? "bg-gradient-to-b from-sky-800 via-sky-700 to-sky-700 duration-1000 "
              // : scrolling >= 4785
              // ? "bg-gradient-to-b from-sky-700 via-sky-600 to-sky-600 duration-1000 "
              "bg-gradient-to-b from-sky-800 via-sky-700 to-sky-600 duration-1000 "
          : scrolling <= 3000
          ? "bg-gradient-to-b from-purple-900 via-purple-800 to-purple-800"
          : scrolling >= 3000 && scrolling <= 4800
          ? "bg-gradient-to-b from-fuchsia-900 via-fuchsia-800 to-fuchsia-700 "
          : "bg-gradient-to-b from-fuchsia-800 via-fuchsia-700 to-fuchsia-600 "
      }`}
    >
      <img className="w-16 ml-2 z-50" src={icon} alt="" />

      <ul className="hidden overflow-hidden sm:flex">
        {links.map((l: linksProps) => (
          <li
            key={l.id}
            className={`capitalize  font-medium px-4 cursor-pointer text-lg hover:scale-105 duration-100 ${
              params.category === undefined && scrolling <= 470
                ? "text-gray-500"
                : scrolling >= 470 && scrolling <= 4900
                ? "text-gray-300"
                : "text-white"
            }`}
          >
            <Link to={l.link}>{l.link}</Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer mr-4 text-violet-400 z-10 sm:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} className="mr-5" />}
      </div>
      {nav && (
        <ul className="sm:hidden flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen  bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map((l: linksProps) => (
            <li
              key={l.id}
              className="px-4 py-4 capitalize cursor-pointer text-3xl text-violet-200 hover:scale-105 duration-200 "
            >
              <div className="h-12 w-44 border-b-2 border-r-2 border-rose-300 rounded-r-md">
                <Link to={l.link} onClick={() => setNav(!nav)}>
                  {l.link}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
