"use client";

import Image from "next/image";
const HeroImg = "/about.png";
import React from "react";
import { motion, Variants } from "framer-motion";



export default function About(): React.ReactElement {
  
  // Image Animation: Starts slightly smaller & blurry, then becomes clear 
  const imageRevealVariant: Variants = {
    hidden: { 
      opacity: 0, 
      scale: 0.95, 
      filter: "blur(10px)" // starts blurry
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      filter: "blur(0px)", // becomes clear
      transition: { 
        duration: 1, 
        ease: "easeOut"
      } 
    }
  };

  // Text Container
  const textContainerVariant: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.4 }
    }
  };

  // Text Item
  const textItemVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Border Animation
  const borderVariant: Variants = {
    hidden: { height: 0, opacity: 0 },
    visible: { 
      height: "100%", 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.6 } 
    }
  };

  return (
    <>
      <section id="about" className="text-white overflow-x-clip" style={{ background: 'transparent', marginBottom: '2rem' }}>
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          
          {/* Animated Header */}
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl cairo-font" 
            style={{ color: '#DEB34B' }}
          >
            Developer, Designer Creator, Innovator
          </motion.h2>

          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            
            {/* Image Side */}
            <div className="relative mb-6 sm:mb-0">
              <motion.div 
                className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent"
                initial="hidden"
                whileInView="visible"
                /* UPDATED: Removed negative margin so it resets easier when scrolling */
                viewport={{ once: false, amount: 0.3 }} 
                variants={imageRevealVariant}
              >
                <Image
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                  priority
                />
              </motion.div>
            </div>

            {/* Text Side */}
            <motion.div 
              className="relative space-y-4"
              variants={textContainerVariant}
              initial="hidden"
              whileInView="visible"
              /* UPDATED: Removed negative margin here too */
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.p variants={textItemVariant} className="text-white lora-font">
                {`A passionate developer dedicated to building innovative, scalable web solutions that prioritize the user experience. I aim to bridge the gap between complex software architecture & intuitive design, always with a focus on simplifying development workflows.`}
                {` My journey began with a fascination for how things work under the hood, leading me to explore various programming languages, architectures & frameworks over the years.`}
              </motion.p>
              
              <motion.p variants={textItemVariant} className="text-white lora-font">
                {`To broaden my impact, I am currently deepening my expertise in Backend development and DevOps. I am diving into cloud operations and secure architecture to master the full application lifecycle, ensuring every project I build is seamless, secure, and optimized for the modern web.`}
              </motion.p>

              <div className="pt-6">
                <blockquote className="relative pl-4">
                  {/* Animated Border Line */}
                  <motion.span 
                    variants={borderVariant}
                    className="absolute left-0 top-0 w-1 bg-gray-300"
                  />
                  
                  <motion.p variants={textItemVariant} className="text-white lora-font">
                    {`Beyond code, I am a lifelong learner and an active supporter of the developer community. I am committed to sharing knowledge and building tools that empower others to innovate, believing that the best way to move the industry forward is by growing together.`}
                  </motion.p>

                  <div className="mt-6 space-y-3">
                  </div>
                </blockquote>
                <br></br>

                <motion.p variants={textItemVariant} className="text-white cairo-font">{`Let's not forget-`}</motion.p>
                
                {/* Pop-in animation for the code text */}
                <motion.p 
                  variants={textItemVariant}
                  className="text-xl cairo-font" 
                  style={{ color: '#CF4E5B' }}
                >
                  {`it all started with a   `}
                  <motion.span 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ type: "spring", stiffness: 200 }}
                    style={{ color: '#5DCF4E', display: 'inline-block' }}
                    className="cairo-font"
                  >
                         <code>"hello world"</code> {'</>'}
                  </motion.span>
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}