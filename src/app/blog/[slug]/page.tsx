import React from "react";
import BlogDetailClient from "./client";
import NotFound from "@/app/not-found";
import { fetchBySlug, fetchPageBlocks } from "@/lib/notion";

type tParams = Promise<{ slug: string }>;

const BlogDetail = async (props: { params: tParams }) => {
  const { slug } = await props.params;

  const data = await fetchBySlug(slug).catch((err) => console.error(err));

  if (!data) {
    return <NotFound />;
  }

  const blocks = await fetchPageBlocks(data?.id);

  return data ? (
    <BlogDetailClient data={data} blocks={blocks} />
  ) : (
    <NotFound />
  );
};

export default BlogDetail;
