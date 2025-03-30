"use client";

import React, { useState } from "react";
import { NAVIGATION_ID } from "../Navbar/utils";
import { experiences } from "./data";
import ExpCard from "../Cards/ExpCard";
import { Experience as ExpType } from "./types";
import dynamic from "next/dynamic";

const RMDrawer = dynamic(() => import("../Drawer"), { ssr: false });
const DrawerContent = dynamic(
  () => import("../Drawer/content/ExpDrawerContent"),
  { ssr: false },
);

const Experience = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedExp, setSelectedExp] = useState<ExpType | null>(null);

  const onClickExpCard = (exp: ExpType) => {
    setSelectedExp(exp);
    setIsDrawerOpen(true);
  };

  return (
    <>
      <div
        id={NAVIGATION_ID.EXPERIENCE}
        className="w-full max-w-7xl mx-auto p-10 scroll-mt-20">
        <h4 className="text-center mb-2 text-lg font-ovo">What I Offer</h4>
        <h2 className="text-center text-5xl font-ovo">My Experiences</h2>

        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, itaque
          voluptate! Ut eligendi consequuntur consectetur, dolore placeat
          maiores iste praesentium.
        </p>

        <div className="grid grid-cols-auto gap-6 my-10">
          {experiences.map((exp, index) => (
            <div key={index}>
              <ExpCard experience={exp} onClick={onClickExpCard} />
            </div>
          ))}
        </div>
      </div>
      <RMDrawer
        open={isDrawerOpen}
        direction="bottom"
        size={"80vh"}
        onClose={() => setIsDrawerOpen(false)}>
        <DrawerContent exp={selectedExp} />
      </RMDrawer>
    </>
  );
};

export default Experience;
