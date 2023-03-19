import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  return (
    <section>
       <div className="relative text-gray-500 my-2 py-2 ">
          <div className="absolute">
            <p className="text-xs"> <span>{'<'}</span> h1  <span>{'>'}</span> </p>
            <div className="h-14 md:h-20 w-[1px] left-1 top-0 bg-gray-600"></div>
            <p className="text-xs"><span>{'<'}</span> h1  <span>{'/>'}</span></p>
          </div>

          <div className="p-3">
          <h2 className="bg-clip-text text-6xl md:text-8xl font-bold  text-transparent bg-gradient-to-r from-pink-500 to-blue-500">Skill Set.</h2>
         </div>
        </div>
        <div className='flex my-10 flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  </section>
  );
};

export default SectionWrapper(Tech, "");
