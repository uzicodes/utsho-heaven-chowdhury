"use client";

import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { useRef, useEffect } from "react";
import * as React from "react";
import Image from "next/image";

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
    title: "LAMB FALCONS ",
    description: "This platform serves as the Modern, Dynamic & Central Online hub for the Club, providing Public visitors with essential club details while offering a Secure login & dedicated Member portal for private access & community engagement. Used Animated libraries, interactive UI elements for a smooth user experience. Production ready with CI/CD pipelines for seamless updates & maintenance.",
    skills: ["nextjs", "nodejs", "react", "ts", "clerk", "gsap", "tailwind", "vercel"],
    link: "/projects/lamb-falcons.webp",
    color: "#0be890",
    githubLink: "https://github.com/uzicodes/lamb-falcons",
    liveLink: "https://lambfalcons.vercel.app/",
  },
  {
    title: "ঢাকা-বাসা",
    description: "Comprehensive Rental platform streamlining property searches & To-Let posting in Dhaka.\n• Advanced filtering by specific Dhaka areas, sub-locations, and property types.\n• Prisma ORM integrated with Neon PostgreSQL for efficient and scalable data fetching.\n• Clerk for secure authentication, Google SSO, and automated database syncing via Webhooks.\n• Robust posting forms with strict validations using React Hook Form & Zod.\n• Personalized user dashboard for managing active listings & saved properties.\n• Responsive, modern UI with native Bengali language support for an accessible user experience.",
    skills: ["nextjs", "nodejs", "react", "ts", "tailwind", "neon", "redis", "socket", "cloudflare", "prisma", "clerk"],
    link: "/projects/dhaka-basha.webp",
    color: "#10b981",
    githubLink: "https://github.com/uzicodes/Dhaka-Basha",
    liveLink: "https://dhaka-basha.vercel.app/",
  },
  {
    title: "Culinary Canvas",
    description: "Production ready modern web platform with seamless experience while admins efficiently manage operations.\n• Easy Ordering flow, Catogorized food items \n• Real-time items fetched from MongoDB \n• Profile management, can see previous orders \n• Admin Dashboard with CRUD operations in items & sections (add/delete/update)\n• Admin can check orders, daily/monthly revenue, resturant metrics & user feedbacks \n• Real-time user feedback system & SSLcommerz for payment integration, invoice generation",
    skills: ["nextjs", "nodejs", "react", "ts", "tailwind", "mongodb", "android", "redis", "ssl"],
    link: "/projects/culinary-canvas.webp",
    color: "#ff6b35",
    githubLink: "https://github.com/uzicodes/culinary-canvas",
    liveLink: "https://culinarycanvaas.vercel.app/",
  },
  {
    title: "Northern Paribahan",
    description: "Seamless ticket booking with real-time seat availability & instant ticket confirmation\n• Users with personalized travel history, route & account management\n• Bus & timetable seeding realtime from Socket.io\n• Supabase for authentication & user management \n• Robust Admin Control for managing routes, schedules, fares & users.\n• SSLCommerz checkout for secure transactions, Mail & PDF ticket delivery.",
    skills: ["nextjs", "nodejs", "react", "ts", "socket", "prisma", "supabase", "ssl", "tailwind", "render"],
    link: "/projects/northern-paribahan.webp",
    color: "#3b82f6",
    githubLink: "https://github.com/uzicodes/northern-paribahan",
    liveLink: "https://northern-paribahan.onrender.com",
  },
  {
    title: "Aura Force",
    description: "Robust Fitness platform streamlining Gym operations & enhancing member experience.\n• Features real-time Class scheduling, Class & Trainer booking.\n• Prisma fetching from Supabase & user feedback realtime from DB \n• Clerk for authentication & user management.\n• User BMI & personalized diet plan.\n• Admin dashboard for managing memberships, trainers & classes efficiently.\n• Animated UI & Responsiveness for engaging user experience \n• SSLCommerz for safe transactions.",
    skills: ["nextjs", "react", "ts", "tailwind", "supabase", "prisma", "redis", "android", "clerk"],
    link: "/projects/aura-force.webp",
    color: "#ef4444",
    githubLink: "https://github.com/uzicodes/AuraForce",
    liveLink: "https://auraforce.vercel.app/",
  },
  {
    title: "ALORA",
    description: "Luxurious full-stack e-commerce platform offering an exquisite collection of premium fragrances.\n• Dynamic real-time stock updates, product categorizations, and automated image sanitization pipeline via Cloudinary.\n• Admin dashboard with static caching for instant inventory management and product editing.\n• Prisma ORM integrated with Neon PostgreSQL for efficient, scalable database management.\n• Clerk for Auth, seamless user profiles & automated database syncing via Webhooks.\n• API protection with Upstash Redis rate-limiting to secure critical.\n• Secured smooth checkout process integrated with SSLCommerz",
    skills: ["nextjs", "nodejs", "react", "ts", "tailwind", "clerk", "neon", "redis", "ssl"],
    link: "/projects/alora.webp",
    color: "#9333ea",
    githubLink: "https://github.com/uzicodes/Alora",
    liveLink: "https://aloraa.vercel.app/",
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1" style={{ color: '#F5BE27', fontFamily: 'var(--font-space-grotesk), sans-serif' }}>
                  PROJECTS
                </h2>
                <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-lg" style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}>
                  showcasing my Technical Projects & Creative Solutions
                </p>
              </div>
              {projects.map((project: Project, i: number) => {
                const targetScale: number = 1 - (projects.length - i) * 0.05;
                return (
                  <Card
                    key={project.title}
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
      className={`h-screen flex items-center justify-center sticky top-0 project-container pointer-events-none ${i === 0 ? 'mt-0' : ''}`}
    >
      <motion.div
        style={{
          scale,
          top: i === 0 ? "0" : `calc(-5vh + ${i * 25}px)`,
          transform: "scale(var(--project-scale, 1))",
          marginTop: i === 0 ? "0" : "var(--project-margin, 0)",
        }}
        className={`relative ${i === 0 ? 'top-0' : '-top-[25%]'} h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top project-card pointer-events-auto`}
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
            <div className="h-[200px] md:h-[300px] lg:h-[340px] relative overflow-hidden">
              <motion.div
                className="w-full h-full relative"
                initial={{ scale: 0.85 }}
                whileHover={{ scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={url}
                  alt={title}
                  className="object-contain"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>

              <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-black/50 backdrop-blur-md text-white px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[10px] md:text-xs font-medium">
                Project {i + 1}
              </div>
            </div>

            {/* Custom Tech Stack Icons */}
            <div className="flex items-center justify-center flex-wrap gap-1.5 px-3 py-1 bg-[#574A49]">
              {(() => {
                const customIcons: Record<string, { src: string; alt: string; bg: string; cls: string }> = {
                  socket: { src: "/icons/socket.svg", alt: "Socket", bg: "bg-white", cls: "w-full h-full object-contain" },
                  ssl: { src: "/icons/ssl.jpg", alt: "SSLCommerz", bg: "bg-white", cls: "w-full h-full object-contain" },
                  render: { src: "/icons/render.svg", alt: "Render", bg: "bg-white", cls: "w-full h-full object-contain" },
                  clerk: { src: "/icons/tools/clerk.svg", alt: "Clerk", bg: "bg-[#1C1C1E]", cls: "w-4 h-4 md:w-6 md:h-6" },
                  neon: { src: "/icons/database/neon.svg", alt: "Neon DB", bg: "bg-transparent", cls: "w-full h-full object-contain scale-[1.3]" },
                  android: { src: "/icons/tools/android.svg", alt: "Android", bg: "bg-transparent", cls: "w-full h-full object-contain scale-[1.3]" },
                };
                const elements: React.ReactNode[] = [];
                let batch: string[] = [];
                const flushBatch = (batchKey: string) => {
                  if (batch.length > 0) {
                    const joinedSkills = batch.join(',');
                    elements.push(
                      <Image key={`skillicons-${batchKey}-${joinedSkills}`} src={`https://skillicons.dev/icons?i=${joinedSkills}`} alt="Tech Stack" width={200} height={32} className="h-6 md:h-8 w-auto" unoptimized />
                    );
                    batch = [];
                  }
                };
                skills.forEach((skill) => {
                  const s = skill.toLowerCase();
                  if (s === 'gsap') {
                    flushBatch(`before-${skill}`);
                    elements.push(
                      <div key={skill} className="h-8 w-auto md:h-10.5 md:w-auto flex items-center justify-center mx-1">
                        <Image src="/icons/gsap.png" alt="GSAP" width={40} height={40} className="h-full w-auto object-contain scale-[1.2] md:scale-[1.3]" />
                      </div>
                    );
                    return;
                  }
                  const icon = customIcons[s];
                  if (icon) {
                    flushBatch(`before-${skill}`);
                    elements.push(
                      <div key={skill} className={`h-6 w-6 md:h-8 md:w-8 ${icon.bg} rounded flex items-center justify-center ${s !== 'clerk' ? 'p-1' : ''}`}>
                        <Image src={icon.src} alt={icon.alt} width={32} height={32} className={icon.cls} />
                      </div>
                    );
                  } else {
                    batch.push(skill);
                  }
                });
                flushBatch('final');
                return elements;
              })()}
            </div>

            {/* GitHub & Live Link */}
            <div className="flex items-center justify-center gap-3 py-2 md:py-3 bg-[#574A49] relative z-20">
              <motion.a
                title="GitHub Link"
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-none bg-green-500/15 hover:bg-green-500/50 border border-black transition-all cursor-pointer pointer-events-auto"
                whileHover={{ y: -2, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
                style={{ pointerEvents: "auto" }}
              >
                <Image src="/github.svg" alt="GitHub" width={18} height={18} className="inline-block align-middle" />
                <span className="text-xs md:text-sm font-medium text-[#7fe525] ubuntu-font">Code</span>
              </motion.a>

              <motion.a
                title="Live Link"
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-none bg-blue-500/25 hover:bg-blue-500/55 border border-black transition-all cursor-pointer pointer-events-auto"
                whileHover={{ y: -2, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
                style={{ pointerEvents: "auto" }}
              >
                <Image src="https://img.icons8.com/glyph-neue/64/1A1A1A/globe--v1.png" alt="Live" width={20} height={20} className="inline-block align-middle" unoptimized />
                <span className="text-xs md:text-sm font-medium text-[#7fe525] ubuntu-font">Live</span>
              </motion.a>
            </div>
          </div>

          <div className="w-full md:w-[45%] p-4 pt-2 md:p-6 md:pt-3 lg:p-8 lg:pt-4 flex flex-col justify-between relative">
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-0.5" style={{ fontFamily: 'var(--font-ubuntu), sans-serif' }}>
                {title}
              </h3>
              {(() => {
                const parts = description.split('\n');
                const firstLine = parts[0];
                const bulletPoints = parts.slice(1).join('\n');

                return (
                  <>
                    <p className="text-xs md:text-sm lg:text-base text-[#121111] font-semibold leading-snug mb-2 md:mb-3" style={{ fontFamily: 'var(--font-bricolage-grotesque), sans-serif' }}>
                      {firstLine}
                    </p>
                    {bulletPoints && (
                      <p className="text-xs md:text-sm lg:text-base text-[#121111] font-semibold leading-snug whitespace-pre-line" style={{ fontFamily: 'var(--font-bricolage-grotesque), sans-serif' }}>
                        {bulletPoints}
                      </p>
                    )}
                  </>
                );
              })()}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}