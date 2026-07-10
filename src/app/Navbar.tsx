"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  FaHome,
  FaLaptopCode,
  FaGraduationCap,
  FaCode,
  FaEnvelope,
} from "react-icons/fa";
import './Navbar.css';

const navLinks = [
  { id: "home", icon: FaHome, text: "HOME", href: "#home" },
  { id: "skills", icon: FaCode, text: "SKILLS", href: "#skills" },
  { id: "projects", icon: FaLaptopCode, text: "PROJECTS", href: "#projects" },
  { id: "education", icon: FaGraduationCap, text: "EDUCATION", href: "#education" },
  { id: "contacts", icon: FaEnvelope, text: "CONTACTS", href: "#contacts" },
];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Progress Bar 
  useEffect(() => {
    let ticking = false;

    const handleScrollProgress = () => {
      const totalScroll = window.scrollY;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      if (windowHeight === 0) return;

      const scroll = (totalScroll / windowHeight) * 100;
      setScrollProgress(scroll);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(handleScrollProgress);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active Link Highlighter 
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300;

      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveLink(link.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth Scroll Handler 
  const handleScrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault(); // STOP the URL from changing
    setActiveLink(id);

    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        // Calculate offset for fixed navbar 
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <header className="navbar-header">
      <div className="navbar-wrapper">
        <div className="navbar-gradient-border">
          <nav className="navbar-content" style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}>

            {/* Navigation Links */}
            <div className="navbar-links">
              <div className="navbar-links-container">
                {navLinks.map(({ id, icon: Icon, text, href }) => (
                  <Link
                    key={id}
                    href={href}
                    onClick={(e) => handleScrollTo(e, id)}
                    title={text}
                  >
                    <div className={`navbar-link ${activeLink === id ? 'navbar-link-active' : ''}`}>
                      <Icon
                        className={`navbar-link-icon ${activeLink === id ? "navbar-link-icon-active" : ""}`}
                      />
                      <span className="navbar-link-text">{text}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Scroll Progress Bar */}
            <div className="navbar-progress-container">
              <div
                className="navbar-progress-bar"
                style={{ width: `${scrollProgress}%` }}
              />
            </div>

          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;