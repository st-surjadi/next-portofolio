import React, { FC } from "react";
import { ComponentType } from "@/lib/strapi/types";
import { BlocksContent, BlocksRenderer } from "@strapi/blocks-react-renderer";

type Props = {
  block: ComponentType;
};

const RichTextBlock: FC<Props> = ({ block }) => {
  return (
    <div className="prose prose-neutral dark:prose-invert my-4">
      <BlocksRenderer content={block?.body as BlocksContent} />
    </div>
  );
};

export default RichTextBlock;
