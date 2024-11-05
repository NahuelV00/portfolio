import React from "react";

//COunt up
import CountUp from "react-countup";
//intersection observer
import { useInView } from "react-intersection-observer";

//motion
import { motion } from "framer-motion";

//varian
import { fadeIn } from "../variants";

//images
import html from "../assets/stacks/html.svg";
import css from "../assets/stacks/css.svg";
import javascript from "../assets/stacks/javascript.svg";
import react from "../assets/stacks/react.svg";
import java from "../assets/stacks/java.svg";
import spring from "../assets/stacks/springio.svg";
import node from "../assets/stacks/node.svg";
import redux from "../assets/stacks/redux.svg";
import tailwind from "../assets/stacks/tailwindcss.svg";
import express from "../assets/stacks/express.svg";
import typescript from "../assets/stacks/typescript.svg";
import next from "../assets/stacks/next-js.svg";

import mongo from "../assets/stacks/mongodb.svg";
import mysql from "../assets/stacks/mysql.svg";
import postgresql from "../assets/stacks/postgresql.svg";

import postman from "../assets/stacks/postman.svg";
import linux from "../assets/stacks/linux.svg";
import git from "../assets/stacks/git.svg";
import github from "../assets/stacks/github.svg";
import docker from "../assets/stacks/docker.svg";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section id="about" className="min-h-[85vh] max-h-[85vh] lg:min-h-[78vh] flex items-center" ref={ref}>
      <div className="container mx-auto">
        <div className="flex items-center flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[600px] mix-blend-lighten bg-top"
          ></motion.div>
          {/* text */}
          <motion.div variants={fadeIn("left", 0.5)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className="flex-1">
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-0">I'm a Fullstack Developer</h3>
            <p className="mb-6">Estas son las tecnologias y frameworks que mas suelo utilizar.</p>

            {/* tech stacks */}
            <h3 className="h3 mb-0 ">Tech Stacks</h3>
            <div className="mb-2 flex max-w-[60px] gap-x-2">
              <img src={html} alt="HTML" className="bg-white rounded-md" />
              <img src={css} alt="CSS" className="bg-white rounded-md" />
              <img src={tailwind} alt="TailwindCSS" className="bg-white rounded-md p-1" />
              <img src={javascript} alt="Javascript" className="bg-white rounded-md" />
              <img src={typescript} alt="Typescript" className="bg-white rounded-md" />
              <img src={node} alt="" className="bg-white rounded-md" />
            </div>
            <div className="mb-4 flex max-w-[60px] gap-x-2">
              <img src={express} alt="" className="bg-white rounded-md p-1" />

              <img src={react} alt="React" className="bg-white rounded-md" />
              <img src={redux} alt="Redux" className="bg-white rounded-md p-1" />
              <img src={next} alt="Next" className="bg-white rounded-md" />
              <img src={spring} alt="Spring Boot" className="bg-white rounded-md p-1" />
              <img src={java} alt="Java" className="bg-white rounded-md p-1" />
            </div>

            {/* Databases */}
            <h3 className="h3 mb-0 ">Databases</h3>
            <div className="mb-4 flex max-w-[60px] gap-x-2">
              <img src={mongo} alt="" className="bg-white rounded-md p-1" />
              <img src={mysql} alt="" className="bg-white rounded-md p-1" />
              <img src={postgresql} alt="" className="bg-white rounded-md p-1" />
            </div>

            {/* Others */}
            <h3 className="h3 mb-0 ">Tools & Others</h3>
            <div className="mb-10 flex max-w-[60px] gap-x-2">
              <img src={git} alt="" className="bg-white rounded-md p-1" />
              <img src={github} alt="" className="bg-white rounded-md p-1" />
              <img src={postman} alt="" className="bg-white rounded-md p-1" />
              <img src={docker} alt="" className="bg-white rounded-md p-1" />
              <img src={linux} alt="" className="bg-white rounded-md p-1" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
