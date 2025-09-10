/** @format */
"use client";
import React from "react";
import {
  cardHover,
  cardHoverSmall,
  fadeInDown,
  fadeInUp,
  slideInLeft,
  slideInRight,
} from "@/utils/animation";
import { motion } from "framer-motion";

import { FaCode, FaGraduationCap, FaLaptopCode } from "react-icons/fa";

export const page = () => {
  return (
    <div className="container max-w-7xl mx-auto py-20">
      <motion.h1
        {...fadeInUp}
        transition={{ delay: 0.2 }}
        className="text-4xl text-center font-bold mb-8"
      >
        {" "}
        About <span className="text-primary">Me</span>
      </motion.h1>
      <section className="mb-16">
        <motion.p
          {...fadeInUp}
          transition={{ delay: 0.4 }}
          className="text-lg text-secondary max-w-3xl mx-auto text-center"
        >
          I’m a Software Engineer passionate about building modern web
          applications. I work with React and TypeScript to develop clean,
          user-friendly solutions. A quick learner, I’m currently focusing on
          improving my backend skills and growing as a developer.
        </motion.p>
      </section>
      <section className="mb-16">
        <motion.h2
          {...fadeInDown}
          transition={{ delay: 0.5 }}
          className="section-title"
        >
          Skills
        </motion.h2>
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <motion.div className="bg-white dark:bg-gray-800  p-6 shadow-lg rounded-md">
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-secondary space-y-2">
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>Shadcn Ui / Daisy UI</li>
              <li>Tailwind CSS</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </motion.div>
          <div className="bg-white dark:bg-gray-800  p-6 shadow-lg rounded-md">
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="text-secondary space-y-2">
              <li>Node.js</li>
              <li>Java</li>
              <li>Express</li>
              <li>PostgreSQL</li>
              <li>SQL Server</li>
              <li>My SQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800  p-6 shadow-lg rounded-md">
            <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tools & Others</h3>
            <ul className="text-secondary space-y-2">
              <li>Git / GitHub</li>
              <li>Docker</li>

              <li>Trello</li>
              <li>Playwright</li>
            </ul>
          </div>
        </motion.div>
      </section>
      <section className="mb-16">
        <motion.h1
          {...fadeInUp}
          transition={{ delay: 0.7 }}
          className="section-title"
        >
          Experience
        </motion.h1>
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Developer Hub Internship */}

          <motion.div
            {...slideInLeft}
            className="bg-white dark:bg-dark/50 p-6 rounded-md shadow-md"
          >
            <h3 className="text-xl font-semibold">
              Frontend Developer Intern — Developer Hub
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Remote | June 2025 (1 Month)
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                Built the complete frontend of an e-commerce platform using
                React.
              </li>
              <li>Implemented responsive and user-friendly interfaces.</li>
            </ul>
          </motion.div>
        </div>
      </section>
      <section className="mb-16">
        <motion.h1
          {...fadeInUp}
          transition={{ delay: 0.8 }}
          className="section-title"
        >
          Education
        </motion.h1>
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Intermediate */}
          <motion.div
            {...slideInRight}
            className="bg-white dark:bg-dark/50 p-6 rounded-md shadow-md"
          >
            <h3 className="text-xl font-semibold section-title">
              <span className="text-primary">Intermediate</span> <br /> Govt.
              Degree College Malir Cantt
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Completed with 75.09%
            </p>
          </motion.div>

          {/* BS Software Engineering */}
          <motion.div
            {...slideInLeft}
            className="bg-white dark:bg-dark/50 p-6 rounded-md shadow-md"
          >
            <h3 className="text-xl section-title">
              <span className="text-primary"> BS Software Engineering</span>
              <br /> University of Karachi (UBIT Department)
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              2023 – 2026 | Current CGPA: 3.225
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default page;
