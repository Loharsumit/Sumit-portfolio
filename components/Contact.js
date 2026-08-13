import styles from "./Contact.module.css";
import { personalInfo, socialLinks } from "@/data/portfolio";

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className={`${styles.wrapper} fade-up`}>
          <div className={styles.icon}>🚀</div>
          <h2 className={styles.title}>
            Let&apos;s work <span className="gradient-text">together</span>
          </h2>
          <p className={styles.desc}>
            I&apos;m currently open to new opportunities. Whether you have a
            project in mind, a question, or just want to say hi — my inbox is
            always open!
          </p>

          <a
            href={`mailto:${personalInfo.email}`}
            className={`gradient-text ${styles.email}`}
          >
            {personalInfo.email}
          </a>

          <div className={styles.ctas}>
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn btn-primary"
            >
              <i className="fas fa-paper-plane"></i> Send a Mail
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <i className="fab fa-linkedin-in"></i> LinkedIn
            </a>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.socials}>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href={socialLinks.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Portfolio"
            >
              <i className="fas fa-globe"></i>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className={styles.socialLink}
              aria-label="Email"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
