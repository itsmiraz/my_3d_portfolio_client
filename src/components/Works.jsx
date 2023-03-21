import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import ProjectCard from "./ProjectCard/ProjectCard";

const Works = () => {
  const [viewMore, setViewMore] = useState(3);

  return (
    <>
      <motion.div id="works">
        <p className={`${styles.sectionSubText} `}>My work</p>
        <div className="relative h-full text-gray-500 my-2 py-2 ">
          <div className="absolute">
            <p className="text-xs">
              {" "}
              <span>{"<"}</span> h1 <span>{">"}</span>{" "}
            </p>
            <div className="h-14 md:h-20 w-[1px] left-1 top-0 bg-gray-600"></div>
            <p className="text-xs">
              <span>{"<"}</span> h1 <span>{"/>"}</span>
            </p>
          </div>

          <div className="p-3">
            <h2 className="bg-clip-text text-6xl md:text-8xl font-bold  text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Projects.
            </h2>
          </div>
        </div>
      </motion.div>

      <div className="w-full flex">
        <motion.p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 grid  md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-7">
        {projects.slice(0, viewMore).map((project, index) => (
          <ProjectCard
            project={project}
            index={index}
            key={project.id}
          ></ProjectCard>
        ))}
      </div>

      <div className="flex justify-center my-6">
        {viewMore === 9 ? (
          <button
            onClick={() => setViewMore(viewMore - 3)}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500"
          >
            View Less
          </button>
        ) : (
          <button
            onClick={() => setViewMore(viewMore + 3)}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500"
          >
            View More
          </button>
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
