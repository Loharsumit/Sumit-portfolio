import styles from "./Skills.module.css";
import { skills } from "@/data/portfolio";
import TechIcon from "./TechIcon";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header fade-up">
          <span className="section-label">Skills</span>
          <h2 className="section-title">
            My <span className="gradient-text">tech stack</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>

        <div className={`${styles.grid} fade-up`}>
          {skills.map((category) => (
            <div key={category.category} className={`glass-card ${styles.category}`}>
              <h3 className={styles.categoryTitle}>
                {category.category}
                <span className={styles.categoryLine}></span>
              </h3>
              <div className={styles.skillList}>
                {category.items.map((skill) => (
                  <div key={skill.name} className={styles.skillItem}>
                    <span className={styles.skillIcon}>
                      <TechIcon name={skill.name} size={22} />
                    </span>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillName}>{skill.name}</div>
                      <div className={styles.skillExp}>{skill.experience}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
