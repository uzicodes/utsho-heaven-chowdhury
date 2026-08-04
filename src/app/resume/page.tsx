import React from 'react';
import Link from 'next/link';

export default function ResumePage() {
  const driveLink = "https://drive.google.com/file/d/1UiITMC1UhNa9bMl_sRLiXJxsgS8TDPqE/view?usp=sharing";
  const embedLink = "https://drive.google.com/file/d/1UiITMC1UhNa9bMl_sRLiXJxsgS8TDPqE/preview";
  const downloadLink = "https://drive.google.com/uc?export=download&id=1UiITMC1UhNa9bMl_sRLiXJxsgS8TDPqE";

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-cursor { display: none !important; }
        body { cursor: auto !important; }
      `}} />
      <div className="min-h-screen bg-[#0f1115] text-gray-200 font-sans selection:bg-[#F5BE27] selection:text-black">
        {/* Navbar / Header */}
        <header className="sticky top-0 z-50 w-full bg-[#0a0b0e]/80 backdrop-blur-md border-b border-gray-800 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between h-auto sm:h-20 py-4 sm:py-0 gap-4 sm:gap-0">
              {/* Back to Portfolio */}
              <Link 
                href="/" 
                className="flex items-center gap-2 text-gray-400 hover:text-[#F5BE27] transition-colors duration-300 font-medium"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>Back to Portfolio</span>
              </Link>

              {/* Name & Title */}
              <div className="flex flex-col items-center text-center">
                <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}>
                  Utsho Heaven Chowdhury
                </h1>
                <p className="text-sm text-gray-400 font-medium">Full-Stack Developer</p>
              </div>

              {/* Download Button */}
              <a 
                href={downloadLink}
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#F5BE27]/10 text-[#F5BE27] border border-[#F5BE27]/20 hover:bg-[#F5BE27] hover:text-black hover:border-[#F5BE27] transition-all duration-300 font-medium shadow-[0_0_15px_rgba(245,190,39,0.1)] hover:shadow-[0_0_20px_rgba(245,190,39,0.3)]"
              >
                <span>Download</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="w-full flex justify-center">
            <div className="w-full max-w-4xl aspect-[1/1.45] bg-[#0a0b0e] rounded-2xl overflow-hidden border border-gray-800/80 shadow-[0_8px_30px_rgb(0,0,0,0.4)] ring-1 ring-white/5 p-1 sm:p-2 relative group mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#F5BE27]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              <iframe 
                src={embedLink}
                title="Utsho Heaven Chowdhury - Resume"
                className="w-full h-full rounded-xl bg-gray-900/50 border-none"
                allow="autoplay"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
