"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Arrow from "./Arrow";

export default function Intro() {
  return (
    <section className="scroll-mt-28" id="home">
      <div className="flex flex-row justify-center">
        <div className="flex flex-col h-[400px] w-[700px]">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex flex-row justify-center"
          >
          </motion.div>
          <motion.p
            className="content-start text-[2rem] md:text-[3rem] text-center text-wrap text-gray-50 pt-[75px]"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            Hi, I&apos;m Bruno Welcome to My Portfolio!
          </motion.p>
          <motion.p
            className="text-[5rem] text-center"
            initial={{ y: -100, opacity: 0 }}
            animate={{
              rotate: [0, 60, 0],
              y: 0,
              opacity: 1,
            }}
          >
            👋
          </motion.p>
        </div>
      </div>
      <Arrow />
    </section>
  );
}
