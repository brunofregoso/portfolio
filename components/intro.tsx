"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section
    className="scroll-mt-28"
    id="home"
    >
      <div className="flex flex-row justify-center">
      <div className="flex flex-col h-[400px] w-[700px]">
        <motion.p 
        className="content-start text-[2rem] md:text-[3rem] text-center text-wrap text-gray-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        >
          Hi, I'm Bruno Welcome to My Portfolio!
        </motion.p>
        <motion.p 
        className="text-[10rem] text-center"
        initial={{ y: -100, opacity: 0 }}
        animate={{
            rotate: [0, 60, 0],
            y: 0,
            opacity: 1
          }}
        >
        👋
        </motion.p>
      </div>
    </div>
    </section>
  );
}
