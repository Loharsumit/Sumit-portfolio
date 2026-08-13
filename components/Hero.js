import styles from "./Hero.module.css";
import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      {/* Background effects */}
      <div className={styles.gridBg}></div>
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>
      <div className={styles.blob3}></div>

      <div className={styles.heroContent}>
        <span className={styles.greeting}>👋 Welcome to my portfolio</span>
        <h1 className={styles.title}>
          Hi, I&apos;m{" "}
          <span className="gradient-text">{personalInfo.name}</span>
        </h1>
        <h2 className={styles.subtitle}>{personalInfo.title}</h2>
        <p className={styles.description}>
          {personalInfo.experience} years of experience crafting scalable,
          pixel-perfect web applications with React.js, Vue.js &amp; modern
          JavaScript.
        </p>
        <div className={styles.ctas}>
          <a href="#projects" className="btn btn-primary">
            <i className="fas fa-rocket"></i> View My Work
          </a>
          <a href="#contact" className="btn btn-outline">
            <i className="fas fa-envelope"></i> Get In Touch
          </a>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span>Scroll</span>
        <div className={styles.scrollLine}></div>
      </div>
    </section>
  );
}
