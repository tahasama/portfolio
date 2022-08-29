import { useParams } from "react-router-dom";

import Weddings from "../images/wedding.jpeg";
import Events from "../images/event.jpg";
import Portrait from "../images/portrait.jpg";
import Industrial from "../images/industrial.jpg";
import Fashion from "../images/fashion.jpg";
import Architectural from "../images/architectural.jpg";
import Navbar from "./navbar";

interface galleriesProps {
  id: number;
  gallery: string;
  image: string;
}

const galleries: galleriesProps[] = [
  { id: 30, gallery: "Portrait", image: Portrait },
  { id: 31, gallery: "Architectural", image: Architectural },
  { id: 32, gallery: "Weddings", image: Weddings },
  { id: 33, gallery: "Events", image: Events },
  { id: 34, gallery: "Industrial", image: Industrial },
  { id: 35, gallery: "Fashion", image: Fashion },
  { id: 36, gallery: "Portrait", image: Portrait },
  { id: 37, gallery: "Architectural", image: Architectural },
  { id: 7, gallery: "Architectural", image: Architectural },
  { id: 8, gallery: "Weddings", image: Weddings },
  { id: 9, gallery: "Events", image: Events },
  { id: 10, gallery: "Industrial", image: Industrial },
  { id: 11, gallery: "Fashion", image: Fashion },
  { id: 12, gallery: "Portrait", image: Portrait },
  { id: 13, gallery: "Architectural", image: Architectural },
  { id: 14, gallery: "Weddings", image: Weddings },
  { id: 15, gallery: "Events", image: Events },
  { id: 16, gallery: "Industrial", image: Industrial },
  { id: 17, gallery: "Fashion", image: Fashion },
  { id: 1, gallery: "Weddings", image: Weddings },
  { id: 2, gallery: "Events", image: Events },
  { id: 3, gallery: "Industrial", image: Industrial },
  { id: 4, gallery: "Fashion", image: Fashion },
  { id: 6, gallery: "Portrait", image: Portrait },
  { id: 25, gallery: "Architectural", image: Architectural },
  { id: 26, gallery: "Weddings", image: Weddings },
  { id: 27, gallery: "Events", image: Events },
  { id: 28, gallery: "Industrial", image: Industrial },
  { id: 29, gallery: "Fashion", image: Fashion },
  { id: 18, gallery: "Portrait", image: Portrait },
  { id: 19, gallery: "Architectural", image: Architectural },
  { id: 20, gallery: "Weddings", image: Weddings },
  { id: 21, gallery: "Events", image: Events },
  { id: 23, gallery: "Fashion", image: Fashion },
  { id: 22, gallery: "Industrial", image: Industrial },
  { id: 24, gallery: "Portrait", image: Portrait },
];

// const Images: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const Gallery = () => {
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
          <div className="columns-1 md:columns-2 lg:columns-3 ">
            {galleries.map((c: galleriesProps) => (
              <div key={c.id} className="cursor-pointer ">
                <a href={c.image}>
                  <div className="py-8 z-20 ">
                    <img
                      className="w-full h-full my-[-5px] hover:scale-105  duration-500"
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

export default Gallery;
