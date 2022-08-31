import About from "./components/about";
import Contact from "./components/contact";
import Films from "./components/films";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Portfolio from "./components/portfolio";
import Social from "./components/social";
import { motion } from "framer-motion";
import React, { useState } from "react";

function App() {
  return (
    <div className="">
      <Navbar />
      <Home />
      <Social />
      <About />
      <Portfolio />
      <Films />
      <Contact />
    </div>
  );
}

export default App;
