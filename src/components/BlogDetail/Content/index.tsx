"use client";

import MediaBlock from "@/components/Media";
import RichTextBlock from "@/components/RichText/Block";
import MarkdownBlock from "@/components/RichText/Markdown";
import { ComponentType } from "@/lib/strapi/types";
import React, { FC } from "react";

type Props = {
  content: ComponentType[];
};

const renderBlock = (block: ComponentType, i: number) => {
  switch (block.__component) {
    case "blocks.media":
      return <MediaBlock key={i} block={block} />;
    case "blocks.markdown":
      return <MarkdownBlock key={i} block={block} />;
    case "blocks.rich-text":
      return <RichTextBlock key={i} block={block} />;
    default:
      return null;
  }
};

const BlogDetailContent: FC<Props> = ({ content }) => {
  return (
    <div className="space-y-6">
      {content?.map((block, index) => renderBlock(block, index))}
    </div>
  );
};

export default BlogDetailContent;
