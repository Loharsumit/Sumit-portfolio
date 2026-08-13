import styles from "./Experience.module.css";
import { experience, education, certifications } from "@/data/portfolio";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-header fade-up">
          <span className="section-label">Journey</span>
          <h2 className="section-title">
            Experience &amp;{" "}
            <span className="gradient-text">Education</span>
          </h2>
        </div>

        <div className={`${styles.timeline} fade-up`}>
          {/* Work Experience */}
          {experience.map((job, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.dot}></div>
              <span className={styles.date}>{job.period}</span>
              <div className={`glass-card ${styles.card}`}>
                <h3 className={styles.cardTitle}>{job.title}</h3>
                <p className={styles.cardCompany}>
                  <i className="fas fa-building"></i> {job.company}
                </p>
                <p className={styles.cardDesc}>{job.description}</p>
                {job.tags && (
                  <div className={styles.tags}>
                    {job.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Education */}
          <div className={styles.dividerLabel}>Education</div>
          {education.map((edu, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.dot}></div>
              <span className={styles.date}>{edu.period}</span>
              <div className={`glass-card ${styles.card}`}>
                <h3 className={styles.cardTitle}>{edu.degree}</h3>
                <p className={styles.cardCompany}>
                  <i className="fas fa-university"></i> {edu.institution}
                </p>
              </div>
            </div>
          ))}

          {/* Certifications */}
          <div className={styles.dividerLabel}>Certifications</div>
          {certifications.map((cert, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.dot}></div>
              <span className={styles.date}>{cert.issuer}</span>
              <div className={`glass-card ${styles.card}`}>
                <h3 className={styles.cardTitle} style={{ fontSize: "1.1rem" }}>
                  {cert.title}
                </h3>
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "var(--accent-1)",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                    }}
                  >
                    <i className="fas fa-external-link-alt"></i> View Certificate
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
