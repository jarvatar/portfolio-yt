import React from "react";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hey, I'm ${pageInfo?.name}`,
      "AKA Growth Ninja",
      "<h1>a SEO Nerd</h1>",
      "from enterprise to e-commerce",
      "startups to SaaS",
      "<AlsoLovesToCode />",
    ],
    loop: true,
    delaySpeed: 300,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={urlFor(pageInfo?.heroImage).url()}
        alt="Joshua Jarvis"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 tracking-[15px] pb-2">
          {pageInfo?.role}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Case Studies</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
