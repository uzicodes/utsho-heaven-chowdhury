"use client";
import React from "react";
import Image from "next/image";

import { Card, CardContent } from "@/app/components/card";
import dynamic from "next/dynamic";
import { m, Variants } from "framer-motion";

const IconCloudDemo = dynamic(() => import("@/app/components/globe"), { ssr: false });

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillCardProps {
  title: string;
  skills: Skill[];
  color: string;
}

interface SkillCategory {
  title: string;
  color: string;
  skills: Skill[];
}

const containerVariants: Variants = {
  hidden: { opacity: 1 },              //cascade cards animation
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {    //Flip-effect
  hidden: {
    opacity: 0,
    rotateX: -90,
    y: -50,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      mass: 1
    }
  },
};


//Single Card Component
const SkillCard: React.FC<SkillCardProps> = ({ title, skills, color }) => (
  <m.div variants={cardVariants} className="h-full" style={{ transformStyle: 'preserve-3d' }}>
    <Card className="group h-full relative overflow-hidden bg-gray-900/80 border-gray-700 hover:border-green-500/60 hover:scale-[1.02] transition-all duration-300 hover:shadow-[0_0_2.5rem_-0.5rem_rgba(34,197,94,0.4)]">
      <CardContent className="p-3 md:p-6 relative z-10">
        <div className="flex items-center justify-center gap-4 mb-3 md:mb-6 w-full">
          <h3 className="text-lg md:text-2xl font-extrabold tracking-tight text-center" style={{ color: '#A8325A', fontFamily: 'var(--font-space-grotesk), sans-serif' }}>
            {title}
          </h3>
        </div>
        <div className="flex flex-wrap gap-2 justify-center w-full [&_img]:h-6 [&_img]:w-auto md:[&_img]:h-12">
          {skills.map((skill) => (
            <div key={skill.name} className="relative group/skill flex items-center justify-center">
              {/* Tooltip */}
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-gray-900 border border-gray-700 text-white text-[9px] md:text-[10px] px-1.5 py-0.5 rounded-sm opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-50">
                {skill.name}
              </div>
              <div className="transition-transform duration-300 group-hover/skill:-translate-y-1 cursor-none">
                {skill.icon}
              </div>
            </div>
          ))}            {/* Skill Icons Grid*/}
        </div>
      </CardContent>
    </Card>
  </m.div>
);

