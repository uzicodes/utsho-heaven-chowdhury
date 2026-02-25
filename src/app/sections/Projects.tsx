"use client";

import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { useRef, useEffect } from "react";
import * as React from "react";

interface Project {
  title: string;
  description: string;
  skills: string[];
  link: string;
  color: string;
  githubLink: string;
  liveLink: string;
}

interface CardProps {
  i: number;
  title: string;
  description: string;
  skills: string[];
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
    description: "This platform serves as the Modern, Dynamic & Central Online hub for the Club, providing Public visitors with essential club details while offering a Secure login & dedicated Member portal for private access & community engagement. Used Animated libraries, interactive UI elements for a smooth user experience. Production ready with CI/CD pipelines for seamless updates & maintenance.",
    skills: ["nextjs", "nodejs", "react", "ts", "firebase", "tailwind", "vercel"],
    link: "/projects/lamb-falcons.jpg",
    color: "#0be890",
    githubLink: "https://github.com/uzicodes/lamb-falcons",
    liveLink: "https://lamb-falcons.vercel.app/",
  },
  {
    title: "Culinary Canvas",
    description: "Production ready modern web platform with seamless experience while admins efficiently manage operations.\n• Easy Ordering flow, Catogorized food items \n• Real-time items fetched from MongoDB \n• Profile management, can see previous orders \n• Admin Dashboard with CRUD operations in items & sections (add/delete/update)\n• Admin can check orders, daily/monthly revenue, resturant metrics & user feedbacks \n• Real-time user feedback system & SSLcommerz for payment integration, invoice generation",
    skills: ["nextjs", "nodejs", "react", "ts", "tailwind", "mongodb","redis", "vercel", "ssl"],
    link: "/projects/culinary-canvas.png",
    color: "#ff6b35",
    githubLink: "https://github.com/uzicodes/culinary-canvas",
    liveLink: "https://the-culinary-canvas.vercel.app/",
  },
  {
    title: "Northern Paribahan",
    description: "Seamless ticket booking with real-time seat availability & instant ticket confirmation\n• Users with personalized travel history, route & account management\n• Bus & timetable seeding realtime from Socket.io\n• Supabase for authentication & user management \n• Robust Admin Control for managing routes, schedules, fares & users.\n• SSLCommerz checkout for secure transactions, Mail & PDF ticket delivery.",
    skills: ["nextjs", "nodejs", "react", "ts", "socket", "prisma", "supabase", "ssl", "tailwind", "render"],
    link: "/projects/northern-paribahan.png",
    color: "#3b82f6",
    githubLink: "https://github.com/uzicodes/northern-paribahan",
    liveLink: "https://northern-paribahan.onrender.com",
  },
  {
    title: "Aura Force",
    description: "Robust Fitness platform streamlining Gym operations & enhancing member experience.\n• Features real-time Class scheduling, Class & Trainer booking.\n• Prisma fetching from Supabase & user feedback realtime from DB \n• Clerk for authentication & user management.\n• User BMI & personalized diet plan.\n• Admin dashboard for managing memberships, trainers & classes efficiently.\n• Animated UI & Responsiveness for engaging user experience \n• SSLCommerz for safe transactions.",
    skills: ["nextjs", "react", "ts", "tailwind", "supabase", "prisma","redis", "vercel", "clerk"],
    link: "/projects/aura-force.png",
    color: "#ef4444",
    githubLink: "https://github.com/uzicodes/AuraForce",
    liveLink: "https://auraforce.vercel.app/",
  },
  {
    title: "SCREEN BOX",
    description: "Comprehensive streaming platform designed to offer users free, on-demand access to a vast library of online movies and web-series.\n• It incorporates a personalized experience through an optional login profile feature, allowing users to track viewing history and manage watchlists.\n• It features adaptive bitrate streaming (HLS) to ensure smooth playback on slow networks \n• Robust content management system for admins, and a personalized watchlist for users.",
    skills: ["nextjs", "react", "ts", "tailwind", "supabase", "postgres", "vercel"],
    link: "/projects/screen-box.png",
    color: "#a855f7",
    githubLink: "https://github.com/uzicodes/screen-box",
    liveLink: "https://screen-box.vercel.app/",
  },
  {
    title: "GO Dhaka",
    description: "Your essential navigator for effortless travel designed to digitize the commuting experience in Dhaka City.\n• Provides all Dhaka metro, bus routes & fares in one continuously updated platform.\n• Find the fastest routes instantly, making city travel easy, efficient & stress-free.\n• No logins required.\n• Google Maps for real-time traffic updates.\n• Included all local buses in the city with route maps & fare details.",
    skills: ["nextjs", "react", "ts", "materialui", "vercel"],
    link: "/projects/go-dhaka.png",
    color: "#10b981",
    githubLink: "https://github.com/uzicodes/go-dhaka",
    liveLink: "https://go-dhaka.vercel.app/",
  }
];

