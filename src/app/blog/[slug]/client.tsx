"use client";

import NotionContentClient from "@/components/BlogDetail/Content/notion";
import BlogDetailHeader from "@/components/BlogDetail/Header";
import { AuthorType } from "@/lib/notion/types";
import { Block } from "@notion-render/client/dist/types";
import { PageObjectResponse, UserObjectResponse } from "@notionhq/client";
import React, { FC, useMemo } from "react";

type Props = {
  data: PageObjectResponse;
  blocks: Block[];
}

const BlogDetailClient: FC<Props> = ({ data, blocks }) => {

  const blog = useMemo(() => {
    const properties = data?.properties;
    return {
      title: properties?.Name?.type === 'title' ? properties?.Name?.title[0]?.plain_text : '',
      excerpt: properties?.Description?.type === 'rich_text' ? properties?.Description?.rich_text[0]?.plain_text : '',
      publishedAt: data?.created_time,
    }
  }, [data]);

  const author: AuthorType = useMemo(() => {
    const createdBy = data?.properties?.author?.type === 'created_by' ? data?.properties?.author?.created_by as UserObjectResponse : null;
    return {
      name: createdBy?.name || '',
      avatar: createdBy?.avatar_url || '',
      bio: 'Software Engineer',
    }
  }, [data]);

  return (
    <div className="max-w-4xl min-h-[100vh] flex flex-col justify-center items-center mx-auto my-32">
      <BlogDetailHeader
        title={blog?.title}
        exerpt={blog?.excerpt}
        publishedAt={blog?.publishedAt}
        author={author}
      />
      <NotionContentClient blocks={blocks} />
    </div>
  );
};

export default BlogDetailClient;
