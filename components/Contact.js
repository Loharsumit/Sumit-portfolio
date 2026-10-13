"use client";
import styles from "./Contact.module.css";
import { personalInfo, socialLinks } from "@/data/portfolio";
import { getGmailComposeUrl, openMail } from "@/utils/mail";

export default function Contact() {
  const handleMailClick = (e, subject = "Project Inquiry - Sumit Lohar") => {
    e.preventDefault();
    openMail(personalInfo.email, subject);
  };

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
            href={getGmailComposeUrl(
              personalInfo.email,
              "Getting in Touch - Sumit Lohar"
            )}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => handleMailClick(e, "Getting in Touch - Sumit Lohar")}
            className={`gradient-text ${styles.email}`}
            title="Click to compose email"
          >
            {personalInfo.email}
          </a>

          <div className={styles.metaRow}>
            <span className={styles.metaPill}>
              <i className="fas fa-location-dot"></i> {personalInfo.location}
            </span>
            <a href={`tel:${personalInfo.phone}`} className={styles.metaPill}>
              <i className="fas fa-phone"></i> {personalInfo.phone}
            </a>
          </div>

          <div className={styles.ctas}>
            <a
              href={getGmailComposeUrl(
                personalInfo.email,
                "Project Inquiry - Sumit Lohar"
              )}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => handleMailClick(e, "Project Inquiry - Sumit Lohar")}
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
              href={getGmailComposeUrl(
                personalInfo.email,
                "Hello Sumit - Portfolio Inquiry"
              )}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => handleMailClick(e, "Hello Sumit - Portfolio Inquiry")}
              className={styles.socialLink}
              aria-label="Email"
              title="Send an email"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
