"use client";

import { assets, icon } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useEffect, useRef } from "react";

const Navigation = [
  { text: "Home", href: "#top" },
  { text: "About Me", href: "#about" },
  { text: "Services", href: "#services" },
  { text: "My Work", href: "#work" },
  { text: "Contact Me", href: "#contact" },
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
      <div className="fixed top-0 w-11/12 -z-10 translate-y-[-50%]">
        <Image src={assets.headerBg} alt="header-bg" className="w-full" />
      </div>
      <nav
        className={`w-full xl:w-[1280px] fixed px-5 lg:px-8 py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}>
        <Link href="#top" className="w-52 flex md:justify-center">
          <Image src={assets.logo} alt="logo" width={120} />
        </Link>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50"} `}>
          {Navigation.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="font-ovo">
                {item.text}
              </a>
            </li>
          ))}
        </ul>

        <div className="lg:w-52 flex justify-end lg:justify-between items-center gap-4">
          <button>
            <Image src={icon.moon} alt="icon-moon" className="w-5" />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-3 border border-gray-400 rounded-full ml-4">
            Connect <Image src={icon.plugZap} alt="plug-connect" width={20} />
          </a>
          <button onClick={toggleSideMenu} className="block md:hidden ml-3">
            <Image src={icon.alignRight} alt="icon-menu" className="w-5" />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-0 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500">
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
