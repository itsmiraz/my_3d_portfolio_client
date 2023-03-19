import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Hero = () => {
  return (
    <div className="py-10 pt-20 place-items-center grid grid-cols-2">
      <div className="">
        <h1 className="text-5xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold">
          Hello World!
        </h1>
        <h1 className="text-9xl font-bold my-2">
          I'm <span className="text-violet-500">Miraj</span>
        </h1>
        <div className="relative  ">
          <h1 className="text-2xl pl-3 relative z-50 font-semibold">
            {" "}
            Developer from Bangladesh
          </h1>
          <div className="absolute h-full duration-200 ease-in-out  w-2 hover:w-32 z-40  bg-pink-500   top-0 left-0"></div>
        </div>
      </div>
      <div className="w-full  h-[500px]">
        <EarthCanvas />
      </div>
    </div>
  );
};

export default Hero;
