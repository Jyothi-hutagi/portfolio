"use client";

import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Column 1 - Our case studies */}
        <div className={styles.footerColumn}>
          <h3>Our case studies</h3>
          <ul>
            <li><Link href="/case-studies/educational-platform">Educational platform</Link></li>
            <li><Link href="/case-studies/solar-energy">Online platform for solar energy companies</Link></li>
            <li><Link href="/case-studies/corporate-website">New corporate website</Link></li>
            <li><Link href="/case-studies/student-portal">Portal for students with disabilities</Link></li>
            <li><Link href="/case-studies/ecommerce">E-commerce application</Link></li>
          </ul>
        </div>

        {/* Column 2 - Our services */}
        <div className={styles.footerColumn}>
          <h3>Our services</h3>
          <ul>
            <li><Link href="/services/frontend">Frontend development</Link></li>
            <li><Link href="/services/wordpress">WordPress development</Link></li>
            <li><Link href="/services/web-design">Web design</Link></li>
            <li><Link href="/services/web-applications">Web applications</Link></li>
            <li><Link href="/services/woocommerce">WooCommerce</Link></li>
            <li><Link href="/services/support">WordPress support</Link></li>
          </ul>
        </div>

        {/* Column 3 - Company */}
        <div className={styles.footerColumn}>
          <h3>Company</h3>
          <ul>
            <li><Link href="/case-studies">Case studies</Link></li>
            <li><Link href="/technologies">Technologies</Link></li>
            <li><Link href="/clients">Clients</Link></li>
            <li><Link href="/contact">Let's talk</Link></li>
            <li><Link href="/team">Our team</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Column 4 - Blog */}
        <div className={styles.footerColumn}>
          <h3>Blog</h3>
          <ul>
            <li><Link href="/blog/cms-comparison">Craft CMS vs. WordPress: Selecting the Right Platform</Link></li>
            <li><Link href="/blog/igaming">Source: Transforming iGaming Communication</Link></li>
            <li><Link href="/blog/gutenberg">Gutenberg vs Page Builders</Link></li>
            <li><Link href="/blog/wcag">The implementation of WCAG 2.1</Link></li>
            <li><Link href="/blog/multisite">What is WordPress multisite and how it works</Link></li>
            <li><Link href="/blog/google-maps">Embed and customize Google Maps</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <p>© 2024 - All rights reserved</p>
        <div className={styles.socialLinks}>
          <Link href="https://facebook.com" aria-label="Facebook">
            <i className="fab fa-facebook"></i>
          </Link>
          <Link href="https://linkedin.com" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </Link>
          <Link href="https://instagram.com" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
}
