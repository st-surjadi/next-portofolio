import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export type Experience = {
  company: string;
  position: string;
  startDate: Date;
  endDate: Date;
  description: ReactNode;

  companyName: string;
  companyLogo: StaticImageData;
  companyProfile: ReactNode;

  highlights: ReactNode;
};
