import React, { FC } from "react";
import Image from "next/image";
import { ComponentType } from "@/lib/strapi/types";

export type Props = {
  block: ComponentType;
};

const MediaBlock: FC<Props> = ({ block }) => {
  return (
    <div className="my-4">
      <Image
        src={block?.media?.formats?.medium?.url || ""}
        alt={"media"}
        height={block?.media?.formats?.medium?.height || 0}
        width={block?.media?.formats?.medium?.height || 0}
        className="w-full h-auto object-contain"
      />
      {block?.caption ? (
        <p className="text-sm text-gray-500">{block?.caption}</p>
      ) : null}
    </div>
  );
};

export default MediaBlock;