export default function Projects() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
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
    <div className="bg-transparent relative min-h-screen">
      <div className="relative z-10">
        <ReactLenis root>
          <div className="bg-transparent relative z-10 min-h-screen pt-12" ref={container}>
            <div className="text-white w-full bg-transparent">
              <div className="text-center mb-0 pt-32">
                <h2 className="text-4xl font-bold mb-1 colus-font" style={{ color: '#F5BE27' }}>
                  Projects
                </h2>
                <p className="text-gray-300 max-w-2xl mx-auto text-lg lora-font">
                  Showcasing my Technical Projects & Creative Solutions
                </p>
              </div>
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
            </div>
          </div>
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
        <motion.div
          className="w-full flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-xl"
          style={{ backgroundColor: '#574A49' }}
          whileHover={{
            boxShadow: `0 0 30px -5px ${color}40`,
            transition: { duration: 0.4 }
          }}
        >
          <div className="w-full md:w-[55%] flex flex-col">
            <div className="h-[200px] md:h-[340px] lg:h-[390px] relative overflow-hidden">
              <motion.img
                src={url}
                alt={title}
                className="w-full h-full object-contain"
                initial={{ scale: 0.85 }}
                whileHover={{ scale: 0.9 }}
                transition={{ duration: 0.4 }}
              />

              <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
                Project {i + 1}
              </div>
            </div>

            {/* GitHub and Live Links */}
            <div className="flex items-center justify-center gap-3 py-2 md:py-3 bg-[#574A49]">
              <motion.a
                title="GitHub Link"
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-none bg-green-500/15 hover:bg-green-500/25 transition-all cursor-pointer"
                whileHover={{ y: -2, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <img src="/github.svg" alt="GitHub" width={18} height={18} className="inline-block align-middle" />
                <span className="text-xs md:text-sm font-medium text-[#0be890]">Code</span>
              </motion.a>

              <motion.a
                title="Live Link"
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-none bg-blue-500/20 hover:bg-blue-500/30 transition-all cursor-pointer"
                whileHover={{ y: -2, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <img src="/earth.png" alt="Live" width={18} height={18} className="inline-block align-middle" />
                <span className="text-xs md:text-sm font-medium text-[#0be890]">Live</span>
              </motion.a>
            </div>
          </div>

          <div className="w-full md:w-[45%] p-4 pt-2 md:p-6 md:pt-3 lg:p-8 lg:pt-4 flex flex-col justify-between relative">
            <div className="relative z-10">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4 reckless-font">
                {title}
              </h2>

              <p className="text-xs md:text-base text-[#000000] leading-snug lora-font mb-3 whitespace-pre-line min-h-[120px] md:min-h-[200px] lg:min-h-[240px]">{description}</p>

              <div className="mt-1 flex items-center gap-2">
                {(() => {
                  const customIcons: Record<string, { src: string; alt: string; bg: string; cls: string }> = {
                    socket: { src: "/icons/socket.svg", alt: "Socket", bg: "bg-white", cls: "w-full h-full object-contain" },
                    ssl: { src: "/icons/ssl.jpg", alt: "SSLCommerz", bg: "bg-white", cls: "w-full h-full object-contain" },
                    render: { src: "/icons/render.svg", alt: "Render", bg: "bg-white", cls: "w-full h-full object-contain" },
                    clerk: { src: "/icons/tools/clerk.svg", alt: "Clerk", bg: "bg-[#1C1C1E]", cls: "w-4 h-4 md:w-6 md:h-6" },
                  };
                  const elements: React.ReactNode[] = [];
                  let batch: string[] = [];
                  const flushBatch = (key: string) => {
                    if (batch.length > 0) {
                      elements.push(
                        <img key={key} src={`https://skillicons.dev/icons?i=${batch.join(',')}`} alt="Tech Stack" className="h-6 md:h-8 w-auto" loading="lazy" />
                      );
                      batch = [];
                    }
                  };
                  skills.forEach((skill, idx) => {
                    const s = skill.toLowerCase();
                    const icon = customIcons[s];
                    if (icon) {
                      flushBatch(`batch-${idx}`);
                      elements.push(
                        <div key={idx} className={`h-6 w-6 md:h-8 md:w-8 ${icon.bg} rounded flex items-center justify-center ${s !== 'clerk' ? 'p-1' : ''}`}>
                          <img src={icon.src} alt={icon.alt} className={icon.cls} />
                        </div>
                      );
                    } else {
                      batch.push(skill);
                    }
                  });
                  flushBatch('batch-end');
                  return elements;
                })()}
              </div>

            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}