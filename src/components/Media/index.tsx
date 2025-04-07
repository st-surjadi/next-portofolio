/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import { ComponentType } from "@/lib/strapi/types";

export type Props = {
  block: ComponentType;
};

const MediaBlock: FC<Props> = ({ block }) => {
  return (
    <div className="my-4">
      <img
        src={block?.media?.formats?.medium?.url || ""}
        alt={block?.caption || "media"}
        className="w-full h-auto object-contain"
      />
      {block?.caption ? (
        <p className="text-sm text-gray-500">{block?.caption}</p>
      ) : null}
    </div>
  );
};

export default MediaBlock;
