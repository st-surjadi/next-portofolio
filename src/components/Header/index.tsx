"use client";

import { assets, icon } from "@/assets";
import Image from "next/image";
import React, { FC } from "react";
import { NAVIGATION_ID } from "../Navbar/utils";
import { motion } from "motion/react";

const Header: FC = () => {
  return (
    <div className="w-11/12 max-w-xl text-center h-screen flex flex-col items-center justify-center gap-4 mx-auto left-0 right-0">
      <div className="absolute">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}>
          <Image
            src={assets.profile}
            alt="profile"
            className="relative -top-40 md:-top-32 rounded-full w-32 h-32 object-cover hover:scale-125 duration-300"
          />
        </motion.div>
        <motion.div
          className="absolute -right-72 -top-3 w-32 hidden md:block -z-10"
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 1,
            type: "spring",
            stiffness: 100,
          }}>
          <Image src={assets.monas} alt="monas" />
        </motion.div>
      </div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.4,
        }}
        className="font-ovo text-xl md:text-2xl mb-3 mt-40">
        Hi! I&apos;m Steven Sean
      </motion.h3>
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.8,
        }}
        className="text-2xl md:text-3xl mb-2">
        Software Engineer from{" "}
        <span className="text-red-500 font-bold">Indonesia</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.8,
        }}
        className="text-sm md:text-md mx-auto mb-4 font-ovo">
        Passionate coder, team player and certified bug fixer <br />
        with 5 years of experience in multiple tech companies.
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 1,
          }}
          href={`#${NAVIGATION_ID.CONTACT}`}
          type="button"
          className="px-10 py-3 border border-white rounded-full bg-red-500 text-white flex flex-items-center gap-2 hover:shadow-black hover:-translate-y-1 duration-300">
          Connect with Me{" "}
          <Image
            src={icon.handshake}
            alt="connect"
            className="filter-black-to-white"
          />
        </motion.a>
        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 1,
          }}
          href={`#${NAVIGATION_ID.CONTACT}`}
          type="button"
          className="px-10 py-3 border border-red-500 rounded-full bg-white text-red-500 flex flex-items-center gap-2 hover:shadow-black hover:-translate-y-1 duration-300">
          My Resume{" "}
          <Image
            src={icon.download}
            alt="connect"
            className="filter-black-to-red"
          />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
