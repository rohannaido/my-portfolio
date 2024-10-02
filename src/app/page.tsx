"use client";

import { useState, useRef, useEffect, MutableRefObject } from "react";
import Image from "next/image";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Moon,
  Sun,
  Twitter,
} from "lucide-react";
import BookingAppImage from "@/app/images/project/booking-app-screenshot.png";
import AngularComponentLibraryImage from "@/app/images/project/angular-component-library-screenshot.png";
import NotesAppImage from "@/app/images/project/notes-app.png";
import VideoAppImage from "@/app/images/project/video-app.png";
import WheresWaldoImage from "@/app/images/project/wheres-waldo.png";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [darkMode, setDarkMode] = useState(false);
  const sectionRefs: { [key: string]: MutableRefObject<HTMLElement | null> } = {
    home: useRef(null),
    projects: useRef(null),
    about: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "projects") {
      sectionRefs[sectionId]?.current?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    sectionRefs[sectionId].current?.scrollIntoView({ behavior: "smooth" });
  };

  const projects = [
    {
      title: "Booking App",
      description:
        "A booking app where users can book hotels in Indian cities. It is integrated with Firebase to fetch hotel data as per city name. Users can filter and sort hotels results by price and ratings. Hotel Images are displayed in a carousel form. All the components are built using pure CSS and in-house.",
      image: BookingAppImage,
      link: "https://rohannaido.github.io/booking-app/",
      sourceCodeLink: "https://github.com/rohannaido/booking-app",
    },
    {
      title: "Angular Component Library",
      description:
        "This website has angular components that I felt the need build, They can be cloned and used from my gitHub.",
      image: AngularComponentLibraryImage,
      link: "https://rohannaido.github.io/component-library/",
      sourceCodeLink: "https://github.com/rohannaido/component-library",
    },
    {
      title: "Video App",
      description:
        "This is a video library application where users can watch videos, add videos to watch Later, Like videos and access and clear their watch history.",
      image: VideoAppImage,
      link: "https://rohannaido.github.io/video-app/",
      sourceCodeLink: "https://github.com/rohannaido/video-app",
    },
    {
      title: "Video App",
      description:
        "This is a video library application where users can watch videos, add videos to watch Later, Like videos and access and clear their watch history.",
      image: VideoAppImage,
      link: "https://rohannaido.github.io/video-app/",
      sourceCodeLink: "https://github.com/rohannaido/video-app",
    },
    {
      title: "Notes App",
      description:
        "A notes app inspired by Google Notes design. Users can create, edit and delete their notes. Every user get their own notes storage.",
      image: NotesAppImage,
      link: "https://rohannaido.github.io/notes-app/",
      sourceCodeLink: "https://github.com/rohannaido/notes-app",
    },
    {
      title: "Wheres waldo",
      description:
        "A Game with ReactJS in the frontend and Firebase as backend. User has to locate characters in the search image and time will be logged in the backend.",
      image: WheresWaldoImage,
      link: "https://rohannaido.github.io/wheres-waldo/",
      sourceCodeLink: "https://github.com/rohannaido/wheres-waldo",
    },
  ];

  return (
    <div className="bg-gray-100 text-gray-900 dark:bg-gray-950 dark:text-gray-100 min-h-screen transition-colors duration-300">
      <nav className="fixed top-8 left-2/4 -translate-x-1/2 rounded-3xl bg-gray-100 dark:bg-gray-800 bg-opacity-50 backdrop-blur-md shadow z-10 md:w-[700px] md:max-w-[90vw] lg:max-w-[80vw] w-[90vw]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <ul className="flex md:space-x-8 space-x-4">
              {["home", "projects", "about", "contact"].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className={`capitalize ${
                      activeSection === section
                        ? "text-blue-500 font-bold"
                        : "text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                    }`}
                  >
                    {section}
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={toggleDarkMode}
              className="p-2 mx-4 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <section
        id="home"
        ref={sectionRefs.home}
        className="min-h-[65vh] flex flex-col justify-center items-center pt-16"
      >
        <h1 className="text-6xl font-bold mb-4 mt-32">Rohan Naidu</h1>
        <p className="text-3xl mb-6">Full Stack Developer</p>
        <p className="text-center max-w-2xl mb-8 px-4">
          Welcome to my portfolio! I'm a passionate full stack developer with
          expertise in React, Node.js, and cloud technologies. I love building
          scalable and efficient web applications that solve real-world
          problems.
        </p>
        <button
          onClick={() => scrollToSection("projects")}
          className="bg-gradient-to-r from-violet-700 to-violet-900 hover:bg-gradient-to-r hover:from-violet-800 hover:to-violet-900 text-white py-4 px-8 rounded-full flex items-center text-xl"
        >
          See My Work
          <ChevronDown className="ml-2" />
        </button>
      </section>

      <section
        id="projects"
        ref={sectionRefs.projects}
        className="flex flex-col justify-center items-center py-36"
      >
        <h2 className="text-3xl font-bold mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-[1400px]">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className="w-full"
              />
              <div className="p-4 flex flex-col justify-between">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="pb-2 w-full">
                  <div className="flex justify-end">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-purple-800 to-purple-900 text-white py-3 px-6 rounded-lg"
                    >
                      View Project
                    </a>
                    <a
                      href={project.sourceCodeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-4 bg-gradient-to-r from-purple-800 to-purple-900 text-white py-3 px-6 rounded-lg"
                    >
                      View Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="about"
        ref={sectionRefs.about}
        className="min-h-screen flex flex-col justify-center items-center bg-gray-200 dark:bg-gray-800 py-16"
      >
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="mb-4">
            Hi, I'm Rohan Naidu, a full stack developer with over 3 years of
            experience in building web applications. I specialize in JavaScript
            technologies, particularly React for frontend and Node.js for
            backend development.
          </p>
          <p className="mb-4">
            My journey in web development started when I built my first website
            for a local business while still in college. Since then, I've worked
            on a variety of projects, from small business websites to
            large-scale enterprise applications.
          </p>
          <h3 className="text-2xl font-semibold mt-6 mb-4">Skills</h3>
          <ul className="list-disc list-inside mb-4 grid grid-cols-2 gap-2">
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Angular</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Next.js</li>
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>RESTful API Design</li>
            <li>AWS (EC2, S3, Lambda)</li>
            <li>Docker</li>
            <li>Git</li>
          </ul>
        </div>
      </section>

      <section
        id="contact"
        ref={sectionRefs.contact}
        className="min-h-screen flex flex-col justify-center items-center py-16"
      >
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
          <p className="mb-6">
            I'm always open to new opportunities and collaborations. If you have
            a project you'd like to discuss or just want to say hi, feel free to
            reach out!
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-3 py-2 border rounded text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-700"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-3 py-2 border rounded text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-700"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">
                Message
              </label>
              <textarea
                id="message"
                required
                className="w-full px-3 py-2 border rounded text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-700"
                rows={4}
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-violet-700 to-violet-900 hover:bg-gradient-to-r hover:from-violet-800 hover:to-violet-900 text-gray-100 font-bold py-2 px-4 rounded dark:bg-gradient-to-r dark:from-violet-500 dark:to-violet-600 dark:hover:bg-gradient-to-r dark:hover:from-violet-400 dark:hover:to-violet-500"
              disabled
            >
              Send Message (under construction)
            </button>
          </form>
          <div className="mt-8 flex justify-center space-x-4">
            <a
              href="https://github.com/rohannaido"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github Profile"
            >
              <Github className="w-8 h-8 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/rohan-naidu-aa810711a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-8 h-8 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" />
            </a>
            <a
              href="https://x.com/rohannaido"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter Profile"
            >
              <Twitter className="w-8 h-8 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" />
            </a>
            <a
              href="mailto:rohannaiduu@gmail.com"
              aria-label="Email Rohan Naidu"
            >
              <Mail className="w-8 h-8 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
