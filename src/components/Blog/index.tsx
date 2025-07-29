import { fetchPages } from "@/lib/notion";
import BlogClient from "./client";

const Blog = async () => {
  // Strapi
  // const data = await fetchBlogs().catch((err) => console.error(err));
  // return data?.data ? <BlogClient blogs={data?.data} /> : null;
  
  // Notion
  const data = await fetchPages().catch((err) => console.error(err));
  return data?.length ? <BlogClient blogs={data} /> : null;
};

export default Blog;
