"use client";

import { motion } from "motion/react";
import React, { FC } from "react";
import { NAVIGATION_ID } from "../Navbar/utils";
import { BlogType } from "@/lib/strapi/types";
import BlogCard from "../Cards/BlogCard";

type Props = {
  blogs: BlogType[];
};

const BlogClient: FC<Props> = ({ blogs }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.4,
          delay: 0.2,
        }}
        id={NAVIGATION_ID.BLOG}
        className="w-full max-w-7xl mx-auto p-10 scroll-mt-20">
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.4,
          }}
          className="text-center mb-2 text-lg font-ovo">
          What I Write
        </motion.h4>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.4,
          }}
          className="text-center text-5xl font-ovo">
          My Blogs
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.6,
          }}
          className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
          I write about things I learn, thoughts I want to remember, and
          experiences worth sharing — from code to life outside the screen.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {blogs.map((blog) => {
            return <BlogCard blog={blog} key={blog.id} />;
          })}
        </div>
      </motion.div>
    </>
  );
};

export default BlogClient;
