"use client";

import React from "react";
import Image from "next/image";
import { m, Variants } from "framer-motion";
import { FlipWords } from "../components/flip-words";
import { useIsMobile } from "../../lib/useIsMobile";

const words = [
  "Full-Stack Software Dev | System Design",
  "React | TypeScript | Node.js | PostgreSQL ",
  "Let's Build Something Amazing Together !",
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 20 } },
};

export default function Hero() {
  const isMobile = useIsMobile(640);

  return (
    <section id="home" className="relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex min-h-[65vh] items-center">

          {/* Hero Text */}
          <m.div
            className="w-full lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-6" style={{ marginTop: '-0.20rem' }}>

              {/* Welcome badge */}
              <m.div variants={itemVariants} className={`flex ${isMobile ? 'justify-center' : ''}`}>
                <div className={`inline-flex items-center ${isMobile ? 'gap-1 px-1.5 py-0.5' : 'gap-1.5 px-2 py-1'} rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-2`}>
                  <div className={`${isMobile ? 'w-1.5 h-1.5' : 'w-1.5 h-1.5'} rounded-full bg-green-400 animate-pulse`}></div>
                  <span className={`text-gray-300 font-medium ${isMobile ? 'text-[8px]' : 'text-[11px]'}`} style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
                    AVAILABLE TO WORK
                  </span>
                </div>
              </m.div>

              {/* Name Heading */}
              {isMobile ? (
                <m.h1 variants={itemVariants} className="hero-text font-bold leading-tight text-center mb-2">
                  <span className="text-white block mb-1 mt-0" style={{ fontSize: '1.25rem' }}>Hello I&apos;m,</span>
                  <span
                    className="hero-name"
                    style={{
                      fontFamily: 'var(--font-space-grotesk), sans-serif',
                      backgroundImage: 'linear-gradient(135deg, #ff6b35, #f7931e, #ff9500)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontSize: '1.5rem',
                      display: 'block',
                      marginTop: '0',
                      lineHeight: '1.2',
                      whiteSpace: 'normal',
                      wordWrap: 'break-word',
                      maxWidth: '100%',
                    }}
                  >
                    UTSHO HEAVEN CHOWDHURY
                  </span>
                </m.h1>
              ) : (
                <m.h1 variants={itemVariants} className="hero-text text-3xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span
                    className="text-white"
                    style={{
                      fontSize: '2rem',
                      display: 'block',
                      marginBottom: '0.5rem',
                      marginTop: '0'
                    }}
                  >
                    Hello I&apos;m,
                  </span>
                  <span
                    className="hero-name whitespace-nowrap"
                    style={{
                      fontFamily: 'var(--font-space-grotesk), sans-serif',
                      backgroundImage: 'linear-gradient(135deg, #ff6b35, #f7931e, #ff9500)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontSize: '45px',
                      display: 'block',
                      marginTop: '0',
                      lineHeight: '1'
                    }}
                  >
                    UTSHO HEAVEN CHOWDHURY
                  </span>
                </m.h1>
              )}

              {/* Role badge */}
              <m.div variants={itemVariants} className={`flex ${isMobile ? 'justify-center' : ''}`}>
                <div className={`inline-flex items-center gap-2 sm:gap-3 ${isMobile ? 'px-2 py-1.5' : 'px-4 sm:px-8 py-3 sm:py-5'} rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 ${isMobile ? 'mb-6 sm:mb-8' : 'mb-2'} backdrop-blur-sm ${isMobile ? 'min-w-[240px] min-h-[40px]' : 'min-w-[320px] min-h-[64px]'}`} style={!isMobile ? { marginLeft: '-5px' } : {}}>
                  <i className={`fas fa-rocket text-blue-400 animate-bounce ${isMobile ? 'text-[10px]' : 'text-sm sm:text-base'}`}></i>
                  <span>
                    <FlipWords
                      className={isMobile ? "flipwords-font text-xs text-blue-400 font-medium" : "flipwords-font text-lg sm:text-xl text-blue-400 font-medium"}
                      words={words}
                    />
                  </span>
                </div>
              </m.div>

              {/* Mobile Image */}
              {isMobile && (
                <m.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex justify-center mt-4 mb-4"
                >
                  <Image
                    src="/DP_removed_BG.webp"
                    alt="Profile"
                    width={200}
                    height={200}
                    priority
                    style={{
                      maxWidth: '80vw',
                      width: 'auto',
                      height: 'auto',
                      borderRadius: '1rem',
                      objectFit: 'cover',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
                    }}
                  />
                </m.div>
              )}

              {/* Description */}
              <m.div variants={itemVariants} className={`mt-4 text-xl text-gray-300 max-w-xl ${isMobile ? 'text-center mx-auto' : 'ml-auto'}`} style={{ marginLeft: isMobile ? undefined : '5px', fontFamily: 'var(--font-space-grotesk), monospace' }}>
                Full-Stack Software Developer actively seeking opportunities to integrate Intelligent systems into Real-world solutions.
              </m.div>

              {/* CTA Buttons */}
              <m.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-2 mt-4">
                <m.a
                  href="https://drive.google.com/file/d/1UiITMC1UhNa9bMl_sRLiXJxsgS8TDPqE/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-800 to-green-700 p-0.5 rounded-none transition-all duration-300 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]"
                >
                  <span className="block w-full px-6 sm:px-8 py-3 sm:py-4 rounded-none bg-gray-900 border border-gray-700/50 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-700">
                    <span className="relative flex items-center justify-center gap-2 text-gray-300 font-medium group-hover:text-white">
                      <Image src="/pdf.png" alt="PDF" width={22} height={22} className="inline-block mr-2 align-middle" />
                      <span style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>CV</span>
                      <i className="fas fa-arrow-right transform transition-all duration-300 group-hover:translate-x-1"></i>
                    </span>
                  </span>
                </m.a>

                <m.a
                  href="https://calendly.com/utsho/30min"
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex items-center justify-center gap-3 p-0.5 rounded-none bg-gradient-to-r from-green-800 to-green-700 transition-all duration-300 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA] sm:ml-2 ml-0"
                >
                  <span className="block w-full px-6 sm:px-2 py-3 sm:py-4 rounded-none bg-gray-900 border border-gray-700/50 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-700 relative">
                    <span className="flex items-center justify-center gap-2 text-gray-300 font-medium group-hover:text-white min-w-[120px]">
                      <span style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>CONSULTATIONS</span>
                    </span>
                    <i className="fas fa-envelope transform transition-all duration-300 group-hover:rotate-12 absolute right-3 top-1/2 -translate-y-1/2"></i>
                  </span>
                </m.a>
              </m.div>

              {/* Social Icons */}
              <m.div variants={itemVariants} className={`flex gap-4 mt-6 items-center ${isMobile ? 'justify-center flex-wrap' : ''}`}>
                <m.button
                  whileHover={{ scale: 1.1 }}
                  aria-label="GitHub"
                  className="rounded-lg contact-social-icon  transition-colors"
                  onClick={() => window.open('https://github.com/uzicodes', '_blank')}
                >
                  <Image src="https://skillicons.dev/icons?i=github" alt="GitHub" width={32} height={32} className="w-8 h-8" unoptimized />
                </m.button>

                <m.button
                  whileHover={{ scale: 1.1 }}
                  aria-label="LinkedIn"
                  className="rounded-lg contact-social-icon transition-colors"
                  onClick={() => window.open('https://www.linkedin.com/in/utsho-heaven-chowdhury/', '_blank')}
                >
                  <Image src="https://skillicons.dev/icons?i=linkedin" alt="LinkedIn" width={32} height={32} className="w-8 h-8" unoptimized />
                </m.button>

                <m.button
                  whileHover={{ scale: 1.1 }}
                  aria-label="Email"
                  className=" rounded-lg contact-social-icon transition-colors"
                  onClick={() => window.location.href = 'mailto:utshozi11@gmail.com'}
                >
                  <Image src="https://skillicons.dev/icons?i=gmail" alt="Gmail" width={32} height={32} className="w-8 h-8" unoptimized />
                </m.button>

                <div className="inline-flex items-center gap-2 px-2 sm:px-2 py-1 sm:py-1.5 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50">
                  <span className="text-gray-300 text-[10px] sm:text-xs font-medium" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
                    utshozi11@gmail.com
                  </span>
                </div>
              </m.div>
            </div>
          </m.div>

          {/* Glowing Card */}
          {!isMobile && (
            <div className="w-full lg:w-1/2 relative">
              <m.div
                initial={{ opacity: 0, scale: 0.8, x: "-50%", y: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: "-50%",
                  y: [0, -15, 0],
                  boxShadow: [
                    "0 0 15px #7df9ff, 0 0 25px #00bfff, inset 0 0 0 1px #7df9ff",
                    "0 0 25px #7df9ff, 0 0 45px #00bfff, inset 0 0 0 1px #7df9ff",
                    "0 0 15px #7df9ff, 0 0 25px #00bfff, inset 0 0 0 1px #7df9ff"
                  ]
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                className="rounded-2xl p-1 absolute"
                style={{
                  width: '320px',
                  height: '400px',
                  background: '#7df9ff',
                  top: '-150px',
                  left: '50%',
                }}
              >
                <div
                  className="bg-gray-900 rounded-xl h-full flex items-start justify-center pt-1 pb-1 px-1"
                  style={{ backgroundColor: 'rgba(17, 24, 39, 0.95)' }}
                >
                  <Image
                    src="/DP_removed_BG.png"
                    alt="Profile"
                    width={320}
                    height={400}
                    className="w-full h-full object-cover rounded-lg"
                    style={{
                      filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
                      objectPosition: 'center bottom'
                    }}
                  />
                </div>
              </m.div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
