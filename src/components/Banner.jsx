import React from "react";
//images
import image from "../assets/avatar.jpg";

//icons
import { FaGithub, FaLinkedin } from "react-icons/fa";

//Type animations
import { TypeAnimation } from "react-type-animation";

//Motion
import { motion } from "framer-motion";

import { Link } from "react-scroll";

//Variants
import { fadeIn } from "../variants";

import cv from "../assets/cv.pdf";

const Banner = () => {
  return (
    <section id="home" className="min-h-[85vh] lg:min-h-[78vh] flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              NAHUEL <span>VERA</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="mr-2 text-white"> I am a </span>
              <TypeAnimation sequence={["software", 1000, "developer!", 3000]} speed={50} className="text-accent " wrapper="span" repeat={Infinity} />
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <Link to="contact" smooth={true} className="btn btn-lg flex justify-center items-center">
                Contact me
              </Link>
              <a href={cv} download="CV-Vera-Nahuel" className="text-gradient btn-link">
                My CV
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://github.com/nahuelv00" className="flex items-center justify-center gap-x-2" target={"_blank"}>
                <FaGithub />
                <p>Github</p>
              </a>

              <a href="https://www.linkedin.com/in/nahuev00/" target={"_blank"} className="flex items-center justify-center gap-x-2">
                <FaLinkedin />
                <p>Linkedin</p>
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div variants={fadeIn("down", 0.5)} initial="hidden" whileInView={"show"} className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto">
            <img src={image} alt="" className="w-[500px] rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
