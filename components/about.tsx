"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
       Graduating with a degree in{" "}
        <span className="font-medium">Data Science</span>, I decided to pursue my
        passion for building software. Storing data and deploying ML Apps in Data Science lead me toward software design.
        As someone who has grit, I read many resources to learn{" "}
        <span className="font-medium">software design</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of solving an ambiguous problem and embrace uncertainty. 
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, traveling, photographing and hiking. I also enjoy{" "}
      </p>
    </motion.section>
  );
}