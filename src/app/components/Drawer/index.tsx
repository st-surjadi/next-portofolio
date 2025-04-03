"use client";

import { icon } from "@/assets";
import Image from "next/image";
import React, { FC } from "react";
import Drawer from "react-modern-drawer";
import styles from "./styles.module.scss";
import "react-modern-drawer/dist/index.css";

type DrawerProps = {
  open: boolean;
  direction: "left" | "right" | "top" | "bottom";
  children: React.ReactNode;
  size: number | string;
  onClose: () => void;
};

const RMDrawer: FC<DrawerProps> = ({
  open,
  direction,
  children,
  size,
  onClose,
}) => {
  return (
    <Drawer
      className={styles.custom}
      open={open}
      direction={direction}
      size={size}
      lockBackgroundScroll={true}
      onClose={onClose}>
      <div className="absolute left-1/2 transform -translate-x-1/2 w-full md:max-w-3xl p-6 md:p-4 h-full">
        <a
          type="button"
          className="flex items-center text-xs text-gray-500 cursor-pointer"
          onClick={onClose}>
          <Image
            src={icon.arrowLeft}
            alt="close"
            onClick={onClose}
            className="w-3 filter-black-to-gray-500"
          />
          Back
        </a>
        {children}
      </div>
    </Drawer>
  );
};

export default RMDrawer;
