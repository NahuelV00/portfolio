import React from "react";

//Icons
import { BsArrowUpRight } from "react-icons/bs";

//MOtion
import { motion } from "framer-motion";

//varians
import { fadeIn } from "../variants";

//Services data
const services = [
  {
    name: "Chat PDF",
    description:
      "Aplicacion con IA, la cual permite subir un archivo PDF y hacer preguntas sobre el mismo, siendo respondidas con IA. En su desarrollo aprendi como configurar y utilizar IA.",
    link: "https://github.com/nahuelvera00/chat-PDF",
  },
  {
    name: "Exam Portal",
    description: "Pagina web para poder realizar examenes, los mismos estan estan divididos por categorias. Este cuenta con un panel de administrador para poderla gestionar.",
    link: "https://github.com/nahuelvera00/ExamPortal-FrontEnd",
  },
  {
    name: "Team Chat",
    description:
      "Aplicacion desarrollada con Next.js para chatear, hacer llamadas y video llamadas en tiempo real mediante Sockets. Este proyecto implico aprender el funcionamiento de sockets y tRPC",
    link: "https://github.com/nahuelvera00/team-chat",
  },
  {
    name: "Dropset Store",
    description: "En este proyecto se desarrollo tanto el cliente como un CMS para poder gestionar productos y aspectos de la pagina, brindando una mejor gestion de la tienda.",
    link: "https://github.com/nahuelvera00/e-commerce-client",
  },
];

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What i Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">My latest projects</h3>
            <a href="https://github.com/nahuelvera00?tab=repositories" target={"_blank"} className="btn btn-sm py-4">
              See my work
            </a>
          </motion.div>

          {/* services */}
          <motion.div variants={fadeIn("left", 0.5)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className="flex-1">
            {/* Services list */}
            <div>
              {services.map((service, index) => {
                //destructure service
                const { name, description, link } = service;
                return (
                  <div className="border-b border-white/20 h-[146px] mb-[38px] flex" key={index}>
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">{name}</h4>
                      <p className="font-secondary leading-tight">{description}</p>
                    </div>
                    <div className="flex flex-col flex-1 items-center justify-center ml-3">
                      <a href={link} target={"_blank"} className="text-gradient text-sm ">
                        Learn Code.
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
