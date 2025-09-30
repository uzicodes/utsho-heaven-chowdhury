"use client";


import Navbar from './Navbar';
import Head from 'next/head';
import Image from 'next/image';
import { FlipWords } from './components/flip-words';


export default function Home() {
  const words = [
    "Full-Stack Developer | UI/UX Enthusiast",
    "Python | TypeScript | React | Next.Js ",
    "Hands on Experience on MERN stack ",
    "Machine Learning  | CV |  Deep Learning",
    "Let's Build Something Amazing Together !",
  ];

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Paytone+One&display=swap" rel="stylesheet" />
      </Head>
      <div className="relative min-h-screen text-white overflow-hidden bg-black">
        <Navbar />
  <main className="relative z-10 pt-32 min-h-[300vh]">
          {/* Hero Section */}
          <div className="container mx-auto px-6 lg:px-8">
            <div className="flex min-h-[65vh] items-center">
              {/* Left Side - Hero Text */}
              <div className="w-full lg:w-1/2">
                <div className="space-y-6" style={{marginTop: '-0.20rem'}}>
                  {/* Welcome badge */}
                  <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-6 sm:mb-8 animate__animated animate__fadeInDown animate__delay-1s">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                    <span className="text-gray-300 text-xs sm:text-sm font-medium">
                      Avaiable to Work
                    </span>
                  </div>
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
                  {/* Role badge */}
                  <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-8 py-3 sm:py-5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 mb-6 sm:mb-8 backdrop-blur-sm animate__animated animate__fadeInUp animate__delay-1s min-w-[320px] min-h-[64px] ml-auto" style={{ marginLeft: '-5px' }}>
                    <i className="fas fa-rocket text-blue-400 animate-bounce text-sm sm:text-base"></i>
                    <span>
                      <FlipWords
                        className={"flipwords-font text-lg sm:text-xl text-blue-400 font-medium"}
                        words={words}
                      />
                    </span>
                  </div>
                  {/* Description under flipping words */}
                  <div className="mt-4 text-xl text-gray-300 max-w-xl ml-auto lora-font" style={{ marginLeft: '5px' }}>
                    Full-Stack Developer actively seeking opportunities to integrate intelligent systems into Real-world solutions.
                  </div>
                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate__animated animate__fadeInUp animate__delay-2s mt-4">
                    {/* View Projects Button */}
                    <a
                      href="https://drive.google.com/file/d/1pkzW6I5kco3v7WrxpyGXqTHQJSpSERjz/view?usp=sharing"
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
                      <span className="block w-full px-6 sm:px-8 py-3 sm:py-4 rounded-[11px] bg-gray-900 border border-gray-700/50 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-700">
                        <span className="relative flex items-center justify-center gap-2 text-gray-300 font-medium group-hover:text-white">
                          <span className="colus-font">Free Consultation</span>
                          <i className="fas fa-envelope transform transition-all duration-300 group-hover:rotate-12"></i>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              {/* Right Side - Glowing Card */}
              <div className="w-full lg:w-1/2 relative">
                <div 
                  className="rounded-2xl p-1 absolute"
                  style={{
                    width: '320px', 
                    height: '400px',
                    background: '#7df9ff',
                    boxShadow: '0 0 15px #7df9ff, 0 0 25px #00bfff, inset 0 0 0 1px #7df9ff',
                    animation: 'glow-pulse 2s ease-in-out infinite alternate',
                    top: '-140px',
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
            </div>
          </div>
          {/* Additional Content Section 1 - About Me */}
          <div className="container mx-auto px-6 lg:px-8 mt-32">
            <div className="min-h-[80vh] flex items-center justify-center">
              <div className="text-center max-w-4xl">
                <h2 className="text-4xl lg:text-6xl font-bold mb-8">
                  About
                </h2>
                <p className="text-xl text-gray-400 leading-relaxed">
                </p>
              </div>
            </div>
          </div>
          {/* Additional Content Section 2 - Skills Preview */}
          <div className="container mx-auto px-6 lg:px-8 mt-32">
            <div className="min-h-[80vh] flex items-center justify-center">
              <div className="text-center max-w-4xl">
                <h2 className="text-4xl lg:text-6xl font-bold mb-8">
                  I Work With
                </h2>
                <p className="text-xl text-gray-400 leading-relaxed mb-8">
                </p>
                <a 
                  href="/skills"
                  className="button relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium"
                >
                  <span className="relative z-10">Explore My Skills</span>
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
    );
  }