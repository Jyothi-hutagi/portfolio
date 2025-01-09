"use client";

import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

import Link from "next/link";
import { SiHashnode } from 'react-icons/si';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left Section */}
        <div>
          <h2 className={styles.title}>
            JYOTHI HUTAGI
          </h2>
          <p className={styles.description}>
            A Frontend focused Web Developer building the Frontend of Websites and
            Web Applications that leads to the success of the overall product
          </p>
        </div>

        {/* Right Section */}
        <div>
          <h3 className={styles.socialTitle}>
            SOCIAL
          </h3>
          <div className={styles.socialLinks}>
            <Link href="https://www.linkedin.com/in/jyothi-hutagi-b45456191/" target="_blank" className={styles.socialLink}>
              <FaLinkedin size={24} />
            </Link>
            <Link href="https://github.com/Jyothi-hutagi" target="_blank" className={styles.socialLink}>
              <FaGithub size={24} />
            </Link>
       
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className={styles.copyright}>
        <p className={styles.copyrightText}>
          © Copyright 2025 . Made by{' '}
          <Link href="/" className={styles.copyrightLink}>
            Jyothi Hutagi
          </Link>
        </p>
      </div>
    </footer>
  );
}
