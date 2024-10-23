"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import background from "../public/backgroundport.gif";






export default function About() {


    

  return (
    <div>
      <section className="pt-[32rem] -scroll-mt-[24rem]" id="about">
      <div className="flex flex-row justify-center">
        <div className="flex flex-col items-center h-[400px] w-[700px]">
          <motion.h1 
          className="text-center pt-2 text-gray-50 font-semibold text-3xl"
          initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
          >
            About Me
          </motion.h1>
          <motion.p className="text-center text-wrap text-gray-50 pt-3 text-lg leading-loose max-w-[50%] md:max-w-[42rem]"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          >
            I am currently a second year student at the Unveristy of Central
            Florida studying computer science. I hold a deep interest in web
            developement as well as full stack developement. I have held
            research positions, tutoring jobs, and am now seeking internship
            opportunities. In my portfolio you will find some of past projects
            and expeirences. Please feel free to reach out if you have any
            questions!
          </motion.p>
        </div>
      </div>
    </section>
    </div>
  );
}
