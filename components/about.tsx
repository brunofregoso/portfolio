"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import background from "../public/backgroundport.gif";






export default function About() {


    

  return (
    <div>
      <section className="mt-[100vh]" id="about">
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
            I'm a senior at the University of Central Florida where I studied computer science! Im passionate about full stack engineering
            and solving complex problems with software. I have experience as a full stack engineer building platforms to deploy IoT devices where I learned about
            building complex time-efficient and fault tolerant systems. I'm seeking opportunities where I can make an impact on day one while collecting mentorship
            from talented engineers.
          </motion.p>
        </div>
      </div>
    </section>
    </div>
  );
}
