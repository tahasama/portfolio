import Camera from "../images/camera.jpg";
import Camera2 from "../images/camera2.jpg";
import Drone from "../images/drone.jpg";
import { Parallax } from "react-parallax";

const About = () => {
  return (
    <div className="z-0 h-full bg-black">
      <div className="flex flex-col justify-center pl-16 ">
        {/* <div style={{ backgroundImage: `url(${Events})` }} > */}
        <p className="my-7 text-3xl font-semibold font-serif text-slate-300">
          About
        </p>
        <div className=" text-2xl indent-7  h-full ">
          <Parallax strength={-300} bgImage={Camera2}>
            {/* <Background>
              <img src={Camera} alt="camera" className="w-[10000px] p-32" />
            </Background> */}
            <div className=" h-[520px]  w-screen text-white">
              <p className="absolute top-[40%] right-[20%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur, voluptas assumenda laboriosam, aperiam aliquid
                excepturi nam eveniet aliquam veniam quisquam ad quam omnis quo
                placeat repellat inventore veritatis necessitatibus repudiandae.
              </p>
            </div>
          </Parallax>
          {/* <br /> */}
          <Parallax strength={300} bgImage={Drone}>
            {/* <Background>
              <img src={Camera} alt="camera" className="w-[10000px] p-32" />
            </Background> */}
            <div className=" h-[600px] w-screen text-white">
              <p className="absolute top-[40%] left-[20%] ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur, voluptas assumenda laboriosam, aperiam aliquid
                excepturi nam eveniet aliquam veniam quisquam ad quam omnis quo
                placeat repellat inventore veritatis necessitatibus repudiandae.
              </p>
            </div>
          </Parallax>
          <br />
          <Parallax strength={-300} bgImage={Camera} className="p-0 m-0">
            {/* <Background>
              <img src={Camera} alt="camera" className="w-[10000px] p-32" />
            </Background> */}
            <div className=" h-[500px] w-screen text-white">
              <p className="absolute top-[40%] right-[20%]  ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur, voluptas assumenda laboriosam, aperiam aliquid
                excepturi nam eveniet aliquam veniam quisquam ad quam omnis quo
                placeat repellat inventore veritatis necessitatibus repudiandae.
              </p>
            </div>
          </Parallax>
        </div>
      </div>
    </div>
  );
};

export default About;
