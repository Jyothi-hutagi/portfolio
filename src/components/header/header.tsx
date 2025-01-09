"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import styles from './header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = '#FFFFFF';
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.backgroundColor = '';
    };
  }, []);

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

      <nav style={{
        display: 'flex',
        gap: '32px',
        alignItems: 'center'
      }}>
        {[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
          { href: "/projects", label: "Projects" },
          { href: "/contact", label: "Contact" }
        ].map((link) => (
          <Link 
            key={link.href} 
            href={link.href}
            className={styles.navLink}
          >
            {link.label}
          </Link>
        ))}
        <Link 
          href="/contact"
          className={styles.talkButton}
        >
          Let's Talk
        </Link>
      </nav>
    </header>
  );
}
