import { useParams } from "react-router-dom";

import Weddings from "../images/wedding.jpeg";
import Events from "../images/event.jpg";
import Portrait from "../images/portrait.jpg";
import Industrial from "../images/industrial.jpg";
import Fashion from "../images/fashion.jpg";
import Architectural from "../images/architectural.jpg";
import Music from "../images/music.jpg";
import Navbar from "./navbar";

interface categoriesProps {
  id: number;
  category: string;
  image: string;
}

const Categories: categoriesProps[] = [
  { id: 1, category: "Weddings", image: Weddings },
  { id: 2, category: "Events", image: Events },
  { id: 3, category: "Industrial", image: Industrial },
  { id: 4, category: "Fashion", image: Fashion },
  { id: 5, category: "Music Videos", image: Music },
  { id: 6, category: "Portrait", image: Portrait },
  { id: 7, category: "Architectural", image: Architectural },
  { id: 1, category: "Weddings", image: Weddings },
  { id: 2, category: "Events", image: Events },
  { id: 3, category: "Industrial", image: Industrial },
  { id: 4, category: "Fashion", image: Fashion },
  { id: 5, category: "Music Videos", image: Music },
  { id: 6, category: "Portrait", image: Portrait },
  { id: 7, category: "Architectural", image: Architectural },
  { id: 1, category: "Weddings", image: Weddings },
  { id: 2, category: "Events", image: Events },
  { id: 3, category: "Industrial", image: Industrial },
  { id: 4, category: "Fashion", image: Fashion },
  { id: 5, category: "Music Videos", image: Music },
  { id: 6, category: "Portrait", image: Portrait },
  { id: 7, category: "Architectural", image: Architectural },
  { id: 1, category: "Weddings", image: Weddings },
  { id: 2, category: "Events", image: Events },
  { id: 3, category: "Industrial", image: Industrial },
  { id: 4, category: "Fashion", image: Fashion },
  { id: 5, category: "Music Videos", image: Music },
  { id: 6, category: "Portrait", image: Portrait },
  { id: 7, category: "Architectural", image: Architectural },
  { id: 1, category: "Weddings", image: Weddings },
  { id: 2, category: "Events", image: Events },
  { id: 3, category: "Industrial", image: Industrial },
  { id: 4, category: "Fashion", image: Fashion },
  { id: 5, category: "Music Videos", image: Music },
  { id: 6, category: "Portrait", image: Portrait },
  { id: 7, category: "Architectural", image: Architectural },
  { id: 1, category: "Weddings", image: Weddings },
  { id: 2, category: "Events", image: Events },
  { id: 3, category: "Industrial", image: Industrial },
  { id: 4, category: "Fashion", image: Fashion },
  { id: 5, category: "Music Videos", image: Music },
  { id: 6, category: "Portrait", image: Portrait },
  { id: 7, category: "Architectural", image: Architectural },
];

// const Images: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const Category = () => {
  const params = useParams();

  return (
    <>
      <Navbar />
      <div
        className={`absolute bg-gradient-to-b from-purple-800 via-fuchsia-700 to-pink-300`}
      >
        <div className="m-5">
          <p className="p-8 mt-20 text-4xl underline indent-7 font-medium font-serif text-slate-300">
            {params.category} Gallery :
          </p>
          <p className="text-2xl indent-7 mx-20 mb-16 text-slate-900 space-x-4 tracking-wide font-serif">
            {" "}
            Welecome to the {params.category} Gallery, here you can browse our
            finest collection,
          </p>
          <div className="columns-2 md:columns-3 lg:columns-4 h-full">
            {Categories.map((c: categoriesProps) => (
              <div key={c.id} className="cursor-pointer ">
                <a href={c.image}>
                  <div className="mb-4 z-20 ">
                    <img
                      className="w-full h-full hover:scale-105 duration-500"
                      src={c.image}
                      alt="wow"
                    />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
