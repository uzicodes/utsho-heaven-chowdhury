"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  FaHome,
  FaLaptopCode,
  FaGraduationCap,
  FaCode,
  FaEnvelope,
  FaBars,
} from "react-icons/fa";
import './Navbar.css';

const navLinks = [
  { id: "home", icon: FaHome, text: "Home", href: "#home" },
  { id: "skills", icon: FaCode, text: "Skills", href: "#skills" },
  { id: "projects", icon: FaLaptopCode, text: "Projects", href: "#projects" },
  { id: "education", icon: FaGraduationCap, text: "Education", href: "#education" },
  { id: "contacts", icon: FaEnvelope, text: "Contacts", href: "#contacts" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  // 1. Progress Bar Logic (Restored)
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

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 2. Mobile Menu Resize Logic
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 3. Active Link Highlighter (Scroll Spy)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300; // Offset to trigger earlier

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 4. Smooth Scroll Handler (Clean URL version)
  const handleScrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault(); // STOP the URL from changing
    setIsMenuOpen(false);
    setActiveLink(id);

    if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        const element = document.getElementById(id);
        if (element) {
            // Calculate offset for fixed navbar (approx 80px)
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
          <nav className="navbar-content colus-font">
            
            {/* Mobile Header */}
            <div className="navbar-mobile-header">
              <a 
                href="#" 
                onClick={(e) => handleScrollTo(e, 'home')} 
                className="navbar-logo"
              >
                Utsho Heaven Chowdhury
              </a>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="navbar-menu-button"
              >
                <FaBars />
              </button>
            </div>

            {/* Navigation Links */}
            <div className={`navbar-links ${isMenuOpen ? 'navbar-links-open' : ''}`}>
              <div className="navbar-links-container">
                {navLinks.map(({ id, icon: Icon, text, href }) => (
                  <Link
                    key={id}
                    href={href}
                    onClick={(e) => handleScrollTo(e, id)}
                  >
                    <div className={`navbar-link ${activeLink === id ? 'navbar-link-active' : ''}`}>
                      <Icon
                        className={`navbar-link-icon ${
                          activeLink === id ? "navbar-link-icon-active" : ""
                        }`}
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