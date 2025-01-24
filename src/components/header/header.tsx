"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import styles from './header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    document.body.style.backgroundColor = '#FFFFFF';
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.backgroundColor = '';
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
  };

  return (
    <header style={{
      position: 'fixed',
      top: isScrolled ? '10px' : '0',
      width: isScrolled ? '80%' : '100%',
      height: '70px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 5%',
      backgroundColor: isScrolled ? '#F5F5F5' : 'rgba(255, 255, 255, 0.95)',
      borderRadius: isScrolled ? '16px' : '0',
      transition: 'all 0.3s ease',
      left: isScrolled ? '10%' : '0',
      color: '#000',
      zIndex: 1000,
      boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.05)' : 'none'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
        <div style={{
          fontSize: '24px',
          fontWeight: 'bold',
          backgroundColor: '#2B2B2B',
          color: 'white',
          width: '40px',
          height: '40px',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          JH
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start'
        }}>
          <span style={{
            fontSize: '16px',
            fontWeight: '600',
            letterSpacing: '0.5px'
          }}>
            Jyothi Hutagi
          </span>
          <span style={{
            fontSize: '13px',
            color: '#666',
            letterSpacing: '0.3px'
          }}>
            Full Stack Developer
          </span>
        </div>
      </div>

      <nav className={styles.nav}>
        <button 
          onClick={() => scrollToSection('home')}
          className={`${styles.navLink} ${activeSection === 'home' ? styles.active : ''}`}
        >
          Home
        </button>
        <button 
          onClick={() => scrollToSection('about')}
          className={`${styles.navLink} ${activeSection === 'about' ? styles.active : ''}`}
        >
          About
        </button>

        <button 
          onClick={() => scrollToSection('projects')}
          className={`${styles.navLink} ${activeSection === 'projects' ? styles.active : ''}`}
        >
          Projects
        </button>
  
        <button 
          onClick={() => scrollToSection('contact')}
          className={styles.talkButton}
        >
          Let's Talk
        </button>
      </nav>
    </header>
  );
}
