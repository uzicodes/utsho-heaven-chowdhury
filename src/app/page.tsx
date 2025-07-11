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
        
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 mt-6 mb-8">
          <span className="text-lg md:text-xl">Hello, I&apos;m Utsho Heaven Chowdhury</span>
          <br />
          <div style={{ position: "relative", width: 100, height: 100, display: "inline-block" }}>
            <span className="spinner"></span>
            <Image
              src="/dp.jpeg"
              alt="Profile picture"
              width={90}
              height={90}
              className="rounded-full border-2 border-white mx-2"
              style={{
                position: "absolute",
                top: 5,
                left: 5,
                zIndex: 2,
              }}
            />
          </div>
        </div>
        
        <div style={{ marginBottom: '2.5rem' }} />
        {/* Call to Action & Contact */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-2">
          <a href="#connect" className="button"><span>Let's Connect</span></a>
        </div>
      </main>
      {/* Subtle Glow at Bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90vw] h-40 bg-gradient-to-t from-purple-900/60 to-transparent rounded-t-full blur-2xl opacity-60 pointer-events-none" />
    </div>
  );
}
