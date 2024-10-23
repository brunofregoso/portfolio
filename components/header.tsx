"use client";

import React from "react";
import { motion } from "framer-motion";
import { links, projects } from "@/lib/data";
import Link from "next/link";
import { Backdrop, Button, CircularProgress } from "@mui/material";
import Projects from "./projects";
import About from "./about";
import Experience from "./experience";
import Contact from "./Contact";

type LinkHash = "#projects" | "#experience" | "#contact";

const componentMapping: {[key: string]: React.ReactNode} = {
  "#projects": <Projects />,
  "#experience": <Experience />,
  "#contact": <Contact />,
}

export default function Header() {
  const [open, setOpen] = React.useState<LinkHash | null>(null);
  const handleOpen = (hash: LinkHash) => {
    setOpen(hash);
  };
  const handleClose = () => {
    setOpen(null);
  };
  return (
    <div className="fixed top-[20px] left-0 right-0 flex justify-center z-50 bg-transparent">
      <motion.div
        className="flex gap-20 flex-row justify-center items-center rounded-full w-[400px] h-[40px] md:w-[600px] bg-transparent"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <nav>
          <ul className="flex flex-row gap-6 md:gap-12 text-gray-50 text-sm opacity-100">
            {links.map((link) => (
              <li key={link.hash}>
                <Link
                  href={link.hash}
                  className="hover:text-sky-50 transition"
                  onClick={() => handleOpen(link.hash as LinkHash)}

                >
                  {link.name}
                </Link>
                <Backdrop
                  sx={(theme) => ({
                    backgroundColor: "#18181b",
                    zIndex: theme.zIndex.drawer + 1,
                  })}
                  open={Boolean(open)}
                  onClick={handleClose}
                >
                <div
                className="max-w-[80%] max-h-[80%] overflow-y-auto hide-scr bg-zinc-900 p-4 rounded-lg"
                >
                  {open && componentMapping[open]}
                </div>
                </Backdrop>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </div>
  );
}
