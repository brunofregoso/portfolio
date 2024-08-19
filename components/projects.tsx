"use client";

import React from "react";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { StaticImageData } from "next/image";
import Image from "next/image";
import Arrow from "@/components/Arrow";

export default function Projects() {
  return (
    <section
      className="flex flex-row justify-center scroll-mt-28 mt-[32rem]"
      id="projects"
    >
      <div className="flex flex-col justify-center">
        <motion.h1
          className="text-center pt-2 text-gray-50 text-3xl font-semibold"
          /*initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}*/
        >
          Projects
        </motion.h1>
        <div>
          {projects.map((project, index) => (
            <Project key={index}{...project} />
          ))}
        </div>
        <div className="pt-[70px]">
            <Arrow />
          </div>
      </div>
    </section>
  );
}

type ProjectProps = {
  name: String;
  description: String;
  tags: String[];
  imageUrl: StaticImageData;
};

function Project({ name, description, tags, imageUrl }: ProjectProps) {
  return (
    <section className="mt-8 bg-cyan-900 max-w-[20rem] md:max-w-[42rem] border border-black/5 overflow-hidden relative">
      <div className="px-4 py-4 sm:max-w-[50%]">
        <h3 className="text-white text-2xl font-semibold">{name}</h3>
        <p className="text-white mt-2 leading-relaxed">{description}</p>
        <ul className="flex flex-wrap gap-1 mt-3">
          {tags.map((tag, index) => (
            <li className="text-white bg-black/[.7] text-sm tracking-wide uppercase rounded-full px-3 py-1" key={index}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <Image
        src={imageUrl}
        alt="Project image"
        quality={90}
        className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl hidden sm:block"
      />
    </section>
  );
}
