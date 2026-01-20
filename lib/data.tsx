import React from "react";
import letterboxd from "../public/letterboxd.png";
import singlecell from "@/public/jupyter.png";
import randomgrub from "@/public/randomgrub.png";
import blnd from "@/public/blnd.png";
import fitknights from "@/public/FitKnights.png"
import password from "@/public/parallelpassword.png"
import { FaUniversity } from "react-icons/fa";
import { FaTerminal } from "react-icons/fa";
import { GiMountedKnight } from "react-icons/gi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";

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
    name: "Radioclub | All in one music playlist curator",
    description: "Full stack application dedicated to allowing users to create accounts with thier sptoify accounts and combine playlists with friends, compare music stats with firends, and generate monthly playlists from their friends top listened tracks.",
    tags: ["Typescript", "NextJS", "PostgreSQL", "Spotify API", "React", "LastFM API", "Golang", "Docker"],
    imageUrl: blnd,
  },
  /*{
    name: "Studyboards | ML powered document hub for students",
    description: "Full stack application for students to share documents of all sorts of file formats in a pinterest style format. Utilizes message queues for document uploads, Neo4J to run similarity scores between different boards, and machine learning to prevent duplicate/unsafe uploads.",
    tags: ["Typescript", "Golang", "Kafka", "MongoDB", "React", "Kubernetes"],
  },*/
  {
    name: "Parallel Password Cracker | C++ multithreaded brute force password cracker",
    description: "A CLI program that utilizes worker threads to parallelize all possible combinations for a brute force attack. Used to conduct anaylysis on the effectiveness of password security on modern hardware",
    tags: ["C++", "Python", "Jupyter"],
    imageUrl: password
  },
  {
    name: "Single Cell RNA Clustering Notebook",
    description: "Worked on dataset of over 17,000 cells of an adult temporal lobe sample. Defined 1,576 outliers and then ran a lograithim normalization algorithm to properly apply leidens algorithm",
    tags: ["Jupyter", "Machine Learning", "NumPY", "Seaborn", "Python"],
    imageUrl: singlecell,
  },
  {
    name: "Fit Knights | Join or Create Fitness Challenges",
    description: "Full stack application for users to create or join each other fitness challenges. Microservice to seed random fitness events of varying difficulty/points alongside community challenges. Leaderboard refreshes every week with top preformers. ",
    tags: ["Python", "React", "Express.JS", "MongoDB", "Docker"],
    imageUrl: fitknights,
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
    icon: React.createElement(LiaChalkboardTeacherSolid),
  },
  {
    date: "February 2024",
    title: "University of Central Florida",
    subtitle: "Undergraduate Research Assistant",
    desc: "Worked Under Dr. Haiyun Hu at the Data Integration and Knowledge Discovery Lab, applying machine learning algorithms to cluster single celled RNA-sequences. Tasks included normalizing data, dimensionality reduction, and leidens clustering.",
    icon: React.createElement(GiMountedKnight),
  },
  {
    date: "August 2024",
    title: "Knight Hacks",
    subtitle: "Hackathon Organizer",
    desc: "Part of hackathon organizing team at University of Central Florida's annual hackathon, Knight Hacks. Tasks included organizing workshops, managing sponsors, and coordinating with other organizers.",
    icon: React.createElement(GiMountedKnight),
  },
  {
    date: "May 2025",
    title: "Ubicquia",
    subtitle: "Software Engineer Intern",
    desc: "Full stack engineer at Ubicquia building companies IoT installation platform utilizing message queues, REST api, and a React frontend",
    icon: React.createElement(FaTerminal)
  }
];
