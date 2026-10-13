import styles from "./Experience.module.css";
import { experience, education, certifications } from "@/data/portfolio";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-header fade-up">
          <span className="section-label">Work History &amp; Education</span>
          <h2 className="section-title">
            Professional Experience &amp;{" "}
            <span className="gradient-text">Milestones</span>
          </h2>
        </div>

        <div className={`${styles.timeline} fade-up`}>
          {/* Work Experience */}
          <div className={styles.dividerLabel}>
            <i className="fas fa-briefcase"></i> Work Experience
          </div>

          {experience.map((job, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.dot}></div>
              <div className={styles.itemMeta}>
                <span className={styles.date}>{job.period}</span>
                {job.duration && (
                  <span className={styles.durationBadge}>{job.duration}</span>
                )}
                <span className={styles.typeBadge}>{job.employmentType}</span>
              </div>

              <div className={`glass-card ${styles.card}`}>
                <div className={styles.cardHeader}>
                  <div>
                    <h3 className={styles.cardTitle}>{job.title}</h3>
                    <p className={styles.cardCompany}>
                      <i className="fas fa-building"></i> <strong>{job.company}</strong>
                      <span className={styles.location}>
                        <i className="fas fa-map-pin"></i> {job.location}
                      </span>
                    </p>
                  </div>
                </div>

                {job.projectFocus && (
                  <div className={styles.projectFocusBadge}>
                    <i className="fas fa-folder-open"></i>
                    <span>Key Project: <strong>{job.projectFocus}</strong></span>
                  </div>
                )}

                {job.bullets && job.bullets.length > 0 && (
                  <ul className={styles.bulletList}>
                    {job.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className={styles.bulletItem}>
                        <i className="fas fa-check-circle"></i>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

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
          <div className={styles.dividerLabel}>
            <i className="fas fa-graduation-cap"></i> Education
          </div>
          {education.map((edu, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.dot}></div>
              <div className={styles.itemMeta}>
                <span className={styles.date}>{edu.period}</span>
                <span className={styles.typeBadge}>{edu.type}</span>
              </div>
              <div className={`glass-card ${styles.card}`}>
                <h3 className={styles.cardTitle}>{edu.degree}</h3>
                <p className={styles.cardCompany}>
                  <i className="fas fa-university"></i> {edu.institution}
                  <span className={styles.location}>
                    <i className="fas fa-map-pin"></i> {edu.location}
                  </span>
                </p>
              </div>
            </div>
          ))}

          {/* Certifications */}
          <div className={styles.dividerLabel}>
            <i className="fas fa-award"></i> Professional Certifications
          </div>
          <div className={styles.certsGrid}>
            {certifications.map((cert, i) => (
              <div key={i} className={`glass-card ${styles.certCard}`}>
                <div className={styles.certIcon}>
                  <i className="fas fa-certificate"></i>
                </div>
                <div className={styles.certContent}>
                  <span className={styles.certIssuer}>{cert.issuer}</span>
                  <h4 className={styles.certTitle}>{cert.title}</h4>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.certLink}
                    >
                      <span>Verify Certificate</span>
                      <i className="fas fa-arrow-up-right-from-square"></i>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

