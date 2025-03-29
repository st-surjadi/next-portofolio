import React, { FC } from "react";
import { InfoType } from "../About/types";
import Image from "next/image";

const InfoCard: FC<InfoType> = ({ icon, title, description }) => {
  return (
    <div className="border border-gray-400 rounded-xl p-3 cursor-pointer hover:bg-lightHover hover:border-red-500 hover:shadow-black hover:-translate-y-1 duration-300">
      <Image src={icon} alt={title} className="mb-2" />
      <h3 className="mb-2 leading-5 font-semibold text-gray-700">{title}</h3>
      <p className="text-gray-500 text-xs">{description}</p>
    </div>
  );
};

export default InfoCard;
