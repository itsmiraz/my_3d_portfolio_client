import React, { useRef, useState } from "react";
import { fadeIn, textVariant } from "../utils/motion";

import { motion } from "framer-motion";

import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";

const Hero = () => {
  return (
    <div id="#" className="py-10 overflow-hidden px-10  relative  place-items-center grid grid-cols-1  md:grid-cols-2">
     <motion.div
       variants={textVariant()}
        className=" rounded-2xl select-none"
      >
        <h1 className="text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold">
          Hello World!
        </h1>
        <h1 className="text-8xl md:text-9xl font-bold my-2">
          I'm <span className="text-violet-500">Miraj</span>
        </h1>
        <div className="relative  ">
          <h1 className="text-2xl pl-3 relative z-50 font-semibold">
            {" "}
           Passoniate Developer from Bangladesh
          </h1>
          <div className="absolute h-full duration-200 ease-in-out  w-1 hover:w-32 z-40  bg-pink-500   top-0 left-0"></div>
      </div>
      </motion.div>
      <div className='absolute xs:bottom-10 bottom-0 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-white mb-1'
            />
          </div>
        </a>
      </div>
      <motion.div
          variants={textVariant()}
        className=" rounded-2xl w-full h-[400px] md:h-[500px]"
      > 
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default Hero;
