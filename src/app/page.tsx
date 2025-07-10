"use client";

import Image from "next/image";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white overflow-hidden">
      {/* Logo */}
      <div className="absolute top-6 left-8 z-10">
        <Image src="/logo.svg" alt="Logo" width={48} height={48} />
      </div>
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
        {/* Announcement Badge */}
        <div className="mt-20 mb-4 flex justify-center">
          <span className="bg-blue-700 text-xs text-white px-3 py-1 rounded-full font-semibold flex items-center gap-2 shadow-md">
            
          </span>
        </div>
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-2">
          I help founders turn ideas
          <br />
          into seamless <span className="italic font-serif">digital experiences</span>
        </h1>
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 mt-6 mb-8">
          <span className="text-lg md:text-xl">Hello, I&apos;m Utsho Heaven Chowdhury</span>
          <Image
            src="/profile-placeholder.png"
            alt="Profile picture"
            width={40}
            height={40}
            className="rounded-full border-2 border-white mx-2"
          />
          <span className="text-lg md:text-xl">a Full Stack Developer</span>
        </div>
        {/* Call to Action & Contact */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-2">
          <a
            href="#connect"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full font-semibold shadow transition"
          >
            Let&apos;s Connect <span className="text-xl">→</span>
          </a>
          <span className="text-sm md:text-base flex items-center gap-2">
            <svg width="20" height="20" fill="currentColor" className="inline-block"><path d="M2.003 5.884L10 11.382l7.997-5.498A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z"/><path d="M18 8.118l-8 5.5-8-5.5V16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z"/></svg>
            utshozi11@gmail.com
          </span>
        </div>
      </main>
      {/* Subtle Glow at Bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90vw] h-40 bg-gradient-to-t from-purple-900/60 to-transparent rounded-t-full blur-2xl opacity-60 pointer-events-none" />
    </div>
  );
}
