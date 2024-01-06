import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    name: "Skills",
    hash: "#skills",
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

export const experiencesData = [
  {
    title: "Boston University",
    location: "Boston, MA",
    description:
      "Majoring in Data Science with a focus in Machine Learning and NLP",
    icon: React.createElement(LuGraduationCap),
    date: "2020-2024",
  },
  {
    title: "Machine Learning Engineer",
    location: "Boston, MA",
    description:
      "Work for non-profit organization MAPLE, to design and implement a LLM system that capable of explain difficult legislative text.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Library service Desk",
    location: "Boston, MA",
    description:
      "Train new employees and answer any questions head supervisors do not have time for. Enforce library protocols of 100% compliance of COVID-19 guidelines to promote the safety of patrons. Track statistics and complete data entry in Excel.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2024",
  },
 
] as const;

export const projectsData = [
  {
    title: "LLM-DocuAssist",
    description:
      "Would it be great if I can have a document assistant that can asnwers my questions or aid my reading about a pdf doucment while using RAG technique?",
    tags: ["Langchain", "openai", "Streamlit"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Predicting customer churn",
    description:
      "Attracting new customers are always an expensive approach such as ads or sales. Is it possible to figure out a way to retain customers or understand why customers leave with ML?",
    tags: ["Streamlit", "Python", "Sk-learn", "Pandas", "Seaborn"],
    imageUrl: rmtdevImg,
  },
  {
    title: "LLM-Email-Assistant",
    description:
      "Create a system that is capable of drafting responses to common business emails, such as customer inquiries or partnership requests.",
    tags: ["Langchain", "openai", "Streamlit", "Python"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Google Cloud function",
  "MongoDB",
  "Google Cloud Compute Engine",
  "MongoDB",
  "Sklearn",
  "langchain",
  "streamlit",
  "Google CloudSQL",
  "Tensorflow",
  "FastAPI",
  "Python",
  "Flask",
  "Pytorch",
] as const;
