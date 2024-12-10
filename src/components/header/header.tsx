"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

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
      width: isScrolled ? '60%' : '100%',
      height: '100px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0 10%',
      backgroundColor: isScrolled ? '#F5F5F5' : 'transparent',
      borderRadius: isScrolled ? '10px' : '0',
      transition: 'all 0.3s ease',
      left: isScrolled ? '20%' : '0',
      color: '#000'
    }}>
      <nav style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
