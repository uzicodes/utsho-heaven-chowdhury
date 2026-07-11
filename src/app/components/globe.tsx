import IconCloud from "./icon-cloud";
import React from "react";

const slugs: string[] = [
  "typescript",
  "javascript",
  "react",
  "android",
  "vercel",
  "html5",
  "nodedotjs",
  "angular",
  "express",
  "nextdotjs",
  "prisma",
  "postgresql",
  "firebase",
  "nginx",
  "testinglibrary",
  "redis",
  "jest",
  "kubernetes",
  "docker",
  "git",
  "jira",
  "supabase",
  "atlassian",
  "gitlab",
  "androidstudio",
  "figma",
  "notion",
  "clerk",
  "linux",
  "arduino",
  "googlecloud",
  "mongodb",
  "github",
  "tailwindcss",
  "ruby",
  "python",
  "css3",
  "fastapi",
  "neon",
  "amazonwebservices",
  "cloudflare",
  "selenium",
  "postman",
  "canva",
  "adobephotoshop",
  "framer",
  "webflow",
];

function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;