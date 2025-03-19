import React from "react";
import Header from "./Header";
import About from "./About";

import { motion } from "framer-motion";

function Hero() {
  return (
    // <div className="bg-[conic-gradient(at_70%_50%,#FF7700,#F7F7CA,#1E1E1E,#FF7700)] min-h-screen"></div>

    <div className=" relative font-poppins text-center bg-primary text-white">
      <div className=" relative z-10">
        <Header />
        <div>
          <h1 className=" cursor-pointer text-secondary  leading-none font-ramusbold  text-center text-[300px] ">
            JKC
          </h1>
          <p className=" font-lustria text-tertiary right-96 text-[20px] pb-5">
            Quantum Computers Can't Crack This. Good Luck Trying.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
