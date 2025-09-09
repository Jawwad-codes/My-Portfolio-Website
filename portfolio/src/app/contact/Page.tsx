/** @format */

"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { fadeInUp, slideInLeft, slideInRight } from "@/utils/animation";
import { motion } from "framer-motion";
import { Toaster, toast } from "sonner";
interface FormData {
  name: string;
  email: string;
  message?: string;
}
type FormStatus = "idle" | "loading" | "success" | "error";

const Page = () => {
  const [formData, setFormdata] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormdata((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setStatus("success");
      setFormdata({ name: "", email: "", message: "" });

      // ✅ Show toast only once
      toast.success("Message sent successfully!");
    } catch {
      setStatus("error");

      // ✅ Show toast only once
      toast.error("Failed to send message. Try again.");
    }
  };

  return (
    <section className="container max-w-7xl mx-auto px-4 py-16">
      {/* Title */}
      <motion.h1
        {...fadeInUp}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        Contact <span className="text-primary">Me</span>
      </motion.h1>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Section */}
        <motion.div {...slideInLeft} className="space-y-8">
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-secondary max-w-md leading-relaxed">
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision.
            </p>
          </motion.div>

          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-start gap-4">
              <FaEnvelope className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <Link
                  href="mailto:jawwadnadeem91@gmail.com"
                  className="text-secondary hover:text-primary break-words"
                >
                  jawwadnadeem91@gmail.com
                </Link>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <FaPhone className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <Link
                  href="tel:+923468345809"
                  className="text-secondary hover:text-primary"
                >
                  +92 346 8345809
                </Link>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <FaMapLocationDot className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-secondary">Pakistan, Karachi</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Section - Form */}
        <motion.div
          {...slideInRight}
          className="bg-white dark:bg-dark/50 p-6 md:p-8 shadow-lg rounded-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={handleChange}
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 
                           bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={handleChange}
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 
                           bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={handleChange}
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 
                           bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full btn btn-primary">
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Page;
