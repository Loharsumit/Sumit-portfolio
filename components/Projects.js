import styles from "./Projects.module.css";
import { featuredProjects, otherProjects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header fade-up">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A selection of projects that showcase my skills and passion for
            building great web experiences.
          </p>
        </div>

        {/* Featured Projects */}
        <div className={`${styles.featuredGrid} fade-up`}>
          {featuredProjects.map((project, i) => (
            <div
              key={i}
              className={`glass-card ${styles.card}`}
              style={{ "--card-color": project.color }}
            >
              <div className={styles.cardHeader} style={{ color: project.color }}>
                <div className={styles.cardHeaderBg}></div>
                <span className={styles.cardPeriod}>{project.period}</span>
                <h3 className={styles.cardTitle} style={{ color: "var(--text-primary)" }}>
                  {project.title}
                </h3>
                <p className={styles.cardSubtitle}>{project.subtitle}</p>
              </div>
              <div className={styles.cardBody}>
                <p className={styles.cardDesc}>{project.description}</p>
                <div className={styles.cardTech}>
                  {project.tech.map((t) => (
                    <span key={t} className={styles.techTag}>
                      {t}
                    </span>
                  ))}
                </div>
                <div className={styles.cardLinks}>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.cardLink}
                    >
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <h3 className={`${styles.otherTitle} fade-up`}>Other Noteworthy Projects</h3>
        <div className={`${styles.otherGrid} fade-up`}>
          {otherProjects.map((project, i) => (
            <div key={i} className={`glass-card ${styles.otherCard}`}>
              <div className={styles.otherCardIcon}>
                <i className="fas fa-folder-open"></i>
              </div>
              <h4 className={styles.otherCardTitle}>{project.title}</h4>
              <p className={styles.otherCardDesc}>{project.description}</p>
              <div className={styles.otherCardFooter}>
                <div className={styles.otherTech}>
                  {project.tech.map((t, j) => (
                    <span key={t} className={styles.otherTechTag}>
                      {t}
                      {j < project.tech.length - 1 ? " ·" : ""}
                    </span>
                  ))}
                </div>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cardLink}
                    style={{ fontSize: "0.85rem" }}
                  >
                    <i className="fas fa-external-link-alt"></i>
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
