import Weddings from "../images/wedding.jpeg";
import Events from "../images/event.jpg";
import Portrait from "../images/portrait.jpg";
import Industrial from "../images/industrial.jpg";
import Fashion from "../images/fashion.jpg";
import Architectural from "../images/architectural.jpg";
import Music from "../images/music.jpg";
import { useNavigate } from "react-router-dom";
import { ImArrowRight } from "react-icons/im";

interface categoriesProps {
  id: number;
  category: string;
  image: string;
}

const Categories: categoriesProps[] = [
  { id: 1, category: "Weddings", image: Weddings },
  { id: 2, category: "Events", image: Events },
  { id: 6, category: "Industrial", image: Industrial },
  { id: 7, category: "Music Videos", image: Music },
  { id: 4, category: "Fashion", image: Fashion },
  { id: 3, category: "Portrait", image: Portrait },
  { id: 5, category: "Architectural", image: Architectural },
];

const Portfolio = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full bg-gradient-to-b from-sky-700 via-sky-600 to-blue-400 ">
      <div className="pt-[100px] sm:pt[0%] sm:pt-[200px]">
        <p className="p-8 text-3xl  indent-7 font-semibold font-serif text-slate-300">
          Portfolio Wall
        </p>

        <div className="columns-2 md:columns-3 lg:columns-3 mx-3 ">
          {Categories.map((c: categoriesProps) => (
            <div
              key={c.id}
              className=" cursor-pointer group mb-5 origin-top hover:rotate-1 duration-1000 "
            >
              <div className=" " onClick={() => navigate(`/${c.category}`)}>
                <img className=" w-full h-full" src={c.image} alt="wow" />
              </div>
              <div className="relative">
                <div className=" mt-[-160px] opacity-70 bg-slate-700 h-40 "></div>
                <div className="mt-[-90px] flex flex-col justify-center relative items-center  h-full opacity-1 font-serif font-medium text-2xl text-lime-300 my-10 tracking-wide">
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
                {/* <div className="bottom-[170px]  md:bottom-[260px] flex flex-col justify-center relative items-center  mt-[-50px] h-full opacity-1 font-serif font-medium text-2xl text-lime-300 my-10 tracking-wide">
                <p className="group-hover:tracking-widest m-[-1px] p-0  duration-700 ">
                  {c.category}
                </p>
                <br />
                <div className=" flex flex-row justify-center items-center opacity-0 group-hover:opacity-100 mt-[-30px] duration-1000">
                  <p> go to gallery </p>
                  <div className="mx-4 ">
                    <ImArrowRight />
                  </div>
                </div>
              </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
