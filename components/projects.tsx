"use client";

import React from "react";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { StaticImageData } from "next/image";
import Image from "next/image";

export default function Projects() {
  return (
    <section
      className="flex flex-row justify-center scroll-mt-28"
      id="projects"
    >
      <div className="flex flex-col justify-center">
        <motion.h1
          className="text-center pt-2 text-gray-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Projects
        </motion.h1>
        <div>
          {projects.map((project, index) => (
            <Project {...project} />
          ))}
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
    <section>
      <h3>{name}</h3>
      <p>{description}</p>
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
      <Image src={imageUrl} alt="Project image" quality={90} />
    </section>
  );
}
