"use client";

import React, { FC } from "react";
import { Experience } from "@components/Experience/types";
import useDate from "@/app/hooks/useDate";

type Props = {
  exp: Experience | null;
};

const startEndFormat = "MMM YYYY"; // Jan 2021 - Feb 2022

const ExpDrawerContent: FC<Props> = ({ exp }) => {
  const { getDateStr } = useDate();

  return (
    <div className="w-full h-full flex flex-col py-4">
      <h3 className="text-2xl text-gray-700 font-ovo font-bold">
        {exp?.companyName}
      </h3>
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-xl text-gray-700">{exp?.position}</h4>
        <p className="text-gray-500">
          {getDateStr(exp?.startDate, startEndFormat)} -{" "}
          {getDateStr(exp?.endDate, startEndFormat)}
        </p>
      </div>
      <div className="flex-1 overflow-y-auto pr-4">
        <div className="mb-4">{exp?.description}</div>
        <div className="mb-4">
          <h4 className="text-gray-700">Company Profile</h4>
          {exp?.companyProfile}
        </div>
        <div className="mb-2">
          <h4 className="text-gray-700">Experiences</h4>
          {exp?.highlights}
        </div>
      </div>
    </div>
  );
};

export default ExpDrawerContent;
