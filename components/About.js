import styles from "./About.module.css";
import { personalInfo, coreCompetencies } from "@/data/portfolio";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header fade-up">
          <span className="section-label">Professional Background</span>
          <h2 className="section-title">
            Engineering scalable web apps with{" "}
            <span className="gradient-text">precision &amp; speed</span>
          </h2>
        </div>

        <div className={`${styles.grid} fade-up`}>
          <div className={styles.text}>
            <p className={styles.lead}>
              I&apos;m a Frontend Developer with <strong>3+ years of experience</strong> crafting
              high-performance, accessible, and scalable web applications using{" "}
              <span className={styles.highlight}>React.js</span> and{" "}
              <span className={styles.highlight}>modern JavaScript (ES6+)</span>.
            </p>
            <p>
              My expertise spans building reusable component systems, seamless RESTful API integration,
              performance tuning (lazy loading, re-render reduction), and rapid prototyping. I actively leverage
              cutting-edge AI-assisted engineering tools like <strong>Claude</strong>, <strong>Cursor</strong>,
              and <strong>GitHub Copilot</strong> to deliver clean, production-grade code faster.
            </p>

            <div className={styles.competenciesBox}>
              <h4 className={styles.competenciesTitle}>
                <i className="fas fa-check-double"></i> Core Competencies
              </h4>
              <div className={styles.competenciesGrid}>
                {coreCompetencies.map((comp) => (
                  <span key={comp} className={styles.competencyBadge}>
                    <i className="fas fa-circle-check"></i> {comp}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.stats}>
              <div className={`glass-card ${styles.statCard}`}>
                <span className={`gradient-text ${styles.statNumber}`}>3+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
              <div className={`glass-card ${styles.statCard}`}>
                <span className={`gradient-text ${styles.statNumber}`}>2</span>
                <span className={styles.statLabel}>Tech Companies</span>
              </div>
              <div className={`glass-card ${styles.statCard}`}>
                <span className={`gradient-text ${styles.statNumber}`}>10+</span>
                <span className={styles.statLabel}>Apps &amp; Modules</span>
              </div>
              <div className={`glass-card ${styles.statCard}`}>
                <span className={`gradient-text ${styles.statNumber}`}>4</span>
                <span className={styles.statLabel}>Certifications</span>
              </div>
            </div>
          </div>

          <div className={styles.visual}>
            <div className={`glass-card ${styles.infoCard}`}>
              <div className={styles.infoIcon}>
                <i className="fas fa-briefcase"></i>
              </div>
              <div className={styles.infoContent}>
                <div className={styles.cardHeaderRow}>
                  <h4>Current Role</h4>
                  <span className={styles.statusBadge}>Active</span>
                </div>
                <p className={styles.infoRole}>Frontend Developer</p>
                <p className={styles.infoSub}>Greynium Information Technologies &bull; Jul 2025 – Present</p>
              </div>
            </div>

            <div className={`glass-card ${styles.infoCard}`}>
              <div className={styles.infoIcon}>
                <i className="fas fa-history"></i>
              </div>
              <div className={styles.infoContent}>
                <div className={styles.cardHeaderRow}>
                  <h4>Previous Experience</h4>
                  <span className={styles.periodBadge}>2.5 Years</span>
                </div>
                <p className={styles.infoRole}>Frontend Developer</p>
                <p className={styles.infoSub}>Hola9 Classifieds India Pvt. Ltd. &bull; Feb 2023 – Jul 2025</p>
              </div>
            </div>

            <div className={`glass-card ${styles.infoCard}`}>
              <div className={styles.infoIcon}>
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div className={styles.infoContent}>
                <div className={styles.cardHeaderRow}>
                  <h4>Education</h4>
                  <span className={styles.periodBadge}>2022</span>
                </div>
                <p className={styles.infoRole}>Bachelor of Engineering (BE)</p>
                <p className={styles.infoSub}>Jain College of Engineering, Belagavi</p>
              </div>
            </div>

            <div className={`glass-card ${styles.infoCard}`}>
              <div className={styles.infoIcon}>
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className={styles.infoContent}>
                <div className={styles.cardHeaderRow}>
                  <h4>Location &amp; Work Mode</h4>
                </div>
                <p className={styles.infoRole}>{personalInfo.location}</p>
                <p className={styles.infoSub}>Open to On-Site / Hybrid / Remote Roles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

