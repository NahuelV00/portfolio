import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import whatsapp from "../assets/stacks/whatsapp.svg";
import email from "../assets/stacks/email.svg";
import linkedin from "../assets/stacks/linkedin.svg";

const Contact = () => {
  return (
    <section id="contact" className="py-16 lg:section flex items-center min-h-[80vh]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row ">
          {/* TEXT */}
          <div className="flex-1">
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">Get in touch</h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br /> together!
              </h2>
            </div>
          </div>

          {/* froms */}
          <div className="flex w-full lg:w-[600px] border-1px border border-accent/20 rounded-xl items-center">
            <div className="w-full flex lg:flex-1 flex-col m-5 justify-between items-center gap-y-3">
              <a href="mailto:nahuev00@gmail.com" className="w-full  bg-accent/20 hover:bg-accent/30 rounded-md py-4 flex justify-center items-center gap-x-3">
                <img src={email} alt="" className="w-[30px]" />
                <p>Email</p>
              </a>

              <a
                href="https://www.linkedin.com/in/nahuev00/"
                target={"_blank"}
                className="w-full  bg-accent/20 hover:bg-accent/30 rounded-md py-4 flex justify-center items-center gap-x-3"
              >
                <img src={linkedin} alt="" className="w-[30px]" />
                <p>Linkedin</p>
              </a>

              <a href="https://wa.link/f7zhht" target={"_blank"} className="w-full  bg-accent/20 hover:bg-accent/30 rounded-md py-4 flex justify-center items-center gap-x-3">
                <img src={whatsapp} alt="" className="w-[30px]" />
                <p>Whatsapp</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
