import React from "react";
import BlogDetailClient from "./client";
import { fetchBlogBySlug } from "@/lib/strapi/blog";
import NotFound from "@/app/not-found";

const BlogDetail = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
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
