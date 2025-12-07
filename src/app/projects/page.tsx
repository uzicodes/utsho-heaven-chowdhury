"use client";

import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { useRef, useEffect } from "react";
import * as React from "react";
import Navbar from "../Navbar";

interface Project {
  title: string;
  description: string;
  skills: string; 
  link: string;
  color: string;
  githubLink: string;
  liveLink: string;
}

interface CardProps {
  i: number;
  title: string;
  description: string;
  skills: string; 
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
    title: "LAMB FALCONS - Official Club Site",
    description: "This platform serves as the modern, dynamic & central online hub for our club, providing public visitors with essential club details while offering a secure login & dedicated member portal for private access & deeper community engagement.",
    skills: "https://skillicons.dev/icons?i=nextjs,nodejs,react,ts,firebase,tailwind,vercel", 
    link: "/projects/project-1.jpg",
    color: "#0be890",
    githubLink: "https://github.com/uzicodes/lamb-falcons",
    liveLink: "https://lamb-falcons.vercel.app/",
  },
  {
    title: "Culinary Canvas",
    description: "Intuitive web platform that lets you effortlessly discover, customize, and order from diverse local cuisines. This site provides a seamless food delivery experience complete with real-time order tracking and personalized account features.",
    skills: "https://skillicons.dev/icons?i=nextjs,nodejs,react,ts,tailwind,mongodb,vercel",
    link: "/projects/project-2.jpg",
    color: "#0be890",
    githubLink: "https://github.com/uzicodes/culinary-canvas",
    liveLink: "https://the-culinary-canvas.vercel.app/",
  },
  {
    title: "Northern Paribahan",
    description: "Comprehensive platform for seamless ticket booking with real-time seat availability & instant ticket confirmation. Provides users with personalized travel history, route management & secure payments. Robust Admin Control for managing routes, schedules, fares & users.",
    skills: "https://skillicons.dev/icons?i=nextjs,nodejs,react,ts,tailwind,redis,supabase,vercel",
    link: "/projects/project-5.png",
    color: "#0be890",
    githubLink: "https://github.com/uzicodes/northern-paribahan",
    liveLink: "https://northern-paribahan.vercel.app/",
  },
  {
    title: "Aura Force",
    description: "Robust fitness platform streamlining gym operations & enhancing member experience. Features real-time class scheduling, automated renewals & trainer booking. Includes a secure portal for tracking workouts, BMI & personalized diet plans.",
    skills: "https://skillicons.dev/icons?i=nextjs,react,ts,tailwind,mongodb,vercel",
    link: "/projects/project-6.png",
    color: "#0be890",
    githubLink: "https://github.com/uzicodes/AuraForce",
    liveLink: "https://auraforce.vercel.app/",
  },
  {
    title: "SCREEN BOX",
    description: "Comprehensive streaming platform designed to offer users free, on-demand access to a vast library of online movies and web-series. It incorporates a personalized experience through an optional login profile feature, allowing users to track viewing history and manage watchlists.",
    skills: "https://skillicons.dev/icons?i=nextjs,react,ts,tailwind,supabase,postgres,vercel",
    link: "/projects/project-3.jpg",
    color: "#0be890",
    githubLink: "https://github.com/uzicodes/screen-box",
    liveLink: "https://screen-box.vercel.app/",
  },
  {
    title: "GO Dhaka",
    description: "Your essential navigator for effortless travel, providing all Dhaka metro, bus routes, and fares in one continuously updated platform. Find the fastest routes instantly, making city travel easy, efficient, and stress-free. No logins required. Google Maps for real-time traffic updates.",
    skills: "https://skillicons.dev/icons?i=nextjs,react,ts,materialui,vercel",
    link: "/projects/project-4.jpg",
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
    // Updated: Changed bg-slate-950 to bg-transparent so global stars show through
    <div className="bg-transparent relative min-h-screen">
      
      {/* Main Content Area */}
      <div className="relative z-10">
        <Navbar />
        <ReactLenis root>
          <main className="bg-transparent relative z-10 min-h-screen pt-12" ref={container}>
            <section className="text-white w-full bg-transparent">
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
                    skills={project.skills} 
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
      </div>
    </div>
  );
}

function Card({
  i,
  title,
  description,
  skills, 
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
          {/* Image section */}
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

          {/* Content section */}
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
              
              {/* Description Text */}
              <p className="text-xs md:text-base text-[#000000] leading-relaxed max-w-md lora-font mb-4">{description}</p>

              {/* Skills Icon Strip */}
              <div className="mt-2">
                <img 
                    src={skills} 
                    alt="Tech Stack" 
                    className="h-6 md:h-8 w-auto" 
                    loading="lazy"
                />
              </div>

            </div>
            
            {/* Links Section */}
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
                  <img src="/git-2.png" alt="GitHub" width={35} height={35} className="inline-block align-middle" />
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