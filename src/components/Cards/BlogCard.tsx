"use client";

import React, { FC, useMemo } from "react";
import Image from "next/image";
import { BlogType } from "@/lib/strapi/types";
import useDate from "@/hooks/useDate";

type BlogCardType = {
  blog: BlogType;
};

const BlogCard: FC<BlogCardType> = ({ blog }) => {
  const { getDateStr } = useDate();
  const publishedAt = useMemo(
    () =>
      getDateStr({
        date: new Date(blog?.publishedAt),
        format: "MMMM D, YYYY",
        enablePresentStr: false,
      }),
    [blog?.publishedAt, getDateStr],
  );

  return (
    <a
      href={`/blog/${blog?.slug}`}
      className="flex flex-col justify-between border bg-white dark:bg-darkTheme border-gray-400 hover:border-red-500 dark:hover:bg-darkHover rounded-lg p-3 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-300 h-full">
      <div className="image-wrapper w-full h-52 relative">
        <Image
          src={blog?.coverImage?.formats?.small?.url}
          alt="cover-image"
          className="object-cover rounded-lg"
          fill
        />
      </div>
      <div>
        <h3 className="text-lg text-gray-700 my-2 dark:text-white">
          {blog?.title}
        </h3>
        <span className="text-xs text-gray-400 leading-5 mb-4 line-clamp-2">
          {blog?.excerpt}
        </span>
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-600">Steven Sean</span>
          <span className="text-xs text-gray-600">{publishedAt}</span>
        </div>
      </div>
    </a>
  );
};

export default BlogCard;
