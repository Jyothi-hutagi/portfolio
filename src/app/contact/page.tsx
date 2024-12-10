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
              <a href="mailto:hello@smultron.pl" className={styles.contactLink}>
                hello@smultron.pl
              </a>
              <a href="tel:+48533097111" className={styles.contactLink}>
                +48 533 097 111
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
