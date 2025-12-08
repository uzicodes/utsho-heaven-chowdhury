"use client";

import Navbar from './Navbar';
import { useIsMobile } from '../lib/useIsMobile';
import Head from 'next/head';
import Image from 'next/image';
import { FlipWords } from './components/flip-words';
import BookshelfSection from './BookshelfSection';

export default function Home() {
  const words = [
    "Full-Stack Developer | UI/UX Enthusiast",
    "Python | TypeScript | React | Next.Js ",
    "Hands on Experience on MERN stack ",
    "Machine Learning  |  AI Integration",
    "Let's Build Something Amazing Together !",
  ];

  const isMobile = useIsMobile(640);

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Paytone+One&display=swap" rel="stylesheet" />
      </Head>
      {/* UPDATED: Changed bg-black to bg-transparent so the global stars show through */}
      <div className="relative min-h-screen text-white overflow-hidden bg-transparent">
        
        {/* Navbar on top */}
        <Navbar />

        {/* Main Content */}
        {/* Z-index makes it above the stars */}
        <main className="min-h-screen relative z-10 pt-32">
          {/* Hero Section */}
          <div className="container mx-auto px-6 lg:px-8">
            <div className="flex min-h-[65vh] items-center">
              {/* Left Side - Hero Text */}
              <div className="w-full lg:w-1/2">
                <div className="space-y-6" style={{marginTop: '-0.20rem'}}>
                  {/* Welcome badge */}
                  <div className={`flex ${isMobile ? 'justify-center' : ''}`}>
                    <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-2 animate__animated animate__fadeInDown animate__delay-1s">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                      <span className="text-gray-300 text-xs sm:text-sm font-medium">
                        Avaiable to Work
                      </span>
                    </div>
                  </div>
                  {isMobile ? (
                    <h1 className="hero-text font-bold leading-tight text-center mb-2">
                      <span className="text-white block mb-1 mt-0" style={{ fontSize: '1.25rem' }}>Hello I&apos;m,</span>
                      <span
                        className="hero-name hogers-font"
                        style={{
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
                    </h1>
                  ) : (
                    <h1 className="hero-text text-3xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                      <span
                        className="text-white"
                        style={{
                          fontSize: '2.5rem',
                          display: 'block',
                          marginBottom: '0.5rem',
                          marginTop: '0'
                        }}
                      >
                        Hello I&apos;m,
                      </span>
                      <span
                        className="hero-name whitespace-nowrap hogers-font"
                        style={{
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
                    </h1>
                  )}
                  {/* Role badge */}
                  <div className={`flex ${isMobile ? 'justify-center' : ''}`}>
                    <div className={`inline-flex items-center gap-2 sm:gap-3 ${isMobile ? 'px-3 py-2' : 'px-4 sm:px-8 py-3 sm:py-5'} rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 ${isMobile ? 'mb-6 sm:mb-8' : 'mb-2'} backdrop-blur-sm animate__animated animate__fadeInUp animate__delay-1s ${isMobile ? 'min-w-[280px] min-h-[48px]' : 'min-w-[320px] min-h-[64px]'}`} style={!isMobile ? { marginLeft: '-5px' } : {}}>
                      <i className={`fas fa-rocket text-blue-400 animate-bounce ${isMobile ? 'text-xs' : 'text-sm sm:text-base'}`}></i>
                      <span>
                        <FlipWords
                          className={isMobile ? "flipwords-font text-sm text-blue-400 font-medium" : "flipwords-font text-lg sm:text-xl text-blue-400 font-medium"}
                          words={words}
                        />
                      </span>
                    </div>
                  </div>
                  {/* Mobile Image - only shown on mobile screens */}
                  {isMobile && (
                    <div className="flex justify-center -mt-20">
                      <img src="/DP_removed_BG.png" alt="Profile" width={200} height={200} style={{ maxWidth: '80vw', height: 'auto', borderRadius: '1rem', objectFit: 'cover' }} />
                    </div>
                  )}
                  {/* Description under flipping words */}
                  <div className="mt-4 text-xl text-gray-300 max-w-xl ml-auto lora-font" style={{ marginLeft: '5px' }}>
                    Full-Stack Developer actively seeking opportunities to integrate intelligent systems into Real-world solutions.
                  </div>
                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 animate__animated animate__fadeInUp animate__delay-2s mt-4">
                    {/* CV Button */}
                    <a
                      href="https://drive.google.com/file/d/1UiITMC1UhNa9bMl_sRLiXJxsgS8TDPqE/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-red-500 to-orange-400 p-0.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#F87171]"
                    >
                      <span className="block w-full px-6 sm:px-8 py-3 sm:py-4 rounded-[11px] bg-gray-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-red-400">
                        <span className="relative flex items-center justify-center gap-2 text-white font-medium">
                          <img src="/pdf.png" alt="PDF" width={22} height={22} className="inline-block mr-2 align-middle" />
                          <span className="colus-font">CV</span>
                          <i className="fas fa-arrow-right transform transition-all duration-300 group-hover:translate-x-1"></i>
                        </span>
                      </span>
                    </a>

                    {/* Contact Button */}
                    <a
                      href="https://calendly.com/utsho/30min"
                      target="_blank"
                      className="group relative inline-flex items-center justify-center gap-3 p-0.5 rounded-xl bg-gradient-to-r from-green-800 to-green-700 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]"
                    >
                      <span className="block px-1 sm:px-2 py-3 sm:py-4 rounded-[11px] bg-gray-900 border border-gray-700/50 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-700">
                        <span className="relative flex items-center justify-end gap-2 text-gray-300 font-medium group-hover:text-white min-w-[120px]">
                          <span className="colus-font"> Consultations</span>
                          <i className="fas fa-envelope transform transition-all duration-300 group-hover:rotate-12"></i>
                        </span>
                      </span>
                    </a>
                  </div>
                  {/* Social Icons Row */}
                  <div className="flex gap-2.5 mt-6 items-center">
                    <button
                      aria-label="GitHub"
                      className="contact-social-icon rounded-full p-1 bg-gray-900/30 hover:bg-gray-800/60"
                      onClick={() => window.open('https://github.com/uzicodes', '_blank')}
                    >
                      <img src="https://skillicons.dev/icons?i=github" alt="GitHub" width={32} height={32} className="rounded-full ml-1" />
                    </button>

                    <button
                      aria-label="LinkedIn"
                      className="contact-social-icon rounded-full p-1 bg-gray-900/30 hover:bg-gray-800/60"
                      onClick={() => window.open('https://www.linkedin.com/in/utsho-heaven-chowdhury/', '_blank')}
                    >
                      
                      <img src="https://skillicons.dev/icons?i=linkedin" alt="LinkedIn" width={32} height={32} className="rounded-full ml-1" />
                    </button>

                    <button
                      aria-label="Email"
                      className="contact-social-icon rounded-full p-1 bg-gray-900/30 hover:bg-gray-800/60"
                      onClick={() => window.location.href = 'mailto:utshozi11@gmail.com'}
                    >
                      <img src="https://skillicons.dev/icons?i=gmail" alt="Gmail" width={32} height={32} className="rounded-full ml-1" />
                    </button>


                    {/* Gmail address */}
                    <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 animate__animated animate__fadeInDown animate__delay-1s ml-3.9">
                      <span className="text-gray-300 text-xs sm:text-sm font-medium">
                        utshozi11@gmail.com
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right Side - Glowing Card (hidden on mobile) */}
              {!isMobile && (
                <div className="w-full lg:w-1/2 relative">
                  <div 
                    className="rounded-2xl p-1 absolute"
                    style={{
                      width: '320px', 
                      height: '400px',
                      background: '#7df9ff',
                      boxShadow: '0 0 15px #7df9ff, 0 0 25px #00bfff, inset 0 0 0 1px #7df9ff',
                      animation: 'glow-pulse 2s ease-in-out infinite alternate',
                      top: '-150px',
                      left: '50%',
                      transform: 'translateX(-50%)'
                    }}
                  >
                    <div 
                      className="bg-gray-900 rounded-xl h-full flex items-start justify-center pt-1 pb-1 px-1"
                      style={{
                        backgroundColor: 'rgba(17, 24, 39, 0.95)'
                      }}
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
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Section - About Me */}
          <div className="container mx-auto px-6 lg:px-8 mt-20">
            <BookshelfSection />
            {require('./about/about').default()}
            <div style={{ height: '2rem', width: '100%' }} />
          </div>
        </main>
      </div>
    </>
  );
}