const skillCategories: SkillCategory[] = [
  {
    title: "FRONTEND",
    color: "text-blue-400",
    skills: [
      { name: "React", icon: <Image src="/icons/frontend/react.svg" alt="React" width={48} height={48} /> },
      { name: "HTML5", icon: <Image src="/icons/frontend/html.svg" alt="HTML5" width={48} height={48} /> },
      { name: "CSS3", icon: <Image src="/icons/frontend/css.svg" alt="CSS3" width={48} height={48} /> },
      { name: "JavaScript", icon: <Image src="/icons/frontend/javascript.svg" alt="JavaScript" width={48} height={48} /> },
      { name: "TypeScript", icon: <Image src="/icons/frontend/typescript.svg" alt="TypeScript" width={48} height={48} /> },
      { name: "Tailwind CSS", icon: <Image src="/icons/frontend/tailwind.svg" alt="Tailwind CSS" width={48} height={48} /> },
    ],
  },
  {
    title: "BACKEND",
    color: "text-purple-400",
    skills: [
      { name: "Node.js", icon: <Image src="/icons/backend/nodejs.svg" alt="Node.js" width={48} height={48} /> },
      { name: "Express.js", icon: <Image src="/icons/backend/express.svg" alt="Express.js" width={48} height={48} /> },
      { name: "Python", icon: <Image src="/icons/backend/python.svg" alt="Python" width={48} height={48} /> },
      { name: "FASTapi", icon: <Image src="/icons/backend/fastapi.svg" alt="FASTapi" width={48} height={48} /> },
    ],
  },
  {
    title: "DATABASE",
    color: "text-green-400",
    skills: [
      { name: "Supabase", icon: <Image src="/icons/database/supabase.svg" alt="Supabase" width={48} height={48} /> },
      { name: "Firebase", icon: <Image src="/icons/database/firebase.svg" alt="Firebase" width={48} height={48} /> },
      { name: "MongoDB", icon: <Image src="/icons/database/mongodb.svg" alt="MongoDB" width={48} height={48} /> },
      { name: "Prisma", icon: <Image src="/icons/database/prisma.svg" alt="Prisma" width={48} height={48} /> },
      { name: "Neon", icon: <Image src="/icons/database/neon.svg" alt="Neon" width={48} height={48} /> },
      { name: "Redis", icon: <Image src="/icons/database/redis.svg" alt="Redis" width={48} height={48} /> },
    ],
  },
  {
    title: "DEVOPS",
    color: "text-orange-400",
    skills: [
      { name: "AWS", icon: <Image src="/icons/cloud/aws.svg" alt="AWS" width={48} height={48} /> },
      { name: "Docker", icon: <Image src="/icons/cloud/docker.svg" alt="Docker" width={48} height={48} /> },
      { name: "Cloudflare", icon: <Image src="/icons/cloud/cloudflare.svg" alt="Cloudflare" width={48} height={48} /> },
      { name: "GitHub", icon: <Image src="/icons/cloud/github.svg" alt="GitHub" width={48} height={48} /> },
      { name: "Google Cloud", icon: <Image src="/icons/cloud/gcp.svg" alt="Google Cloud" width={48} height={48} /> },
    ],
  },
  {
    title: "TOOLS",
    color: "text-pink-400",
    skills: [
      { name: "Git", icon: <Image src="/icons/tools/git.svg" alt="Git" width={48} height={48} /> },
      
      { name: "Nginx", icon: <Image src="/icons/tools/nginx.svg" alt="Nginx" width={48} height={48} /> },
      { name: "Android Studio", icon: <Image src="/icons/tools/android.svg" alt="Android Studio" width={48} height={48} /> },
      { name: "Clerk", icon: <Image src="/icons/tools/clerk.svg" alt="Clerk" width={48} height={48} /> },
      { name: "Selenium", icon: <Image src="/icons/tools/selenium.svg" alt="Selenium" width={50} height={50}
       /> },
      { name: "Postman", icon: <Image src="/icons/tools/postman.svg" alt="Postman" width={48} height={48} /> },
    ],
  },
  {
    title: "UI/UX",
    color: "text-yellow-400",
    skills: [
      { name: "Figma", icon: <Image src="/icons/ui/figma.svg" alt="Figma" width={46} height={46} /> },
      { name: "Canva", icon: <Image src="/icons/ui/canva.svg" alt="Canva" width={35} height={43} /> },
      { name: "Photoshop", icon: <Image src="/icons/ui/ps.svg" alt="Photoshop" width={48} height={48} /> },
      { name: "Framer", icon: <Image src="/icons/ui/framer.svg" alt="Framer" width={48} height={48} /> },
      { name: "Webflow", icon: <Image src="/icons/ui/webflow.svg" alt="Webflow" width={41} height={41} /> },
    ],
  },
];

const SkillsSection: React.FC = () => {
  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-transparent relative z-10">

      <section className="container mx-auto px-4 py-11 relative z-10">

        <m.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            rotate: 0,
            y: [0, -10, 0]
          }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            opacity: { duration: 0.6 },
            scale: { duration: 0.6, type: "spring", stiffness: 200 },
            rotate: { duration: 0.6, type: "spring", stiffness: 200 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="flex justify-center items-center"
        >
          <IconCloudDemo />
        </m.div>

        <m.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          style={{ perspective: "1000px" }}
        >
          {skillCategories.map((category) => (
            <SkillCard
              key={category.title}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </m.div>      {/* keyframe animation */}
      </section>
    </main>
  );
};

export default SkillsSection;