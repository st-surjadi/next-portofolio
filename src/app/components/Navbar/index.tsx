"use client";

import { assets, icon } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useEffect, useRef } from "react";
import { NAVIGATION_ID } from "./utils";

const Navigation = [
  { text: "Home", href: `#${NAVIGATION_ID.TOP}` },
  { text: "About Me", href: `#${NAVIGATION_ID.ABOUT}` },
  { text: "Experiences", href: `#${NAVIGATION_ID.EXPERIENCE}` },
  { text: "Contact Me", href: `#${NAVIGATION_ID.CONTACT}` },
];

export const Navbar: FC = () => {
  const sideMenuRef = useRef<HTMLUListElement | null>(null);
  const [isScroll, setIsScroll] = React.useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  const toggleSideMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.classList.toggle("transform");
      sideMenuRef.current.classList.toggle("translate-x-64");
    }
  };

  return (
    <div className="flex justify-center w-full">
      <div className="fixed top-0 w-11/12 -z-10 translate-y-[-30%]">
        <Image src={assets.headerBg} alt="header-bg" className="w-full" />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 py-4 z-40 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}>
        <div className="w-full max-w-7xl flex items-center justify-between mx-auto">
          <Link
            href={`#${NAVIGATION_ID.TOP}`}
            className="md:w-48 flex md:justify-center">
            <Image src={assets.logo} alt="logo" width={120} />
          </Link>

          <ul
            className={`hidden md:flex items-center gap-4 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50"} `}>
            {Navigation.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="font-ovo">
                  {item.text}
                </a>
              </li>
            ))}
          </ul>

          <div className="lg:w-48 flex justify-end lg:justify-between items-center gap-4">
            <button>
              <Image src={icon.moon} alt="icon-moon" className="w-5" />
            </button>
            <a
              href={`#${NAVIGATION_ID.CONTACT}`}
              className="hidden lg:flex items-center gap-3 px-8 py-3 border border-gray-400 rounded-full ml-4">
              Connect <Image src={icon.plugZap} alt="plug-connect" width={20} />
            </a>
            <button onClick={toggleSideMenu} className="block md:hidden ml-3">
              <Image src={icon.alignRight} alt="icon-menu" className="w-5" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-0 top-0 bottom-0 w-64 z-40 h-screen bg-rose-50 transition duration-300">
          <a type="button" className="cursor-pointer" onClick={toggleSideMenu}>
            <Image
              src={icon.close}
              alt="icon-close"
              className="absolute top-6 right-6"
            />
          </a>
          {Navigation.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="font-ovo" onClick={toggleSideMenu}>
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
