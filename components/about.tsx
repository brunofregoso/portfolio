"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import background from "../public/backgroundport.gif";
import avatar from "../public/avatar.jpg";






export default function About() {


    

  return (
    <div>
      <section className="mt-[calc(100vh-6rem)] pb-16 md:pb-24" id="about">
      <div className="flex flex-row justify-center">
        <div className="flex flex-col items-center min-h-[400px] w-[700px]">
          <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          >
            <Image
              src={avatar}
              alt="Bruno Fregoso Frias"
              width={160}
              height={160}
              priority
              className="rounded-full w-32 h-32 md:w-40 md:h-40 object-cover border-2 border-gray-50"
            />
          </motion.div>
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
            AI native Full-stack engineer working on building applications from 0 - 1 by designing data models, async jobs, API services, and UI solutions. 
            Free time usually consists of rock climbing, rocket league, terraria, or basketball. I&apos;ll also tinker around with random projects such as my homelab,
            keyboards (more here 👀), desktop, or whatever rabbit hole i&apos;ve found. 
          </motion.p>
        </div>
      </div>
    </section>
    </div>
  );
}
