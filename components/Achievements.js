import styles from "./Achievements.module.css";
import { keyAchievements } from "@/data/portfolio";

export default function Achievements() {
  return (
    <section className="section" id="achievements">
      <div className="container">
        <div className="section-header fade-up">
          <span className="section-label">Proven Results</span>
          <h2 className="section-title">
            Key Impact &amp;{" "}
            <span className="gradient-text">Engineering Achievements</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Quantifiable value delivered across enterprise architectures, performance optimizations,
            and developer tooling.
          </p>
        </div>

        <div className={`${styles.grid} fade-up`}>
          {keyAchievements.map((item, idx) => (
            <div key={idx} className={`glass-card ${styles.card}`}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrap}>
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <span className={styles.metricBadge}>{item.metric}</span>
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
              <div className={styles.glowLine}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
