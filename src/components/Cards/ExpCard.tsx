"use client";

import React, { FC } from "react";
import { Experience } from "../Experience/types";
import Image from "next/image";
import { icon } from "@/assets";
import { useTheme } from "@/context/theme";

type ExpCardType = {
  experience: Experience;
  onClick: (exp: Experience) => void;
};

const ExpCard: FC<ExpCardType> = ({ experience, onClick }) => {
  const { isDarkMode } = useTheme();
  return (
    <div
      className="flex flex-col justify-between border bg-white dark:bg-darkTheme border-gray-400 hover:border-red-500 dark:hover:bg-darkHover rounded-lg p-3 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-300 h-full"
      onClick={() => onClick(experience)}>
      <div>
        <Image
          src={experience.companyLogo}
          alt="company"
          className="w-full h-5 mb-4 object-contain"
        />
        <h3 className="text-lg text-gray-700 mb-2 dark:text-white">
          {experience.position}
        </h3>
        <span className="text-xs text-gray-400 leading-5 mb-4 line-clamp-2">
          {experience.description}
        </span>
      </div>
      <a type="button" className="flex justify-end items-center gap-1 text-sm">
        Read more{" "}
        <Image
          src={icon.arrowRight}
          alt="icon-arrow"
          className={`w-3 ${isDarkMode ? "filter-black-to-white" : ""}`}
        />
      </a>
    </div>
  );
};

export default ExpCard;
