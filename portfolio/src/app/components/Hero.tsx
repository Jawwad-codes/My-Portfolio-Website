/** @format */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
const Hero = () => {
  const visitingUrls = {
    linkedin: "https://www.linkedin.com/in/jawwad-nadeem-959285266/",
    github: "https://github.com/Jawwad-codes",
  };
  return (
    <section className="py-28 container max-w-7xl mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center flex-col mb-3">
          <Image
            src="/image.jpg"
            alt="portfolio image"
            width={100}
            height={100}
            className="rounded-full mb-4 w-32 h-32 object-cover  ring-2 dark: ring-primary "
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I'm
          <span className="text-blue-600"> Jawwad Nadeem</span>
        </h1>
        <p className="text-xl md:text-2xl  text-gray-600 dark:text-gray-300 mb-8">
          Software Engineer | Building Frontend Experiences | Exploring
          Automation
        </p>
        <div className="flex justify-center space-x-4 mb-8">
          <Link
            href={visitingUrls.github}
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors p-2"
          >
            <FaGithub />
          </Link>
          <Link
            href={visitingUrls.linkedin}
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors p-2"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="/"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors p-2"
          >
            <FaTwitter />
          </Link>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            href="/projects"
            className="bg-primary bg-gradient-to-br text-white inline-block px-6 py-3 rounded-md hover:bg-primary/65 transition-colors"
          >
            View Projects
          </Link>
          <Link
            href="/myResume.pdf"
            className="bg-primary justify-center  bg-gradient-to-br text-white inline-flex items-center gap-2 px-6 py-3 rounded-md hover:bg-primary/65 transition-colors"
          >
            My Resume <FiDownload />
          </Link>
          <Link
            href="/contact"
            className="bg-gray-500 bg-gradient-to-br text-white inline-block px-6 py-3 rounded-md hover:bg-gray-400 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
