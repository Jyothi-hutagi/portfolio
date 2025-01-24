'use client';

import { useRef, useState } from 'react';

import emailjs from '@emailjs/browser';
import styles from './page.module.css';

export default function Contact() {

  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    message: string;
    isError: boolean;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        formRef.current,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      setSubmitStatus({
        message: 'Message sent successfully!',
        isError: false
      });
      
      // Reset form
      formRef.current.reset();
      
    } catch (error) {
      setSubmitStatus({
        message: 'Failed to send message. Please try again.',
        isError: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactContent}>
        <div className={styles.contactInfo}>
          <h1>Let's Work Together</h1>
          <p>
            I'm currently available for freelance work or full-time opportunities.
            If you have a project in mind, feel free to reach out!
          </p>
          
          <div className={styles.contactDetails}>
            <div className={styles.contactItem}>
              <div className={styles.iconWrapper}>
                <span>📧</span>
              </div>
              <div>
                <h3>Email</h3>
                <p>jyothihutagi@gmail.com</p>
              </div>
            </div>
            
            <div className={styles.contactItem}>
              <div className={styles.iconWrapper}>
                <span>📍</span>
              </div>
              <div>
                <h3>Location</h3>
                <p>Bangalore, India</p>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className={styles.socialLinks}>
            <a 
              href="https://www.linkedin.com/in/jyothi-hutagi-b45456191/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>

            <a 
              href="https://github.com/Jyothi-hutagi" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitHub"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
              </svg>
            </a>
          </div>
        </div>

        <div className={styles.contactForm}>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="user_name"
                  placeholder="Your name"
                  required 
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="user_email"
                  placeholder="Your email"
                  required 
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject"
                name="subject"
                placeholder="Subject"
                required 
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea 
                id="message"
                name="message"
                rows={4} 
                placeholder="Your message"
                required 
              />
            </div>

            <button 
              type="submit" 
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus && (
              <div className={`${styles.submitStatus} ${submitStatus.isError ? styles.error : styles.success}`}>
                {submitStatus.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
            