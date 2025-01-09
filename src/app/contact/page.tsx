import Link from 'next/link';
import styles from './page.module.css';

export default function Contact() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Let's talk</h1>

      <div className={styles.grid}>
        {/* Left Column - Contact Info */}
        <div>
          <div className={styles.infoCard}>
            <h2>
              Are you in need of an experienced programming team? Let's have a conversation.
            </h2>
            
            <div className={styles.contactLinks}>
              <a href="mailto:jyothihutagi@gmail.com" className={styles.contactLink}>
                jyothihutagi@gmail.com
              </a>
              <a href="tel:+9480488052" className={styles.contactLink}>
                +9480488052
              </a>
            </div>

            {/* Social Media Links */}
            <div className={styles.socialLinks}>
              <a 
                href="https://linkedin.com/your-profile" 
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
                href="https://github.com/your-username" 
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

          <div className={styles.companyInfo}>
            <h3>Smultron Web Development</h3>
            <p>12 Sławkowska Street</p>
            <p>31-014 Krakow, Poland</p>
            <p>TAX ID: PL6762482785</p>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className={styles.formSection}>
          <h2>Please fill in a form</h2>
          <form>
            <div className={styles.formGroup}>
              <label className={styles.label}>
                Your email address*
              </label>
              <input 
                type="email" 
                placeholder="Your email address"
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>
                Your message*
              </label>
              <textarea 
                placeholder="Tell us more - insert a link to your website and describe your project. (required)"
                className={styles.textarea}
              />
              <div className={styles.charLimit}>
                Max. 2500 characters
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.checkboxLabel}>
                <input type="checkbox" />
                <span>
                  I have read and accept{' '}
                  <Link href="/terms" className={styles.termsLink}>
                    The terms and conditions.
                  </Link>
                  *
                </span>
              </label>
            </div>

            <button type="submit" className={styles.submitButton}>
              Send →
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
