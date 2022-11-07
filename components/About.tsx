import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";
// import Brand from "./Brands";

type Props = {
  pageInfo: PageInfo;
  // brands: BrandType[];
};

function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center h-screen md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
        }}
        src={urlFor(pageInfo?.profilePic).url()}
        className="-mb-20 md:mb-0 flex-shrink-0 h-56 w-56 rounded-full object-cover md:rounded md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10 ">
        <h4 className="text-4xl font-semibold ">
          Here is a{" "}
          <span className="underline decoration-[#38bdf8]">little</span>{" "}
          background
        </h4>
        <p className="text-lg md:text-base sm:text-sm">
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
}

export default About;
