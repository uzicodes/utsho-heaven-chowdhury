"use client";
import React from "react";

import Navbar from '@/app/Navbar';
import { Card, CardContent } from "@/app/components/card";
import dynamic from "next/dynamic";

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

const SkillCard: React.FC<SkillCardProps> = ({ title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center justify-center gap-4 mb-6 w-full">
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
      title: "Frontend",
      color: "text-blue-400",
      skills: [
        { name: "React", icon: <img src="/icons/frontend/react.svg" alt="React" /> },
        { name: "HTML5", icon: <img src="/icons/frontend/html.svg" alt="HTML5"/> },
        { name: "CSS3", icon: <img src="/icons/frontend/css.svg" alt="CSS3"/> },
        { name: "JavaScript", icon: <img src="/icons/frontend/javascript.svg" alt="JavaScript"/> },
        { name: "TypeScript", icon: <img src="/icons/frontend/typescript.svg" alt="TypeScript"/> },
        { name: "Tailwind CSS", icon: <img src="/icons/frontend/tailwind.svg" alt="Tailwind CSS"/> },
      ],
    },
    {
      title: "Backend",
      color: "text-purple-400",
      skills: [
        { name: "Node.js", icon: <img src="/icons/backend/nodejs.svg" alt="Node.js" /> },
        { name: "Express.js", icon: <img src="/icons/backend/express.svg" alt="Express.js" /> },
        { name: "Go", icon: <img src="/icons/backend/go.svg" alt="Go" /> },
        { name: "Python", icon: <img src="/icons/backend/python.svg" alt="Python" /> },
        { name: "Ruby", icon: <img src="/icons/backend/ruby.svg" alt="Ruby" /> },
        { name: "FASTapi", icon: <img src="/icons/backend/fastapi.svg" alt="FASTapi" /> },
      ],
    },
    {
      title: "Database",
      color: "text-green-400",
      skills: [
        { name: "Firebase", icon: <img src="/icons/database/firebase.svg" alt="Firebase"/> },
        { name: "MongoDB", icon: <img src="/icons/database/mongodb.svg" alt="MongoDB" /> },
        { name: "MySQL", icon: <img src="/icons/database/mysql.svg" alt="MySQL" /> },
        { name: "Redis", icon: <img src="/icons/database/redis.svg" alt="Redis" /> },
        { name: "PostgreSQL", icon: <img src="/icons/database/postgresql.svg" alt="PostgreSQL" /> },
        { name: "Supabase", icon: <img src="/icons/database/supabase.svg" alt="Supabase" /> },
      ],
    },
    {
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
    // Updated: Removed bg-[#04081A] so stars show through
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-transparent relative z-10">
      
      <section className="container mx-auto px-4 py-11 relative z-10">
        <div className="flex justify-center items-center ">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
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
      `}</style>
    </main>
  );
};

// Wrapper page to include Navbar and SkillsSection
const SkillsPage = () => (
  // Updated: Changed bg-black to bg-transparent so global stars show through
  <div className="relative min-h-screen text-white overflow-hidden bg-transparent">
    
    {/* Navbar & Content stays on top (z-10) */}
    <div className="relative z-10">
      <Navbar />
      <SkillsSection />
    </div>
  </div>
);

export default SkillsPage;