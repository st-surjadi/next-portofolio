"use client";

import React, { useRef, useState } from "react";
import { NAVIGATION_ID } from "../Navbar/utils";
import { icon } from "@/assets";
import Image from "next/image";
import { motion } from "motion/react";

type state = "" | "loading" | "success";

const Contact = () => {
  const [result, setResult] = useState<state>("");
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("loading");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.success) {
        setResult("success");
        formRef.current?.reset();
      } else {
        console.error("Error:", data);
        setResult("");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      setResult("");
    }
  };

  const renderIcon = (state: state) => {
    switch (state) {
      case "loading":
        return <i className="fa fa-spinner fa-spin"></i>;
      case "success":
        return (
          <Image
            src={icon.doubleCheck}
            alt="success"
            className="filter-black-to-white"
          />
        );
      default:
        return (
          <Image
            src={icon.arrowRight}
            alt="arrow right"
            className="filter-black-to-white"
          />
        );
    }
  };

  return (
    <div
      id={NAVIGATION_ID.CONTACT}
      className="w-full max-w-7xl mx-auto p-10 scroll-mt-20">
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          delay: 0.2,
        }}
        className="text-center mb-2 text-lg font-ovo">
        Connect with me
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          delay: 0.2,
        }}
        className="text-center text-5xl font-ovo">
        Get in touch
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          delay: 0.2,
        }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        I&apos;d love to hear from you! If you have questions, comments, or
        feedbacks, please use the form below.
      </motion.p>

      <motion.form
        ref={formRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.4,
          delay: 0.6,
        }}
        className="max-w-2xl mx-auto"
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => onSubmit(e)}>
        <div className="grid grid-cols-auto gap-6 mb-8">
          <input
            className="flex-1 p-2 outline-none border border-gray-400 rounded-md bg-white"
            type="text"
            placeholder="Enter your name"
            name="name"
            required
          />
          <input
            className="flex-1 p-2 outline-none border border-gray-400 rounded-md bg-white"
            type="email"
            placeholder="Enter your email"
            name="email"
            required
          />
        </div>
        <textarea
          className="w-full p-2 outline-none border border-gray-400 rounded-md bg-white mb-6 dark:text-black"
          rows={6}
          placeholder="Enter your message"
          name="message"
          required></textarea>
        <button
          disabled={result !== ""}
          className="py-2 px-8 w-max flex items-center justify-between gap-2 bg-red-500 text-white text-lg font-semibold rounded-full mx-auto hover:bg-red-800 duration-300 disabled:opacity-80 disabled:cursor-not-allowed disabled:bg-red-400"
          type="submit">
          {result === "success" ? "Submitted" : "Submit"} {renderIcon(result)}
        </button>
      </motion.form>
    </div>
  );
};

export default Contact;
