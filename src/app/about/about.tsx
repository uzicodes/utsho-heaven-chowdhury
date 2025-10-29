import Image from "next/image";
const HeroImg = "/about.png";
import React from "react";
import GitHubCalendar from 'react-github-calendar';

export default function About(): React.ReactElement {
  return (
    <>
  <section id="about" className="text-white" style={{ background: '#04081A', marginBottom: '2rem' }}>
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl cairo-font" style={{ color: '#DEB34B' }}>
            Developer, Designer Creator, Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <Image
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                  priority
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white lora-font">
                {`A passionate Full-Stack developer
                specializing in creating innovative Web solutions &
                user-friendly interfaces.`}
                ,{` I'm dedicated to simplifying development workflows.`}
              </p>
              <p className="text-white lora-font">
                {`My focus is on making web development faster, easier, and
                accessible to all developers. Currently, I'm focusing into
                backend development to create
                seamless & secure web applications.`}
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white lora-font">
                   {`I' am a lifelong learner and a dedicated supporter of the developer community, committed to creating new and effective tools and ideas to empower developers. I am championing new technologies to help developers build better & more efficient applications. I want to share this knowledge and experience with my community, so that we can all move forward together.`}
                  </p>

                  <div className="mt-6 space-y-3">
                  </div>
                  {/* GitHub Contribution Graph */}
                  <div className="mt-8 flex justify-center">
                    <div className="bg-[#161B22] p-4 rounded-xl shadow-lg">
                      <h3 className="text-sm font-bold mb-2 text-white text-center">GitHub Contributions</h3>
                      <GitHubCalendar username="uzicodes" blockSize={7} blockMargin={1} fontSize={8} theme={{light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'], dark: ['#161B22', '#0e4429', '#006d32', '#26a641', '#40c463']}} />
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}