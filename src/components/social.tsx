import { FC } from "react";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";

interface linksProps {
  id: number;
  link: JSX.Element;
  href: string;
}

const links = [
  {
    id: 1,
    link: (
      <>
        Instagram{" "}
        <TiSocialInstagram
          size={30}
          className="bg-gradient-to-bl from-purple-700 to-orange-400 rounded"
        />
      </>
    ),
    href: "https://instagram.com",
  },
  {
    id: 2,
    link: (
      <>
        Linkedin{" "}
        <TiSocialLinkedin
          size={30}
          className="text-blue-700 bg-white rounded"
        />
      </>
    ),
    href: "https://linkedin.com",
  },
  {
    id: 3,
    link: (
      <>
        Twitter{" "}
        <TiSocialTwitter
          size={30}
          className="text-cyan-600  bg-white rounded"
        />
      </>
    ),
    href: "https://twitter.com",
  },
  {
    id: 4,
    link: (
      <>
        Facebook{" "}
        <TiSocialFacebook
          size={30}
          className="text-blue-900  bg-white rounded"
        />
      </>
    ),
    href: "https://facebook.com",
  },
];

const social: FC = () => {
  return (
    <div className="flex flex-col top-1/3 left-0 fixed text-white ">
      <ul className="rounded">
        {links.map((l: linksProps) => (
          <li
            key={l.id}
            className="bg-gradient-to-r from-slate-800 to-slate-600 px-4 py-2 flex justify-between items-center w-40 ml-[-105px] hover:rounded-md hover:ml-[-10px] duration-500"
          >
            <a
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center w-full "
            >
              {l.link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default social;
