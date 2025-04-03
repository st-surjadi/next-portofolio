"use client";

import { useTheme } from "@/app/context/theme";
import { assets, icon } from "@/assets";
import Image from "next/image";
import React from "react";

const socials = [
  { name: "Github", href: "https://github.com/st-surjadi", icon: icon.github },
  {
    name: "Instagram",
    href: "https://www.instagram.com/stevenseans/",
    icon: icon.instagram,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/steven-surjadi-824234166/",
    icon: icon.linkedin,
  },
];

const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="mt-20 max-w-7xl mx-auto">
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logoDark : assets.logo}
          alt="logo"
          className="w-36 mx-auto mb-2"
        />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={icon.mail}
            alt="mail"
            className={isDarkMode ? "filter-black-to-white" : ""}
          />
          st.surjadi@gmail.com
        </div>
      </div>
      <div className="border-t-2 border-t-gray-600 grid grid-cols-1 sm:grid-cols-2 justify-between m-4 py-2 text-gray-500">
        <div className="text-center sm:text-left">
          <p>&copy; 2025 Steven Sean | All rights reserved</p>
        </div>
        <ul className="flex justify-center sm:justify-end gap-6">
          {socials.map((social, i) => (
            <li key={i}>
              <a
                target="_blank"
                rel="noreferrer"
                href={social.href}
                className="flex items-center gap-1 hover:text-red-500">
                {social.name}
                <Image
                  src={social.icon}
                  alt={social.name}
                  className="w-4 filter-black-to-gray-500"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
