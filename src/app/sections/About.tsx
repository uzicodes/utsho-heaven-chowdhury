"use client";

import Image from "next/image";
const HeroImg = "/about.webp";
import React, { useEffect, useRef } from "react";
import { m, Variants } from "framer-motion";
import { GithubActivity } from "@/app/components/github-activity";

// Image Animation
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
    transition: { staggerChildren: 0.12, delayChildren: 0.2 }
  }
};

// Text Item
const textItemVariant: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: "easeOut" }
  }
};

// Border Animation
const borderVariant: Variants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "100%",
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.25 }
  }
};

export default function About(): React.ReactElement {
  const widgetContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    if (document.querySelector('script[data-id="utsho"]')) return;

    const script = document.createElement('script');
    script.src = 'https://www.supportkori.com/widget.js';
    script.setAttribute('data-id', 'utsho');
    script.setAttribute('data-message', 'Buy me a Coffee');
    script.setAttribute('data-color', '#FFDD00');
    script.setAttribute('data-position', 'right');
    script.async = true;
    document.body.appendChild(script);


    const moveWidget = () => {
      const btn = document.querySelector('.sk-widget-btn') as HTMLElement | null;
      const iframeContainer = document.querySelector('.sk-widget-iframe-container') as HTMLElement | null;

      if (btn && widgetContainerRef.current && !widgetContainerRef.current.contains(btn)) {
        btn.style.position = 'relative';
        btn.style.bottom = 'auto';
        btn.style.right = 'auto';
        btn.style.left = 'auto';
        btn.style.top = 'auto';
        btn.style.zIndex = '10';
        btn.style.width = 'fit-content';
        btn.style.display = 'inline-flex';
        widgetContainerRef.current.appendChild(btn);

        // button text "Buy me a Coffee"
        const textEl = btn.querySelector('span') || btn.querySelector('p') || btn.lastChild;
        if (textEl && textEl.nodeType === Node.ELEMENT_NODE) {
          (textEl as HTMLElement).textContent = 'Buy me a Coffee';
        } else if (textEl && textEl.nodeType === Node.TEXT_NODE) {
          textEl.textContent = 'Buy me a Coffee';
        }

        // Enforce custom cursor only (remove default pointer cursor)
        btn.style.setProperty('cursor', 'none', 'important');
        btn.querySelectorAll('*').forEach((el) => {
          if (el instanceof HTMLElement) {
            el.style.setProperty('cursor', 'none', 'important');
          }
        });
      }

      if (iframeContainer && widgetContainerRef.current && !widgetContainerRef.current.contains(iframeContainer)) {

        iframeContainer.style.position = 'absolute';
        iframeContainer.style.bottom = '60px';
        iframeContainer.style.right = '0';
        iframeContainer.style.left = 'auto';
        iframeContainer.style.top = 'auto';
        widgetContainerRef.current.appendChild(iframeContainer);
      }

      if (btn && widgetContainerRef.current?.contains(btn)) {
        observer.disconnect();
      }
    };

    const observer = new MutationObserver(moveWidget);
    observer.observe(document.body, { childList: true, subtree: true });

    // Also try after a delay in case it was already added
    const timeout = setTimeout(moveWidget, 2000);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
      script.remove();
    };
  }, []);

  return (
    <>
      <section id="about" className="text-white overflow-x-clip" style={{ background: 'transparent', marginBottom: '2rem' }}>
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">

          {/* Animated Header */}
          <m.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 max-w-xl text-4xl font-semibold lg:text-5xl"
            style={{ color: '#DEB34B', fontFamily: 'var(--font-space-grotesk), sans-serif' }}
          >
            Developer, Designer Creator, Innovator
          </m.h2>

          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">

            {/* Image Side */}
            <div className="relative mb-6 sm:mb-0">
              <m.div
                className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={imageRevealVariant}
              >
                <Image
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </m.div>
            </div>

            {/* Text Side */}
            <m.div
              className="relative space-y-4"
              variants={textContainerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
            >




              <div className="pt-6">
                <blockquote className="relative pl-4">
                  {/* Animated Border Line */}
                  <m.span
                    variants={borderVariant}
                    className="absolute left-0 top-0 w-1 bg-gray-300"
                  />

                  <m.p variants={textItemVariant} className="text-white text-sm md:text-lg text-justify" style={{ fontFamily: 'var(--font-space-grotesk), sans-serif', hyphens: 'auto', WebkitHyphens: 'auto' }}>
                    {`I build scalable, user-centric web applications, bridging the gap between complex architecture and clean design. Right now, I'm deepening my expertise in modern backend infrastructure, DevOps, and system design to build high-availability solutions from the ground up. My passion lies in crafting seamless user experiences always eager to learn new technologies and methodologies to stay at the forefront of the industry. Beyond code, I am a lifelong learner and an active supporter of the developer community. I am committed to sharing knowledge and building tools that empower others to innovate, believing that the best way to move the industry forward is by growing together.`}
                  </m.p>
                </blockquote>

                <m.p variants={textItemVariant} className="text-white mt-6 mb-2 text-sm md:text-base" style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}>{`Let's not forget-`}</m.p>

                {/* Pop-in animation Code Text */}
                <m.p
                  variants={textItemVariant}
                  className="text-base md:text-xl"
                  style={{ color: '#CF4E5B', fontFamily: 'var(--font-space-grotesk), sans-serif', fontStyle: 'italic' }}
                >
                  {`it all started with a   `}
                  <m.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ type: "spring", stiffness: 200 }}
                    style={{ color: '#5DCF4E', display: 'inline-block', fontFamily: 'var(--font-space-grotesk), sans-serif', fontStyle: 'italic' }}
                  >
                    {'<'} hello world {'>'}
                  </m.span>
                </m.p>
                <m.div variants={textItemVariant} className="mt-8" style={{ position: 'relative', overflow: 'visible' }}>
                  <div ref={widgetContainerRef} style={{ position: 'relative' }} />
                </m.div>
              </div>
            </m.div>
          </div>

          {/* GitHub Activity Calendar */}
          <GithubActivity username="uzicodes" />
        </div>
      </section>
    </>
  );
}