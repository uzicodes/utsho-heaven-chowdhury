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

        </main>
      </div>
    </>
  );
}