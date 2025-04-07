import React from "react";
import BlogClient from "./client";
import { fetchBlogs } from "@/lib/strapi/blog";

const Blog = async () => {
  const data = await fetchBlogs().catch((err) => console.error(err));

  return data?.data ? <BlogClient blogs={data?.data} /> : null;
};

export default Blog;
