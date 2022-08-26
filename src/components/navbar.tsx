import { FC, useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import icon from "../images/favicon.png";

interface linksProps {
  id: number;
  link: string;
}

const links = [
  { id: 1, link: "home" },
  { id: 2, link: "about" },
  { id: 3, link: "portfolio" },
  { id: 4, link: "experience" },
  { id: 5, link: "conctact" },
];

const Navbar: FC = () => {
  const [nav, setNav] = useState<boolean>(false);
  const [scrolling, setScrolling] = useState(0);

  useEffect(() => {
    scrolled();
    // adding the event when scroll change Logo
    window.addEventListener("scroll", scrolled);
  }, []);

  const scrolled = () => {
    setScrolling(window.scrollY);
  };

  return (
    <div
      className={`flex justify-between items-center w-full h-20 text-white fixed px-4 ${
        scrolling <= 450
          ? "bg-black"
          : "bg-radient-gray-800 via-black duration-300"
      }`}
    >
      <img className="w-16 ml-2" src={icon} alt="" />

      <ul className="hidden sm:flex">
        {links.map((l: linksProps) => (
          <li
            key={l.id}
            className="capitalize font-medium px-4 cursor-pointer text-gray-500 hover:scale-105 duration-100"
          >
            {l.link}
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer mr-4 z-10 text-violet-400 sm:hidden"
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
