import React from "react";
import BlogDetailClient from "./client";
import { fetchBlogBySlug } from "@/lib/strapi/blog";
import NotFound from "@/app/not-found";

type tParams = Promise<{ slug: string }>;

const BlogDetail = async (props: { params: tParams }) => {
  const { slug } = await props.params;
  const data = await fetchBlogBySlug({ slug }).catch((err) =>
    console.error(err),
  );

  return data?.data?.length === 1 ? (
    <BlogDetailClient blog={data.data[0]} />
  ) : (
    <NotFound />
  );
};

export default BlogDetail;
