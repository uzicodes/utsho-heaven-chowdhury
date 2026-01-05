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
  // const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScrollProgress = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      if (windowHeight === 0) return;

      const scroll = (totalScroll / windowHeight) * 100;
      setScrollProgress(scroll);
    };

    window.addEventListener("scroll", handleScrollProgress);
    return () => window.removeEventListener("scroll", handleScrollProgress);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  return (
    <header className="navbar-header">
      <div className="navbar-wrapper">
        <div className="navbar-gradient-border">
          <nav className="navbar-content colus-font">
            {/* Mobile Menu Button */}
            <div className="navbar-mobile-header">
              <a href="#" className="navbar-logo">Utsho Heaven Chowdhury</a>
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
                    onClick={() => {
                      setIsMenuOpen(false);
                      setActiveLink(id);
                    }}
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