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

export const items = [
  {
    title: "August 2022",
    cardTitle: "University of Central Florida",
    cardSubtitle: "B.S. Computer Science- 3.9 GPA",
    cardDetailedText: "Began my education studying computer science at the Univeristy of Central Florida",
  },
  {
    title: "February 2023",
    cardTitle: "PAPER",
    cardSubtitle: "Spanish STEM tutor",
    cardDetailedText: "Began working at PAPER education company, tutoring in both English and Spanish. Topics included are AP Computer Science A, AP Calculus BC, AP Physics C, and other K-12 mathmematics",
  },
  {
    title: "February 2024",
    cardTitle: "University of Central Florida",
    cardSubtitle: "Undergraduate Research Assistant",
    cardDetailedText: "Worked Under Dr. Haiyun Hu at the Data Integration and Knowledge Discovery Lab, applying machine learning algorithms to cluster single celled RNA-sequences. Tasks included normalizing data, dimensionality reduction, and leidens clustering.",
  }
];
