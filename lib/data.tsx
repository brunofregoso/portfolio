import React from "react";
import letterboxd from "../public/letterboxd.png";
import singlecell from "@/public/jupyter.png";
import randomgrub from "@/public/randomgrub.png";
import blnd from "@/public/blnd.png";
import { FaUniversity } from "react-icons/fa";

export const links = [
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
    name: "Blnd | All in one music playlist curator",
    description: "Full stack applicaiion dedicated to allowing users to create accounts with thier sptoify accounts and combine playlists with friends, compare music stats with firends, and generate monthly playlists from their friends top listened tracks.",
    tags: ["Typescript", "NextJS", "Supabase", "NodeJS", "Spotify API", "React", "LastFM API"],
    imageUrl: blnd,
  },
  {
    name: "Letterboxd Collage",
    description: "Developed web application that parses users letterboxd movie catalog and generates a collage of the last 9 movies watched",
    tags: ["React", "PapaParse", "The Movie Database API", "axios"],
    imageUrl: letterboxd,
  },
  {
    name: "Single Cell RNA Clustering Notebook",
    description: "Worked on dataset of over 17,000 cells of an adult temporal lobe sample. Defined 1,576 outliers and then ran a lograithim normalization algorithm to properly apply leidens algorithm",
    tags: ["Jupyter", "Machine Learning", "NumPY", "Seaborn", "Python"],
    imageUrl: singlecell,
  },
  {
    name: "Random resturant finder",
    description: "Web application utilizing the geolocation API to get user coordinates and google places API to get resturants. ",
    tags: ["Javascript", "CSS", "HTML", "Google Maps API", "Geolocation API"],
    imageUrl: randomgrub,
  },

];

export const items = [
  {
    date: "August 2022",
    title: "University of Central Florida",
    subtitle: "B.S. Computer Science- 3.9 GPA",
    desc: "Began my education studying computer science at the Univeristy of Central Florida",
    icon: React.createElement(FaUniversity),
  },
  {
    date: "February 2023",
    title: "PAPER",
    subtitle: "Spanish STEM tutor",
    desc: "Began working at PAPER education company, tutoring in both English and Spanish. Topics included are AP Computer Science A, AP Calculus BC, AP Physics C, and other K-12 mathmematics",
    icon: React.createElement(FaUniversity),
  },
  {
    date: "February 2024",
    title: "University of Central Florida",
    subtitle: "Undergraduate Research Assistant",
    desc: "Worked Under Dr. Haiyun Hu at the Data Integration and Knowledge Discovery Lab, applying machine learning algorithms to cluster single celled RNA-sequences. Tasks included normalizing data, dimensionality reduction, and leidens clustering.",
    icon: React.createElement(FaUniversity),
  },
  {
    date: "August 2024",
    title: "Knight Hacks",
    subtitle: "Hackathon Organizer",
    desc: "Part of hackathon organizing team at University of Central Florida's annual hackathon, Knight Hacks. Tasks included organizing workshops, managing sponsors, and coordinating with other organizers.",
    icon: React.createElement(FaUniversity),
  },
];
