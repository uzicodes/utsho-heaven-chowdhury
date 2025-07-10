import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="nav-item">Home</a>
        <a href="#" className="nav-item">About</a>
        <a href="#" className="nav-item">Projects</a>
        <a href="#" className="nav-item">Blog</a>
        <a href="#" className="nav-item">Contacts</a>
        <a href="#" className="nav-item cta">Book a Call</a>
      </div>
    </nav>
  );
};

export default Navbar; 