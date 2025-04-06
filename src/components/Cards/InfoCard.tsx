import React, { FC } from "react";
import { InfoType } from "../About/types";
import Image from "next/image";
import { useTheme } from "@/context/theme";

const InfoCard: FC<InfoType> = ({ icon, title, description }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className="h-full border border-gray-400 rounded-xl p-3 cursor-pointer bg-white dark:bg-darkTheme hover:bg-lightHover dark:hover:bg-darkHover hover:border-red-500 hover:shadow-black hover:-translate-y-1 duration-300 dark:border-white">
      <Image
        src={icon}
        alt={title}
        className={`mb-2 ${isDarkMode ? "filter-black-to-white" : ""}`}
      />
      <h3 className="mb-2 leading-5 font-semibold text-gray-700 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-500 text-xs">{description}</p>
    </div>
  );
};

export default InfoCard;
