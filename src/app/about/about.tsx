import Image from "next/image";
const HeroImg = "/about.png";
import React from "react";

export default function About(): React.ReactElement {
  return (
    <>
      {/* Updated style: Changed background to 'transparent' 
        so the global StarsBackground from page.tsx is visible behind this section.
      */}
      <section id="about" className="text-white" style={{ background: 'transparent', marginBottom: '2rem' }}>
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
                specializing in creating innovative Web/Software solutions with a focus on 
                user-friendly interfaces & scalabilty.`}
                {` I'm dedicated to simplifying development workflows.`}
              </p>
              <p className="text-white lora-font">
                {`My focus is on making development faster, easier, and
                accessible to all developers. Currently, I'm focusing into
                backend development a bit more to create
                seamless & secure web applications. Iam diving more into the DevOps culture more to excel my expertise in the cloud operations.`}
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white lora-font">
                    {`I' am a lifelong learner and a dedicated supporter of the developers community, committed to creating new & effective tools & ideas to empower developers. I am championing new technologies to help developers build better & more efficient applications. I want to share this knowledge and experience with my community, so that we can all move forward together.`}

                  </p>

                  <div className="mt-6 space-y-3">
                  </div>
                </blockquote>
                <br></br>

                <p className="text-white lora-font">{`Let's not forget-`}</p>
                <br></br>
                <p className="text-xl flipwords-font" style={{ color: '#CF4E5B' }}>
                  {`it all started with </> `}
                  <span style={{ color: '#5DCF4E' }}>"Hello World"</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}