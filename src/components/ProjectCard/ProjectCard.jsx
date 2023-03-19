import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import { github } from "../../assets";

const ProjectCard = ({ project, index }) => {
  const { image_url, title, live_web, git_hub, server, tech, details } =
    project;

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-slate-900 relative p-4 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="h-[300px] rounded-lg s w-full overflow-hidden">
          <img
            className="h-full duration-300  rounded-lg  w-full hover:scale-110 scale-100"
            src={image_url}
            alt=""
          ></img>
        </div>
        <div className=" bg-gray-800 mt-2 p-2 rounded-lg">
          <h1 className="text-2xl font-semibold ">{title}</h1>
                  <p className="text-sm my-2">{details.slice(0, 100)}..</p>
                  <div className="space-x-3 text-xs">
                  <span className="text-blue-500">#react</span>
                  <span className="text-green-500">#mongo</span>
                  <span className="text-purple-500">#node</span>
                  <span className="text-white-500">#express</span>
               </div>
        </div>

        <div className="absolute left-2 top-2 flex justify-end m-4 card-img_hover">
          <div
            onClick={() => window.open(git_hub, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="source code"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>

        <div className="absolute right-2 top-2 flex justify-end m-4 card-img_hover">
          <a target={"_blank"} href={live_web}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
              />
            </svg>
          </a>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
