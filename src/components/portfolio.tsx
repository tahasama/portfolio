import Weddings from "../images/wedding.jpeg";
import Events from "../images/event.jpg";
import Portrait from "../images/portrait.jpg";
import Industrial from "../images/industrial.jpg";
import Fashion from "../images/fashion.jpg";
import Architectural from "../images/architectural.jpg";
import Music from "../images/music.jpg";
import photo from "../images/photo.jpg";
import { useNavigate } from "react-router-dom";

interface categoriesProps {
  id: number;
  category: string;
  image: string;
}

const Categories: categoriesProps[] = [
  { id: 1, category: "Weddings", image: Weddings },
  { id: 2, category: "Events", image: Events },
  { id: 6, category: "Industrial", image: Industrial },
  { id: 4, category: "Fashion", image: Fashion },
  { id: 7, category: "Music Videos", image: Music },
  { id: 3, category: "Portrait", image: Portrait },
  { id: 5, category: "Architectural", image: Architectural },
];

const Portfolio = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full bg-gradient-to-b from-sky-700 via-sky-600 to-blue-400 ">
      <div className="mx-5 ">
        <div>
          <p className="p-8 text-3xl indent-7 font-semibold font-serif text-slate-300">
            Portfolio
          </p>
          <p className="text-2xl indent-7 mx-20 mb-5 text-slate-300 underline">
            {" "}
            Checkout the diverse categories of my work :
          </p>
        </div>
        <div className="columns-2 md:columns-3 lg:columns-3 h-full ">
          {Categories.map((c: categoriesProps) => (
            <div key={c.id} className="cursor-pointer">
              <div
                className="mb-8 z-20 "
                onClick={() => navigate(`/${c.category}`)}
              >
                <img className=" w-full h-full" src={c.image} alt="wow" />
              </div>
              <div className="h-20 w-full relative mt-[-112px] opacity-70 bg-slate-700"></div>
              <div className="flex justify-center relative items-center mt-[-50px] h-full opacity-1 font-serif font-bold text-xl text-lime-300 my-10">
                <p className="">{c.category}</p>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="columns-2 md:columns-3 lg:columns-4">
          <img className="mb-4" src="https://source.unsplash.com/random/1" />
          <img className="mb-4" src="https://source.unsplash.com/random/2" />
          <img className="mb-4" src="https://source.unsplash.com/random/3" />
          <img className="mb-4" src="https://source.unsplash.com/random/4" />
          <img className="mb-4" src="https://source.unsplash.com/random/5" />
          <img className="mb-4" src="https://source.unsplash.com/random/6" />
          <img className="mb-4" src="https://source.unsplash.com/random/7" />
        </div> */}
      </div>
    </div>
  );
};

export default Portfolio;
