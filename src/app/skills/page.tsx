
"use client";
import React from "react";


import Navbar from '@/app/Navbar';
import { Card, CardContent } from "@/app/components/card";
import { Badge } from "@/app/components/badge";
import dynamic from "next/dynamic";
const IconCloudDemo = dynamic(() => import("@/app/components/globe"), { ssr: false });
import { AiOutlineAntDesign } from "react-icons/ai";
import { Code2, Paintbrush, Database, Layout, Cpu, Cloud, LucideIcon } from "lucide-react";


import ReactIcon from "@/app/components/icons/frontend/react";
import HtmlIcon from "@/app/components/icons/frontend/html";
import CssIcon from "@/app/components/icons/frontend/css";
import JavascriptIcon from "@/app/components/icons/frontend/javascript";
import TypescriptIcon from "@/app/components/icons/frontend/typescript";
import TailwindIcon from "@/app/components/icons/frontend/tailwind";




interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  skills: Skill[];
  color: string;
}

interface SkillCategory {
  icon: LucideIcon;
  title: string;
  color: string;
  skills: Skill[];
}

const SkillCard: React.FC<SkillCardProps> = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span key={index + 1}>
            {skill.icon}
          </span>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      icon: Code2,
      title: "Frontend Development",
      color: "text-blue-400",
      skills: [
  { name: "React", icon: <ReactIcon /> },
  { name: "HTML5", icon: <HtmlIcon /> },
  { name: "CSS3", icon: <CssIcon /> },
  { name: "JavaScript", icon: <JavascriptIcon /> },
  { name: "TypeScript", icon: <TypescriptIcon /> },
  { name: "Tailwind CSS", icon: <TailwindIcon /> },
      ],
    },
    {
      icon: Database,
      title: "Backend Development",
      color: "text-green-400",
      skills: [
        { name: "Node.js", icon: <span /> },
        { name: "Express.js", icon: <span /> },
        { name: "Mongoose", icon: <span /> },
        { name: "MongoDB", icon: <span /> },
        { name: "REST APIs", icon: <span /> },
        { name: "Google Cloud", icon: <span /> },
      ],
    },
    {
      icon: Layout,
      title: "UI/UX Design",
      color: "text-purple-400",
      skills: [
        { name: "Figma", icon: <span /> },
        { name: "Responsive Design", icon: <span /> },
        { name: "Wireframing", icon: <span /> },
        { name: "Prototyping", icon: <span /> },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "text-orange-400",
      skills: [
        { name: "Git", icon: <span /> },
        { name: "GitHub", icon: <span /> },
        { name: "Linux", icon: <span /> },
        { name: "google analytics", icon: <span /> },
      ],
    },
    {
      icon: Cpu,
      title: "Tools & Technologies",
      color: "text-pink-400",
      skills: [
        { name: "VS Code", icon: <span /> },
        { name: "Redux", icon: <span /> },
        { name: "Tanstack Query", icon: <span /> },
        { name: "Vite", icon: <span /> },
        { name: "Render", icon: <span /> },
        { name: "Firebase", icon: <span /> },
        { name: "NextAuth", icon: <span /> },
        { name: "Netlify", icon: <span /> },
        { name: "Vercel", icon: <span /> },
      ],
    },
    {
      icon: Paintbrush,
      title: "Creative Skills",
      color: "text-yellow-400",
      skills: [
        { name: "UI Animation", icon: <span /> },
        { name: "SVG Animation", icon: <span /> },
        { name: "3D Modeling", icon: <span /> },
        { name: "Graphic Design", icon: <span /> },
      ],
    },
  ];

  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <section className="container mx-auto px-4 py-11 relative z-10">
        <div className="flex justify-center items-center ">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

// Wrapper page to include Navbar and SkillsSection
const SkillsPage = () => (
  <div className="relative min-h-screen text-white overflow-hidden bg-black">
    <Navbar />
    <SkillsSection />
  </div>
);

export default SkillsPage;