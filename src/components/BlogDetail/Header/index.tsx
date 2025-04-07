"use client";

import useDate from "@/hooks/useDate";
import { AuthorType } from "@/lib/strapi/types";
import Image from "next/image";
import React, { FC } from "react";

type Props = {
  title: string;
  exerpt: string;
  publishedAt: string;
  author: AuthorType;
};

const BlogDetailHeader: FC<Props> = ({
  title,
  exerpt,
  publishedAt,
  author,
}) => {
  const { getDateStr } = useDate();

  return (
    <div className="border-b border-b-gray-400 py-4">
      <h2 className="text-3xl md:text-4xl font-bold font-ovo mb-4">{title}</h2>
      <p className="text-lg md:text-xl text-gray-500 mb-6">{exerpt}</p>

      <div className="flex gap-4 items-center">
        <div className="w-14 h-14 relative">
          <Image
            src={author?.avatar?.formats.small.url}
            alt="avatar"
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <p className="text-md md:text-xl font-semibold">{author?.name}</p>
          <p className="text-sm md:text-lg text-gray-500">
            {author?.bio} <span className="mx-2">·</span>{" "}
            {getDateStr({
              date: new Date(publishedAt),
              format: "MMMM D, YYYY",
              enablePresentStr: false,
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailHeader;
