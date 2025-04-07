import React, { FC } from "react";
import ReactMarkdown from "react-markdown";
import { ComponentType } from "@/lib/strapi/types";

type Props = {
  block: ComponentType;
};

const MarkdownBlock: FC<Props> = ({ block }) => {
  return (
    <div className="prose prose-neutral dark:prose-invert my-4">
      <ReactMarkdown>{(block?.body as string) || ""}</ReactMarkdown>
    </div>
  );
};

export default MarkdownBlock;
