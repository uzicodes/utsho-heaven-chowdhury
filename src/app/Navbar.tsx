"use client";


import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
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

const Navbar = () => {
  // const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  
  // Determine active link based on current pathname
  /*
  const getActiveLink = () => {
    if (pathname === '/') return 'home';
    if (pathname === '/skills') return 'skills';
    if (pathname === '/projects') return 'project';
    if (pathname === '/education') return 'education';
    if (pathname === '/contacts') return 'contacts';
    return 'home';
  };
  
  const activeLink = getActiveLink();
  */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { id: "home", icon: FaHome, text: "Home", href: "#home" },
  { id: "skills", icon: FaCode, text: "Skills", href: "#skills" },
  { id: "project", icon: FaLaptopCode, text: "Projects", href: "#projects" },
  { id: "education", icon: FaGraduationCap, text: "Education", href: "#education" },
  { id: "contacts", icon: FaEnvelope, text: "Contacts", href: "#contacts" },
  ];

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
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar; 