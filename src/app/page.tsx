"use client";


import Navbar from './Navbar';
import Head from 'next/head';
import Image from 'next/image';
import { FlipWords } from './components/flip-words';


export default function Home() {
  const words = [
    "Full-Stack Developer & UI/UX Enthusiast",
    "Python | TypeScript | React | Next.Js ",
    "Hands on Experience on MERN ",
    "Machine Learning & Deep Learning ",
    "Passionate about Clean Code",
  ];

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Paytone+One&display=swap" rel="stylesheet" />
      </Head>
      <div className="relative min-h-screen text-white overflow-hidden bg-black">
        <Navbar />
        <main className="relative z-10 pt-20 min-h-[300vh]">
          {/* Hero Section */}
          <div className="container mx-auto px-6 lg:px-8">
            <div className="flex min-h-[65vh] items-center">
              {/* Left Side - Hero Text */}
              <div className="w-full lg:w-1/2">
                <div className="space-y-6" style={{marginTop: '-7.2rem'}}>
                  <h1 className="hero-text text-3xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                    <span className="text-white" style={{fontSize: '2.5rem'}}>Hello I&apos;m,</span>
                    <span
                      className="hero-name whitespace-nowrap lilitaone-font"
                      style={{
                        backgroundImage: 'linear-gradient(135deg, #ff6b35, #f7931e, #ff9500)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontSize: '50px',
                        display: 'block',
                        marginTop: '-0.1rem',
                        lineHeight: '1'
                      }}
                    >
                      UTSHO HEAVEN CHOWDHURY
                    </span>
                  </h1>
                  {/* Role badge */}
                  <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 mb-6 sm:mb-8 backdrop-blur-sm animate__animated animate__fadeInUp animate__delay-1s">
                    <i className="fas fa-rocket text-blue-400 animate-bounce text-sm sm:text-base"></i>
                    <span>
                      <FlipWords
                        className={"text-lg sm:text-xl text-blue-400 font-medium"}
                        words={words}
                      />
                    </span>
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
                    top: '-70.0px',
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