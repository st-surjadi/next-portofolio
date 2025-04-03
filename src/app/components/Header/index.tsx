import { assets, icon } from "@/assets";
import Image from "next/image";
import React, { FC } from "react";
import { NAVIGATION_ID } from "../Navbar/utils";

const Header: FC = () => {
  return (
    <div className="w-11/12 max-w-xl text-center h-screen flex flex-col items-center justify-center gap-4 mx-auto left-0 right-0">
      <div className="absolute">
        <Image
          src={assets.profile}
          alt="profile"
          className="relative -top-40 md:-top-32 rounded-full w-32 h-32 object-cover"
        />
        <Image
          src={assets.monas}
          alt="monas"
          className="absolute -right-72 -top-3 w-32 hidden md:block -z-10"
        />
      </div>
      <h3 className="font-ovo text-xl md:text-2xl mb-3 mt-40">
        Hi! I&apos;m Steven Sean
      </h3>
      <h1 className="text-2xl md:text-3xl mb-2">
        Software Engineer from{" "}
        <span className="text-red-500 font-bold">Indonesia</span>
      </h1>
      <p className="text-sm md:text-md mx-auto mb-4 font-ovo">
        Passionate coder, dependable team player and certified bug fixer <br />
        with 5 years of experience in multiple tech companies.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <a
          href={`#${NAVIGATION_ID.CONTACT}`}
          type="button"
          className="px-10 py-3 border border-white rounded-full bg-red-500 text-white flex flex-items-center gap-2">
          Connect with Me{" "}
          <Image
            src={icon.handshake}
            alt="connect"
            className="filter-black-to-white"
          />
        </a>
        <a
          href={`#${NAVIGATION_ID.CONTACT}`}
          type="button"
          className="px-10 py-3 border border-red-500 rounded-full bg-white text-red-500 flex flex-items-center gap-2">
          My Resume{" "}
          <Image
            src={icon.download}
            alt="connect"
            className="filter-black-to-red"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
