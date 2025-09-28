"use client";

import Navbar from "../Navbar";

import IconCloudDemo from '@/app/components/globe';

export default function Skills() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden bg-black">

      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
  <main className="relative z-10 pt-20 min-h-[400vh]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex min-h-screen items-center justify-center">
            {/* Centered Globe Animation */}
            <div className="w-full flex justify-center mt-[-250px]">
              <div className="w-[500px] h-[500px]">
                <IconCloudDemo />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}