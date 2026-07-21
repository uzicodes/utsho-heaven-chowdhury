"use client";

import { useEffect } from 'react';
import Navbar from './Navbar';
import { m } from 'framer-motion';

// IMPORTING SECTIONS
import Hero from './sections/Hero';
import BookshelfSection from './components/BookshelfSection';
import About from './sections/About';
import SkillsPage from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Contact from './sections/Contacts';

export default function Home() {
  // FORCE SCROLL TO TOP ON RELOAD
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="relative min-h-screen text-white bg-transparent overflow-x-clip">
        <Navbar />

        <main className="min-h-screen relative z-10 pt-32">

          {/* HERO SECTION */}
          <Hero />

          {/* BOOKSHELF SECTION */}
          <section id="bookshelf" className="relative">
            <div className="container mx-auto px-6 lg:px-8 mt-20">
              <BookshelfSection />
            </div>
          </section>

          {/* ABOUT SECTION */}
          <section id="about" className="relative">
            <m.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.2 }}
              className="container mx-auto px-6 lg:px-8 mt-20"
            >
              <About />
              <div style={{ height: '2rem', width: '100%' }} />
            </m.div>
          </section>

          {/* SKILLS SECTION */}
          <section id="skills" className="relative">
            <SkillsPage />
          </section>

          {/* PROJECTS SECTION */}
          <section id="projects" className="relative">
            <Projects />
          </section>

          {/* EDUCATION SECTION */}
          <section id="education" className="relative">
            <Education />
          </section>

          {/* CONTACTS SECTION */}
          <section id="contacts" className="relative">
            <Contact />
          </section>

          {/* FOOTER (Big Heading & Email) */}
          <footer className="relative pt-32 pb-16 px-6 lg:px-12 overflow-hidden bg-transparent">
            <div className="w-full max-w-7xl mx-auto text-center space-y-8 relative">
              {/* Big Heading */}
              <h2
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] font-extrabold text-white leading-none tracking-tight md:whitespace-nowrap"
                style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
              >
                LET&apos;S MAKE<span className="hidden md:inline"> </span><br className="md:hidden" />IT HAPPEN
              </h2>

              {/* Email */}
              <a
                href="mailto:utsho8chowdhury@gmail.com"
                className="inline-block text-[#e07a3a] hover:text-[#f09050] text-lg sm:text-xl md:text-2xl font-bold tracking-wider transition-colors"
                style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
              >
                utsho8chowdhury@gmail.com
              </a>
            </div>
          </footer>

        </main>
      </div>
    </>
  );
}