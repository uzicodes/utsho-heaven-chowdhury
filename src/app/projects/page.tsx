"use client";

import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { useRef, useEffect } from "react";
import * as React from "react";
import Navbar from "../Navbar";

interface Project {
  title: string;
  description: string;
  link: string;
  color: string;
  githubLink: string;
  liveLink: string;
}

interface CardProps {
  i: number;
  title: string;
  description: string;
  url: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  githubLink: string;
  liveLink: string;
}

const projects: Project[] = [
  {
    title: "LAMB FALCONS - Official Club Site ",
      description:
        "This platform serves as the modern, dynamic, & central online hub for our club, providing public visitors with essential club details while offering a secure login & dedicated member portal for private access & deeper community engagement.\n Next.js, React, TypeScript, Tailwind, Firebase, Framer Motion, Vercel.",
    link: "/projects/project-1.png",
    color: "#0be890",
    githubLink: "https://github.com/uzicodes/lamb-falcons",
    liveLink: "https://lamb-falcons.vercel.app/",
  },
  {
    title: "SCREEN BOX ",
    description:
      "Comprehensive streaming platform designed to offer users free, on-demand access to a vast library of online movies and web-series. It incorporates a personalized experience through an optional login profile feature, allowing users to track viewing history and manage watchlists. \n Next.js, React, TypeScript, Tailwind, Supabase (PostgreSQL), ESLint, Vercel",
    link: "/projects/project-2.png",
    color: "#0be890",
    githubLink: "https://github.com/uzicodes/screen-box",
    liveLink: "https://screen-box.vercel.app/",
  },
  {
    title: "Culinary Canvas",
    description:
      "Intuitive web platform that lets you effortlessly discover, customize, and order from diverse local cuisines. This site provides a seamless food delivery experience complete with real-time order tracking and personalized account features. \n Next.js, React, Typescript, Tailwind, MongoDB, Vercel",
    link: "/projects/project-3.png",
    color: "#0be890",
    githubLink: "https://github.com/uzicodes/culinary-canvas",
    liveLink: "https://the-culinary-canvas.vercel.app/",
  },
  {
    title: "GO Dhaka",
    description:
      "Your essential navigator for effortless travel, providing all Dhaka metro, bus routes, and fares in one continuously updated platform. Find the fastest routes instantly, making city travel easy, efficient, and stress-free. No logins required. Google Maps for real-time traffic updates \n Next.js, React, TypeScript, Material-UI, Vercel",
    link: "/projects/project-4.png",
    color: "#0be890",
    githubLink: "https://github.com/uzicodes/go-dhaka",
    liveLink: "https://go-dhaka.vercel.app/",
  }
];
export default function Projects() {
  const container = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    // Add specific styles for 1366x768 resolution
    const style = document.createElement("style");
    style.textContent = `
      @media screen and (width: 1366px) and (height: 768px),
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .project-card {
          scale: 0.85;
          margin-top: -5vh;
        }
        .project-container {
          height: 90vh;
        }
      }
    `;
    document.head.appendChild(style);

    // Resolution check function
    const checkResolution = (): void => {
      const isTargetResolution: boolean =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty("--project-scale", "0.85");
        document.documentElement.style.setProperty("--project-margin", "-5vh");
      } else {
        document.documentElement.style.setProperty("--project-scale", "1");
        document.documentElement.style.setProperty("--project-margin", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  return (
    <>
  <Navbar />
      <ReactLenis root>
        <main className="bg-black relative z-10 min-h-screen" ref={container}>
          <section className="text-white w-full bg-slate-950">
            {projects.map((project: Project, i: number) => {
              const targetScale: number = 1 - (projects.length - i) * 0.05;
              return (
                <Card
                  key={`p_${i}`}
                  i={i}
                  url={project.link}
                  title={project.title}
                  color={project.color}
                  description={project.description}
                  progress={scrollYProgress}
                  range={[i * 0.25, 1]}
                  targetScale={targetScale}
                  githubLink={project.githubLink}
                  liveLink={project.liveLink}
                />
              );
            })}
          </section>
        </main>
      </ReactLenis>
    </>
  );
}

function Card({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
  githubLink,
  liveLink,
}: CardProps) {
  const container = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className={`h-screen flex items-center justify-center sticky top-0 project-container ${i === 0 ? 'mt-0' : ''}`}
    >
      <motion.div
        style={{
          scale,
          top: i === 0 ? "0" : `calc(-5vh + ${i * 25}px)`,
          transform: `scale(var(--project-scale, 1))`,
          marginTop: i === 0 ? "0" : "var(--project-margin, 0)",
        }}
        className={`relative ${i === 0 ? 'top-0' : '-top-[25%]'} h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top project-card`}
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
      >
        {/* Modern split card design */}
  <div className="w-full flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-xl" style={{ backgroundColor: '#574A49' }}>
          {/* Image section - full width on mobile, 55% on desktop */}
          <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden">
            <motion.img
              src={url}
              alt={title}
              className="w-full h-full object-contain"
              initial={{ scale: 0.85 }}
              whileHover={{ scale: 0.9 }}
              transition={{ duration: 0.4 }}
            />
            {/* Colored overlay on hover */}
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: color, mixBlendMode: "overlay" }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />
            {/* Project number */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
              Project {i + 1}
            </div>
          </div>
          {/* Content section - full width on mobile, 45% on desktop */}
          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <div className="h-[1px] w-12 md:w-20 bg-gray-600" />
              </div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4 reckless-font">
                {title}
              </h2>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed line-clamp-3 md:line-clamp-none max-w-md lora-font">
                  {i === 0
                    ? <>{description.split('\n')[0]}<br /><span style={{ color: '#000' }}>{description.split('\n')[1]}</span></>
                    : i === 1
                      ? <>{description.split('\n')[0]}<br /><span style={{ color: '#000' }}>{description.split('\n')[1]}</span></>
                      : i === 2
                        ? <>{description.split('\n')[0]}<br /><span style={{ color: '#000' }}>{description.split('\n')[1]}</span></>
                        : i === 3
                          ? <>{description.split('\n')[0]}<br /><span style={{ color: '#000' }}>{description.split('\n')[1]}</span></>
                          : description}
                </p>
            </div>
            <div className="mt-4 md:mt-auto pt-4">
              <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />
              <div className="flex items-center gap-4">
                {/* GitHub Link */}
                <motion.a
                  title="GitHub Link"
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <img src="/socials/github.png" alt="GitHub" width={22} height={22} className="inline-block align-middle" />
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color }}
                  >
                    Code
                  </span>
                </motion.a>
               
                {/* Live Link */}
                <motion.a
                  title="Live Link"
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <img src="/socials/earth.png" alt="Live" width={22} height={22} className="inline-block align-middle" />
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color }}
                  >
                    Live
                  </span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}