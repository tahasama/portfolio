import React, { FC } from "react";
import { Element } from "react-scroll";

const Contact: FC = () => {
  return (
    <div className="z-0 w-full h-full bg-gradient-to-b from-sky-600 via-sky-600 to-blue-300">
      <Element name="contact"></Element>
      <div className="flex flex-col justify-center pl-16  mt-6">
        {/* <div style={{ backgroundImage: `url(${Events})` }} > */}
        <p className="mt-5  text-3xl font-semibold font-serif text-slate-600">
          Contact
        </p>
        <p className="py-6  font-medium  text-lg text-black  indent-7">
          Submit the form below to get in touch with me :
        </p>
      </div>

      <div className=" flex justify-center items-center mx-16 sm:mx-0 text-lg">
        <form
          action="https://getform.io/f/51af27ec-bb95-41fe-9823-22737df6b50b"
          method="POST"
          className=" flex flex-col w-full md:w-1/2 text-black"
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className=" placeholder-slate-200 p-2 bg-transparent border-2 font-serif border-teal-300 rounded-md  focus:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            className=" placeholder-slate-200 my-4 p-2 bg-transparent border-2 font-serif border-teal-300 rounded-md focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Enter your message"
            rows={8}
            className="placeholder-slate-200 p-2 bg-transparent border-2 font-serif border-teal-300 rounded-md "
          ></textarea>

          <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
