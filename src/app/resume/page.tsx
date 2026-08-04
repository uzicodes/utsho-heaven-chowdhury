import React from 'react';
import Link from 'next/link';

export default function ResumePage() {
  const driveLink = "https://drive.google.com/file/d/1UiITMC1UhNa9bMl_sRLiXJxsgS8TDPqE/view?usp=sharing";
  const embedLink = "https://drive.google.com/file/d/1UiITMC1UhNa9bMl_sRLiXJxsgS8TDPqE/preview";
  const downloadLink = "https://drive.google.com/uc?export=download&id=1UiITMC1UhNa9bMl_sRLiXJxsgS8TDPqE";

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        .custom-cursor { display: none !important; }
        body { cursor: auto !important; }
      `}} />
      <div className="min-h-screen bg-[#0a0b0e] text-gray-200 font-sans selection:bg-[#F5BE27] selection:text-black relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#F5BE27]/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

        {/* Navbar / Header */}
        <header className="sticky top-0 sm:top-6 z-50 w-full sm:max-w-5xl mx-auto px-0 sm:px-4 transition-all duration-300">
          <div className="flex flex-col sm:flex-row items-center justify-between py-4 sm:py-3 px-6 sm:px-8 gap-4 sm:gap-0 bg-[#0f1115]/80 backdrop-blur-xl sm:border border-b border-gray-800/60 sm:rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
            {/* Back to Portfolio */}
            <Link
              href="/"
              className="group flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300 font-medium text-sm sm:text-base"
            >
              <div className="p-2 rounded-full bg-gray-800/50 group-hover:bg-[#F5BE27]/20 group-hover:text-[#F5BE27] transition-all duration-300">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </div>
              <span className="hidden sm:inline">Portfolio</span>
              <span className="sm:hidden">Back</span>
            </Link>

            {/* Name & Title */}
            <div className="flex flex-col items-center text-center">
              <h1 className="text-lg sm:text-xl font-bold text-[#FF4601] tracking-tight" style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}>
                Utsho Heaven Chowdhury
              </h1>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-[11px] sm:text-xs text-gray-400 font-semibold tracking-widest uppercase">Software Engineer</p>
              </div>
            </div>

            {/* Download Button */}
            <a
              href={downloadLink}
              download
              className="group relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-[#FF4601]/50 backdrop-blur-md transition-all duration-300 font-medium text-xs shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:shadow-[0_4px_20px_rgba(255,70,1,0.25)] hover:scale-105 active:scale-95 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none"></div>
              <span>Download</span>
              <div className="p-0.5 rounded-full bg-white/10 group-hover:bg-[#FF4601] group-hover:text-black transition-all duration-300">
                <svg className="w-3 h-3 transform group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
            </a>
          </div>
        </header>

        {/* Main Content */}
        <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 z-10">
          <div className="w-full flex justify-center">
            <div className="w-full max-w-4xl aspect-[1/1.45] bg-[#0a0b0e] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)] ring-1 ring-white/10 p-2 sm:p-3 relative group mx-auto transition-all duration-500 hover:shadow-[0_20px_60px_rgba(245,190,39,0.15)] hover:ring-white/20">

              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

              <div className="w-full h-full rounded-2xl overflow-hidden relative bg-[#111]">
                <iframe
                  src={embedLink}
                  title="Utsho Heaven Chowdhury - Resume"
                  className="w-full h-full border-none"
                  allow="autoplay"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
