"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="flex flex-row justify-center scroll-mt-28" id="projects">
      <div className="flex flex-col justify-center">
        <motion.h1
            className="text-center pt-2 text-gray-50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
        >
            Projects
        </motion.h1>
        <p className="text-gray-50 text-[75px]">Lelrgergergregergergergergerg</p>
      </div>
    </section>
  );
}
