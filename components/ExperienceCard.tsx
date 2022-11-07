import React from "react";
import { motion } from "framer-motion";
import { Experience, Technology } from "../typings";
import { urlFor } from "../sanity";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px]  xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={urlFor(experience.companyImage).url()}
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience.company}</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              className="h-10 w-10 rounded-full"
              src={urlFor(technology.image).url()}
              alt=""
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg h-96 overflow-y-scroll scrollbar-thin scrollbar-track-black scrol pr-5">
          {experience.points.map((point, i) => (
            <li id="expoints" key={i}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.2,
                  delayChildren: 0.3,
                  staggerChildren: 0.2,
                }}
              >
                <ChevronRightIcon className="w-5 h-5 float-left mt-1 pr-2 text-blue-500 " />
                {point}{" "}
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
