"use client";

import Image from "next/image";
import React from "react";
import { InfoType } from "./types";
import InfoCard from "../Cards/InfoCard";
import { NAVIGATION_ID } from "../Navbar/utils";
import { assets, icon } from "@/assets";
import { motion } from "motion/react";

const infos: InfoType[] = [
  {
    icon: icon.codeXml,
    title: "Languages",
    description: "HTML, CSS, Javascript, Typescript, Dart, Go, SQL",
  },
  {
    icon: icon.blocks,
    title: "Frameworks & Libraries",
    description: "React, NextJS, Flutter, Svelte, Angular, Strapi",
  },
  {
    icon: icon.graduationCap,
    title: "Education",
    description: (
      <span>
        Bachelor in Biomedical Eng.
        <br /> Bandung Institute of Technology
      </span>
    ),
  },
];

const tools = [
  { icon: icon.vscode, tooltip: "Visual Studio Code" },
  { icon: icon.trae, tooltip: "Trae IDE" },
  { icon: icon.git, tooltip: "Git" },
  { icon: icon.postman, tooltip: "Postman" },
  { icon: icon.firebase, tooltip: "Firebase" },
  { icon: icon.dbeaver, tooltip: "DBeaver" },
];

const About: React.FC = () => {
  return (
    <motion.div
      id={NAVIGATION_ID.ABOUT}
      className="w-full max-w-7xl mx-auto p-10 scroll-mt-20">
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="text-center mb-2 text-lg font-ovo">
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="text-center text-5xl font-ovo">
        About Me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.profile}
            alt="profile"
            className="w-full rounded-3xl"
          />
        </motion.div>
        <div className="flex-1">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="mb-6 max-w-2xl font-ovo">
            Originally a Biomedical Engineer graduate, I transitioned into
            software development through self-learning. Outside of work, I enjoy
            playing basketball and have recently picked up a love for reading
            and writing.
          </motion.p>

          <ul className="mb-6 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
            {infos.map((info, index) => (
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.2 + 0.6,
                }}
                key={index}
                className="h-full">
                <InfoCard {...info} />
              </motion.li>
            ))}
          </ul>

          <motion.h4
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.4,
              delay: 1,
            }}
            className="mb-3 text-gray-700 dark:text-white font-ovo">
            Tools:
          </motion.h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            {tools.map((tool, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1 + 1,
                }}
                key={index}
                className="tooltip">
                <li
                  key={index}
                  className="flex items-center justify-center w-8 sm:w-10 aspect-square border bg-white dark:bg-darkTheme hover:bg-lightHover dark:hover:bg-darkHover border-gray-400 hover:border-red-500 rounded-lg cursor-pointer hover:scale-125 duration-300">
                  <div className="tooltip">
                    <Image src={tool.icon} alt="tool" className="w-6" />
                  </div>
                </li>
                <span className="tooltip-text">{tool.tooltip}</span>
              </motion.div>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
