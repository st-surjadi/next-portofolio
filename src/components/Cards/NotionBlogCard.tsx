/* eslint-disable @next/next/no-img-element */
"use client";

import useDate from "@/hooks/useDate";
import { PageObjectResponse } from "@notionhq/client";
import { FC, useMemo } from "react";


type NotionBlogCardType = {
  page: PageObjectResponse;
};

const NotionBlogCard: FC<NotionBlogCardType> = ({ page }) => {
  const { getDateStr } = useDate();
  
  const blog = useMemo(() => {
    return {
      slug: page?.properties?.slug?.type === 'rich_text' ? page?.properties?.slug?.rich_text[0]?.plain_text : '',
      coverImage: page?.cover?.type === 'file' ? page?.cover?.file?.url : '/images/default-blog-image.jpg',
      title: page?.properties?.Name?.type === 'title' ? page?.properties?.Name?.title[0]?.plain_text : '',
      excerpt: page?.properties?.Description?.type === 'rich_text' ? page?.properties?.Description?.rich_text[0]?.plain_text : '',
      createdAt: page?.created_time,
    };
  }, [page]);

  const createdAt = useMemo(() => {
    return getDateStr({
      date: new Date(blog?.createdAt),
      format: "MMMM D, YYYY",
      enablePresentStr: false,
    });
  }, [blog?.createdAt, getDateStr]);
  
  return (
    <a
      href={`/blog/${blog?.slug}`}
      className="flex flex-col justify-between border bg-white dark:bg-darkTheme border-gray-400 hover:border-red-500 dark:hover:bg-darkHover rounded-lg p-3 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-300 h-full">
      <div className="image-wrapper">
        <img
          src={blog?.coverImage}
          alt="cover-image"
          className="object-cover rounded-lg w-full h-52"
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
          <span className="text-xs text-gray-600">{createdAt}</span>
        </div>
      </div>
    </a>
  );
};

export default NotionBlogCard;