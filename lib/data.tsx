import React from "react";
import letterboxd from "../public/letterboxd.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
 
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projects = [
  {
    name: "Letterboxd Collage",
    description: "Developed web application that parses users letterboxd movie catalog and generates a collage of the last 9 movies watched",
    tags: ["React", "PapaParse", "The Movie Database API", "axios"],
    imageUrl: letterboxd,
  }

] as const;

