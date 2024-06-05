"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";

export default function Header() {
  return (
    <div className="fixed top-[20px] left-0 right-0 flex justify-center">
      <motion.div
        className="flex gap-20 flex-row justify-center items-center rounded-full w-[400px] h-[40px] md:w-[600px] border-black bg-cyan-900 opacity-90"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <nav>
          <ul className="flex flex-row gap-6 md:gap-12 text-sky-400 text-sm">
          {
            links.map(link => (
              <li key={link.hash}>
                <Link className="hover:text-sky-50 transition" href={link.hash}>
                  {link.name}
                </Link>
              </li>
            ))
            
          }
          </ul>
        </nav>
      </motion.div>
    </div>
  );
}
