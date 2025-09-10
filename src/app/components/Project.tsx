/** @format */
"use client";
import React from "react";
import { projects } from "../content/projects";
import Image from "next/image";
import Link from "next/link";
import { FaEye, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/animation";

const Project = () => {
  return (
    <section className="py-20 container max-w-7xl mx-auto px-4">
      {/* Title */}
      <motion.h2
        {...fadeInUp}
        transition={{ delay: 0.2 }}
        className="max-w-3xl mx-auto font-bold text-3xl mb-12 text-center"
      >
        My <span className="text-primary">Projects</span>
      </motion.h2>

      {/* Grid */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {projects.map((project) => (
          <motion.article
            key={project.title}
            variants={fadeInUp}
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="bg-white dark:bg-dark/50 rounded-lg shadow-lg p-6"
          >
            {/* Image Container */}
            <motion.div
              variants={fadeInUp}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="relative aspect-video mb-4 rounded-lg overflow-hidden p-0 m-0" // ✅ removed padding/margin
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover !p-0 !m-0" // ✅ force no padding
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
              />
            </motion.div>

            {/* Title */}
            <motion.h3
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-xl font-semibold mb-2"
            >
              {project.title}
            </motion.h3>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {technology}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3 items-center">
              <Link
                href={project.githubLink}
                target="_blank"
                className="flex items-center gap-2 text-secondary dark:text-gray-300 hover:text-primary transition-colors"
              >
                <FaGithub className="w-5 h-5" />
                <span>Code</span>
              </Link>
              <Link
                href={project.demoLink}
                target="_blank"
                className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
              >
                <FaEye className="w-5 h-5" />
                <span>Live View</span>
              </Link>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default Project;
