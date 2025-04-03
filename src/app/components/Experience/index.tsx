"use client";

import React, { useState } from "react";
import { NAVIGATION_ID } from "../Navbar/utils";
import { experiences } from "./data";
import ExpCard from "../Cards/ExpCard";
import { Experience as ExpType } from "./types";
import dynamic from "next/dynamic";
import { motion } from "motion/react";

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
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.4,
          delay: 0.2,
        }}
        id={NAVIGATION_ID.EXPERIENCE}
        className="w-full max-w-7xl mx-auto p-10 scroll-mt-20">
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.4,
          }}
          className="text-center mb-2 text-lg font-ovo">
          What I Offer
        </motion.h4>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.4,
          }}
          className="text-center text-5xl font-ovo">
          My Experiences
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.6,
          }}
          className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, itaque
          voluptate! Ut eligendi consequuntur consectetur, dolore placeat
          maiores iste praesentium.
        </motion.p>

        <div className="grid grid-cols-auto gap-6 my-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.8 + index * 0.2,
              }}>
              <ExpCard experience={exp} onClick={onClickExpCard} />
            </motion.div>
          ))}
        </div>
      </motion.div>
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
