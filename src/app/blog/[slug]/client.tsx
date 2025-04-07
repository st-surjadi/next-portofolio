"use client";

import BlogDetailContent from "@/components/BlogDetail/Content";
import BlogDetailHeader from "@/components/BlogDetail/Header";
import { BlogType } from "@/lib/strapi/types";
import React, { FC } from "react";

type Props = {
  blog: BlogType;
};

const BlogDetailClient: FC<Props> = ({ blog }) => {
  return (
    <div className="max-w-4xl min-h-[100vh] flex flex-col justify-center items-center mx-auto my-32">
      <BlogDetailHeader
        title={blog?.title}
        exerpt={blog?.excerpt}
        publishedAt={blog?.publishedAt}
        author={blog?.author}
      />
      <BlogDetailContent content={blog?.content} />
    </div>
  );
};

export default BlogDetailClient;
