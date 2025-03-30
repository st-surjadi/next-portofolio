import { assets, icon } from "@/assets";
import Image from "next/image";
import React from "react";
import { InfoType } from "./types";
import InfoCard from "../Cards/InfoCard";
import { NAVIGATION_ID } from "../Navbar/utils";

const infos: InfoType[] = [
  {
    icon: icon.codeXml,
    title: "Languages",
    description: "HTML, CSS, Javascript, Typescript, Dart, Go, SQL",
  },
  {
    icon: icon.blocks,
    title: "Frameworks & Libraries",
    description: "React, NextJS, Flutter, Svelte, Angular",
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
    <div
      id={NAVIGATION_ID.ABOUT}
      className="w-full max-w-7xl mx-auto p-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-ovo">About Me</h2>
      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.profile}
            alt="profile"
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <p className="mb-6 max-w-2xl font-ovo">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tristique, nisl eget accumsan tincidunt, nunc nunc ultricies nisl,
            eget efficitur urna nunc vitae nunc. Sed tristique, nisl eget
            accumsan tincidunt, nunc nunc ultricies nisl, eget efficitur urna
            nunc vitae nunc.
          </p>

          <ul className="mb-6 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
            {infos.map((info, index) => (
              <li key={index} className="h-full">
                <InfoCard {...info} />
              </li>
            ))}
          </ul>

          <h4 className="mb-3 text-gray-700 font-ovo">Tools:</h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            {tools.map((tool, index) => (
              <div key={index} className="tooltip">
                <li
                  key={index}
                  className="flex items-center justify-center w-8 sm:w-10 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:scale-125 duration-300">
                  <div className="tooltip">
                    <Image src={tool.icon} alt="tool" className="w-6" />
                  </div>
                </li>
                <span className="tooltip-text">{tool.tooltip}</span>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
