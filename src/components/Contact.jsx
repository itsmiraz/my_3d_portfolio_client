import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();
   

    const forme = e.target;
    emailjs
      .sendForm(
        "service_g8r92cr",
        "template_2jn8jje",
        form.current,
        "hkpbt1u5XkzDyGz5Q"
      )
      .then(
        result => {
          toast.success("Email Sent");
          forme.reset();
        },
        error => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      id="#contact"
      className={`xl:mt-12 py-10 bg-gray-900 rounded-lg backdrop-blur-2xl grid grid-cols-1 place-items-center md:grid-cols-2  gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className=" bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <div className="relative  text-gray-500 my-4 py-2 ">
          <div className="absolute">
            <p className="text-xs"> <span>{'<'}</span> h1  <span>{'>'}</span> </p>
            <div className="h-16 w-[1px] left-1 top-0 bg-gray-600"></div>
            <p className="text-xs"><span>{'<'}</span> h1  <span>{'/>'}</span></p>
          </div>

          <div className="p-3">
          <h2 className="bg-clip-text text-6xl font-bold  text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Contact.</h2>
         </div>
        </div>
        <p className="w-full  ">
              Feel free to send me any message about me or wanna hire me or need
              any help in your project. I will reply you as soon as possible.
              Please enter a valid emal so that I can contact you.{" "}
            </p>
     
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 p-5  md:pr-10 xl:h-auto md:h-[550px] h-[350px]"
      >
       <form
          ref={form}
          onSubmit={sendEmail}
          className="  relative z-20 text-white flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <fieldset className=" rounded-md shadow-sm ">
            <div className="">
              <div className="grid my-2 gap-5 grid-cols-2">
                <div className="">
                  <label htmlFor="username" className="text-lg">
                    Name
                  </label>
                  <input
                    required
                    name="user_name"
                    id="username"
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-gray-700 focus:outline-none text-gray-100 rounded py-2 px-2"
                  />
                </div>
                <div className=" ">
                  <label htmlFor="username" className="text-lg">
                    Email
                  </label>
                  <input
                    required
                    name="user_email"
                    id="username"
                    type="text"
                    placeholder="Your Email"
                    className="w-full bg-gray-700 focus:outline-none  text-gray-100 rounded py-2 px-2"
                  />
                </div>
              </div>
              <div className="col-span-full">
                <p htmlFor="bio" className="text-lg  my-2">
                  Your Message
                </p>
                <textarea
                  name="message"
                  required
                  id="bio"
                  placeholder="Your Message"
                  className="w-full bg-gray-700 focus:outline-none rounded p-2   text-gray-100 h-28"
                ></textarea>
              </div>
              <div className="col-span-full">
                <div className="flex items-center space-x-2">
                  <button
                    type="submit"
                    value="Send"
                    className="px-4 py-1 font-semibold my-2 rounded bg-gray-800 text-white"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
