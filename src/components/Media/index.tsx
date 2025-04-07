import React, { FC } from "react";
import Image from "next/image";
import { ComponentType } from "@/lib/strapi/types";

export type Props = {
  block: ComponentType;
};

const MediaBlock: FC<Props> = ({ block }) => {
  return (
    <div className="my-4">
      <div className="w-full aspect-video relative mb-2">
        <Image
          src={block?.media?.formats?.medium?.url || ""}
          alt={"media"}
          fill
          className="object-contain"
        />
      </div>
      {block?.caption ? (
        <p className="text-sm text-gray-500">{block?.caption}</p>
      ) : null}
    </div>
  );
};

export default MediaBlock;
