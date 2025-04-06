import React from "react";
import BlogClient from "./client";
import { fetchBlogs } from "@/lib/strapi/blog";

const Blog = async () => {
  const data = await fetchBlogs();

  return data?.data ? <BlogClient blogs={data?.data} /> : null;
};

export default Blog;
