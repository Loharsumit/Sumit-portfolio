import styles from "./About.module.css";
import { personalInfo } from "@/data/portfolio";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header fade-up">
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            Turning ideas into{" "}
            <span className="gradient-text">digital reality</span>
          </h2>
        </div>

        <div className={`${styles.grid} fade-up`}>
          <div className={styles.text}>
            <p>{personalInfo.summary}</p>
            <p>
              I specialize in{" "}
              <span className={styles.highlight}>React.js</span>,{" "}
              <span className={styles.highlight}>Vue.js</span>, and modern
              frontend architectures — focusing on performance, accessibility,
              and clean, maintainable code.
            </p>

            <div className={styles.stats}>
              <div className={`glass-card ${styles.statCard}`}>
                <span className={`gradient-text ${styles.statNumber}`}>3+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
              <div className={`glass-card ${styles.statCard}`}>
                <span className={`gradient-text ${styles.statNumber}`}>10+</span>
                <span className={styles.statLabel}>Projects Built</span>
              </div>
              <div className={`glass-card ${styles.statCard}`}>
                <span className={`gradient-text ${styles.statNumber}`}>4</span>
                <span className={styles.statLabel}>Certifications</span>
              </div>
              <div className={`glass-card ${styles.statCard}`}>
                <span className={`gradient-text ${styles.statNumber}`}>15+</span>
                <span className={styles.statLabel}>Technologies</span>
              </div>
            </div>
          </div>

          <div className={styles.visual}>
            <div className={`glass-card ${styles.infoCard}`}>
              <div className={styles.infoIcon}>
                <i className="fas fa-briefcase"></i>
              </div>
              <div className={styles.infoContent}>
                <h4>Currently Working</h4>
                <p>Software Developer @ Greynium Info Tech</p>
              </div>
            </div>
            <div className={`glass-card ${styles.infoCard}`}>
              <div className={styles.infoIcon}>
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className={styles.infoContent}>
                <h4>Location</h4>
                <p>{personalInfo.location}</p>
              </div>
            </div>
            <div className={`glass-card ${styles.infoCard}`}>
              <div className={styles.infoIcon}>
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div className={styles.infoContent}>
                <h4>Education</h4>
                <p>B.Tech CSE — VTU (2018–2022)</p>
              </div>
            </div>
            <div className={`glass-card ${styles.infoCard}`}>
              <div className={styles.infoIcon}>
                <i className="fas fa-clock"></i>
              </div>
              <div className={styles.infoContent}>
                <h4>Availability</h4>
                <p>15 days or less notice period</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
