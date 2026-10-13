"use client";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { personalInfo } from "@/data/portfolio";
import { getGmailComposeUrl, openMail } from "@/utils/mail";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleHireClick = (e) => {
    e.preventDefault();
    setMobileOpen(false);
    openMail(personalInfo.email, "Opportunity / Hiring Inquiry - Sumit Lohar");
  };

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.navInner}>
          <div className={styles.logo}>
            Sumit<span className={styles.logoAccent}>.</span>
          </div>
          <ul className={styles.navLinks}>
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={styles.navLink}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={getGmailComposeUrl(
                  personalInfo.email,
                  "Opportunity / Hiring Inquiry - Sumit Lohar"
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleHireClick}
                className={`btn btn-primary ${styles.navCta}`}
              >
                Hire Me
              </a>
            </li>
          </ul>
          <button
            className={styles.hamburger}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.open : ""}`}>
        <button
          className={styles.closeBtn}
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={styles.mobileLink}
            onClick={(e) => handleNavClick(e, item.href)}
          >
            {item.label}
          </a>
        ))}
        <a
          href={getGmailComposeUrl(
            personalInfo.email,
            "Opportunity / Hiring Inquiry - Sumit Lohar"
          )}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleHireClick}
          className="btn btn-primary"
          style={{ marginTop: "1rem", padding: "0.8rem 2.2rem" }}
        >
          Hire Me
        </a>
      </div>
    </>
  );
}
