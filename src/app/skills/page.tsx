
"use client";
import React from "react";


import Navbar from '@/app/Navbar';
import { Card, CardContent } from "@/app/components/card";
import { Badge } from "@/app/components/badge";
import dynamic from "next/dynamic";
const IconCloudDemo = dynamic(() => import("@/app/components/globe"), { ssr: false });
import { AiOutlineAntDesign } from "react-icons/ai";
import { Code2, Paintbrush, Database, Layout, Cpu, Cloud, LucideIcon, Settings } from "lucide-react";





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
      <div className="flex items-center justify-center gap-4 mb-6 w-full">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 text-center colus-font">
          {title}
        </h3>
      </div>
  <div className="flex flex-wrap gap-2 justify-center w-full">
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
      title: "Frontend",
      color: "text-blue-400",
      skills: [
  { name: "React", icon: <img src="/icons/frontend/react.png" alt="React" width={48} height={48} /> },
  { name: "HTML5", icon: <img src="/icons/frontend/html.png" alt="HTML5" width={48} height={48} /> },
  { name: "CSS3", icon: <img src="/icons/frontend/css.png" alt="CSS3" width={48} height={48} /> },
  { name: "JavaScript", icon: <img src="/icons/frontend/javascript.png" alt="JavaScript" width={48} height={48} /> },
  { name: "TypeScript", icon: <img src="/icons/frontend/typescript.png" alt="TypeScript" width={48} height={48} /> },
  { name: "Tailwind CSS", icon: <img src="/icons/frontend/tailwind.png" alt="Tailwind CSS" width={48} height={48} /> },
      ],
    },
    {
      icon: Settings,
      title: "Backend",
      color: "text-purple-400",
      skills: [
  { name: "Node.js", icon: <img src="/icons/backend/node.js.png" alt="Node.js" width={48} height={48} /> },
  { name: "Express.js", icon: <img src="/icons/backend/express.png" alt="Express.js" width={48} height={48} /> },
  { name: "Go", icon: <img src="/icons/backend/go.png" alt="Go" width={48} height={48} /> },
  { name: "Python", icon: <img src="/icons/backend/python.png" alt="Python" width={48} height={48} /> },
  { name: "Ruby", icon: <img src="/icons/backend/ruby.png" alt="Ruby" width={48} height={48} /> },
  { name: "FASTapi", icon: <img src="/icons/backend/fastapi.png" alt="FASTapi" width={48} height={48} /> },
      ],
    },
    {
  icon: Database,
  title: "Database",
      color: "text-green-400",
      skills: [
  { name: "Firebase", icon: <img src="/icons/database/firebase.png" alt="Firebase" width={48} height={48} /> },
  { name: "MongoDB", icon: <img src="/icons/database/mongodb.png" alt="MongoDB" width={48} height={48} /> },
  { name: "MySQL", icon: <img src="/icons/database/mysql.png" alt="MySQL" width={48} height={48} /> },
  { name: "Redis", icon: <img src="/icons/database/redis.png" alt="Redis" width={48} height={48} /> },
  { name: "PostgreSQL", icon: <img src="/icons/database/postgressql.png" alt="PostgreSQL" width={48} height={48} /> },
  { name: "Supabase", icon: <img src="/icons/database/supabase.png" alt="Supabase" width={48} height={48} /> },
  
      ],
    },
    {
      icon: Cloud,
  title: "DevOps",
      color: "text-orange-400",
      skills: [
  { name: "AWS", icon: <img src="/icons/cloud/aws.png" alt="AWS" width={50} height={50} /> },
  { name: "Docker", icon: <img src="/icons/cloud/docker.png" alt="Docker" width={51} height={51} /> },
  { name: "GitLab", icon: <img src="/icons/cloud/gitLab.png" alt="GitLab" width={48} height={48} /> },
  { name: "GitHub", icon: <img src="/icons/cloud/github.png" alt="GitHub" width={50} height={50} /> },
  { name: "Google Cloud", icon: <img src="/icons/cloud/googlecloud.png" alt="Google Cloud" width={48} height={48} /> },
      ],
    },
    {
      icon: Cpu,
      title: "Tools & Techs",
      color: "text-pink-400",
      skills: [
  { name: "VS Code", icon: <img src="/icons/tools/vscode.png" alt="VS Code" width={48} height={48} /> },
  { name: "Git", icon: <img src="/icons/tools/git.png" alt="Git" width={48} height={48} /> },
  { name: "Jest", icon: <img src="/icons/tools/jest.png" alt="Jest" width={48} height={48} /> },
  { name: "Vercel", icon: <img src="/icons/tools/vercel.png" alt="Vercel" width={48} height={48} /> },
  { name: "Postman", icon: <img src="/icons/tools/postman.png" alt="Postman" width={48} height={48} /> },
  { name: "Arduino", icon: <img src="/icons/tools/arduino.png" alt="Arduino" width={48} height={48} /> },
      ],
    },
    {
      icon: Paintbrush,
      title: "UI/UX",
      color: "text-yellow-400",
      skills: [
  { name: "Figma", icon: <img src="/icons/ui/figma.png" alt="Figma" width={48} height={48} /> },
  { name: "Photoshop", icon: <img src="/icons/ui/photoshop.png" alt="Photoshop" width={50} height={50} /> },
  { name: "WordPress", icon: <img src="/icons/ui/wordpress.png" alt="WordPress" width={48} height={48} /> },
  { name: "Uizard", icon: <img src="/icons/ui/uizard.png" alt="Uizard" width={48} height={48} /> },
  { name: "Framer", icon: <img src="/icons/ui/framer.png" alt="Framer" width={48} height={48} /> },
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