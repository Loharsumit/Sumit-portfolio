"use client";
import { useState } from "react";
import styles from "./Hero.module.css";
import { personalInfo, socialLinks } from "@/data/portfolio";

const techStack = [
  {
    name: "React.js",
    color: "#61dafb",
    icon: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" width="26" height="26">
        <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
        <g stroke="#61dafb" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: "Vue.js",
    color: "#41b883",
    icon: (
      <svg viewBox="0 0 261.76 226.69" width="24" height="24">
        <path d="M161.096.001l-30.225 52.351L100.647.001H0l130.871 226.688L261.749.001z" fill="#41b883" />
        <path d="M161.096.001l-30.225 52.351L100.647.001H52.346l78.526 136.01 78.526-136.01z" fill="#34495e" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    color: "#3178c6",
    icon: (
      <svg viewBox="0 0 128 128" width="24" height="24">
        <rect width="128" height="128" rx="16" fill="#3178c6" />
        <path fill="#ffffff" d="M68.5 76.5c-1.3 5.4-4.8 9.2-10.4 11.2-5.7 2-11.8 1.9-17.6-.2-5.4-2-9.4-5.8-12-11.2 3.1-1.9 6.2-3.8 9.3-5.7 1.7 3.3 4 5.5 7.1 6.5 3 .9 6 .6 8.7-.9 2.5-1.4 3.7-3.7 3.5-6.8-.2-2.9-1.9-5.1-5.1-6.5-2.7-1.2-5.6-2.1-8.5-3.1-4.7-1.6-8.9-3.8-12.4-7.2-3.3-3.2-4.9-7.3-4.7-12.1.2-5 2.2-9.2 6-12.5 3.9-3.4 8.7-5.1 14.2-5.2 6.1-.1 11.6 1.7 16.5 5.5-2.9 2-5.7 3.9-8.5 5.8-1.5-1.6-3.3-2.8-5.3-3.5-2.2-.8-4.6-1-7-.6-2.6.4-4.8 1.6-6.4 3.6-1.5 1.9-2.1 4.1-1.8 6.4.3 2.5 1.8 4.4 4.4 5.6 2.3 1.1 4.8 1.9 7.3 2.7 5.1 1.7 9.8 4 14 7.6 4.3 3.6 6.5 8.4 6.7 14.9zM102.7 31.4v68.3H88.5V31.4h-21V19.7h56.2v11.7h-21z" />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    color: "#f7df1e",
    icon: (
      <svg viewBox="0 0 630 630" width="24" height="24">
        <rect width="630" height="630" rx="80" fill="#f7df1e" />
        <path fill="#000000" d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-36.8 23.7c-9.7-17.3-22.4-24.1-47.4-24.1-21.1 0-33.8 11.4-33.8 26.2 0 17.8 11 25 36.4 36l14.8 6.35c50.3 21.6 78.7 44.4 78.7 91.8 0 52.4-41.4 82.5-98.1 82.5-54.6 0-89.2-26.7-104.9-57.5zm-180.6 6.35c0 38.9-22.4 65.1-60.5 65.1-34.7 0-54.6-17.8-64.7-36.4l34.7-20.3c6.8 11.4 14.8 18.2 29.6 18.2 13.5 0 22.8-5.5 22.8-26.6v-212.8h48.2v212.8z" />
      </svg>
    ),
  },
  {
    name: "Redux",
    color: "#764abc",
    icon: (
      <svg viewBox="0 0 100 100" width="24" height="24">
        <circle cx="50" cy="50" r="12" fill="#764abc" />
        <ellipse cx="50" cy="50" rx="42" ry="18" fill="none" stroke="#764abc" strokeWidth="6" transform="rotate(30 50 50)" />
        <ellipse cx="50" cy="50" rx="42" ry="18" fill="none" stroke="#764abc" strokeWidth="6" transform="rotate(90 50 50)" />
        <ellipse cx="50" cy="50" rx="42" ry="18" fill="none" stroke="#764abc" strokeWidth="6" transform="rotate(150 50 50)" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    color: "#38bdf8",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="#38bdf8">
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
      </svg>
    ),
  },
];

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className={styles.heroSection} id="home">
      {/* Dynamic Cyber Light Streaks & Beams matching the banner */}
      <div className={styles.beamContainer}>
        <div className={styles.laserBeamPrimary}></div>
        <div className={styles.laserBeamSecondary}></div>
        <div className={styles.ambientGlowOrange}></div>
        <div className={styles.ambientGlowTopRight}></div>
        <div className={styles.ambientGlowLeft}></div>
        <div className={styles.gridOverlay}></div>
      </div>

      <div className={styles.mainHeroWrapper}>
        {/* Left Side: Seamless Holographic Code Matrix with Sphere */}
        <div className={styles.leftVisualPanel}>
          <div className={styles.codeHologram}>
            <div className={styles.wireframeGlobe}>
              <svg viewBox="0 0 200 200" className={styles.globeSvg}>
                <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(255,140,40,0.12)" strokeWidth="1" strokeDasharray="4 4" />
                <ellipse cx="100" cy="100" rx="90" ry="36" fill="none" stroke="rgba(255,140,40,0.14)" strokeWidth="1" />
                <ellipse cx="100" cy="100" rx="90" ry="68" fill="none" stroke="rgba(255,140,40,0.12)" strokeWidth="1" />
                <ellipse cx="100" cy="100" rx="36" ry="90" fill="none" stroke="rgba(255,140,40,0.14)" strokeWidth="1" />
                <ellipse cx="100" cy="100" rx="68" ry="90" fill="none" stroke="rgba(255,140,40,0.12)" strokeWidth="1" />
                <line x1="10" y1="100" x2="190" y2="100" stroke="rgba(255,140,40,0.15)" strokeWidth="1" />
                <line x1="100" y1="10" x2="100" y2="190" stroke="rgba(255,140,40,0.15)" strokeWidth="1" />
              </svg>
            </div>
            <div className={styles.codeEditorSnippet}>
              <pre className={styles.codeLines}>
                <code>
                  <span className={styles.cComment}>// Scalable UI Architecture</span>{"\n"}
                  <span className={styles.cKeyword}>const</span> <span className={styles.cVar}>developer</span> = &#123;{"\n"}
                  {"  "}name: <span className={styles.cString}>&quot;Sumit Lohar&quot;</span>,{"\n"}
                  {"  "}role: <span className={styles.cString}>&quot;Frontend Dev&quot;</span>,{"\n"}
                  {"  "}stack: [<span className={styles.cString}>&quot;React&quot;</span>, <span className={styles.cString}>&quot;Vue&quot;</span>, <span className={styles.cString}>&quot;TS&quot;</span>],{"\n"}
                  {"  "}<span className={styles.cFunc}>buildExperience</span>() &#123;{"\n"}
                  {"    "}<span className={styles.cKeyword}>return</span> ({"\n"}
                  {"      "}&lt;<span className={styles.cTag}>ScalableUI</span>{"\n"}
                  {"        "}perf=<span className={styles.cString}>&quot;100%&quot;</span>{"\n"}
                  {"        "}responsive=&#123;<span className={styles.cBool}>true</span>&#125;{"\n"}
                  {"      "}/&gt;{"\n"}
                  {"    "});{"\n"}
                  {"  "}&#125;{"\n"}
                  &#125;;{"\n"}
                  <span className={styles.cKeyword}>const</span> <span className={styles.cVar}>result</span> = <span className={styles.cVar}>developer</span>.<span className={styles.cFunc}>buildExperience</span>();
                </code>
              </pre>
            </div>
          </div>
        </div>

        {/* Center: Main Banner Content */}
        <div className={styles.centerContent}>
          {/* Top Role Kicker matching banner */}
          <div className={styles.roleKicker}>
            <span className={styles.kickerLine}></span>
            <span className={styles.kickerDot}>◆</span>
            <span className={styles.kickerText}>FRONTEND DEVELOPER</span>
            <span className={styles.kickerDot}>◆</span>
            <span className={styles.kickerLine}></span>
          </div>

          {/* Headline matching banner */}
          <h1 className={styles.heroTitle}>
            <span className={styles.headlineLine1}>
              BUILDING <span className={styles.gradientScalable}>SCALABLE</span>
            </span>
            <br />
            <span className={styles.experiencesText}>WEB EXPERIENCES</span>
          </h1>

          {/* Pillars Sub-tagline */}
          <div className={styles.subTagline}>
            <span>Clean Code</span>
            <span className={styles.dotSeparator}>•</span>
            <span>Responsive UI</span>
            <span className={styles.dotSeparator}>•</span>
            <span>API Integration</span>
            <span className={styles.dotSeparator}>•</span>
            <span>Performance</span>
          </div>

          {/* Tech Stack Icons Row matching the banner */}
          <div className={styles.techPillsRow}>
            {techStack.map((tech) => (
              <div key={tech.name} className={styles.techPill}>
                <div className={styles.techIconWrap}>{tech.icon}</div>
                <span className={styles.techName}>{tech.name}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className={styles.heroCtas}>
            <a href="#projects" className="btn btn-primary">
              <i className="fas fa-rocket"></i> View Featured Work
            </a>
            <a href="#contact" className="btn btn-outline">
              <i className="fas fa-envelope"></i> Get In Touch
            </a>
          </div>
        </div>

        {/* Right Side: 3D Laptop with glowing IDE, floating badges, light rays, plant */}
        <div className={styles.rightVisualPanel}>
          <div className={styles.laptopContainer}>
            {/* Floating Glassmorphic Badges */}
            <div className={`${styles.floatingBadge} ${styles.badgeCode}`}>
              <span>&lt;/&gt;</span>
            </div>
            <div className={`${styles.floatingBadge} ${styles.badgeBrackets}`}>
              <span>&#123;&#125;</span>
            </div>

            {/* 3D Laptop Mockup */}
            <div className={styles.laptop}>
              <div className={styles.laptopScreen}>
                <div className={styles.screenBezel}>
                  <div className={styles.webcam}></div>
                  <div className={styles.ideWindow}>
                    <div className={styles.ideHeader}>
                      <span className={styles.dotRed}></span>
                      <span className={styles.dotYellow}></span>
                      <span className={styles.dotGreen}></span>
                      <span className={styles.ideTab}>App.tsx</span>
                    </div>
                    <div className={styles.ideBody}>
                      <div className={styles.ideLine}><span className={styles.syn1}>import</span> React <span className={styles.syn1}>from</span> &apos;react&apos;;</div>
                      <div className={styles.ideLine}><span className={styles.syn1}>export function</span> <span className={styles.syn2}>Experience</span>() &#123;</div>
                      <div className={styles.ideLine}>  <span className={styles.syn1}>return</span> (</div>
                      <div className={styles.ideLine}>    &lt;<span className={styles.syn3}>Header</span> title=&quot;<span className={styles.syn4}>Fast &amp; Scalable</span>&quot;&gt;</div>
                      <div className={styles.ideLine}>      &lt;<span className={styles.syn3}>ModernStack</span> active /&gt;</div>
                      <div className={styles.ideLine}>    &lt;/<span className={styles.syn3}>Header</span>&gt;</div>
                      <div className={styles.ideLine}>  );</div>
                      <div className={styles.ideLine}>&#125;</div>
                      <div className={styles.cursorBlink}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.laptopBase}>
                <div className={styles.laptopNotch}></div>
              </div>
            </div>

            {/* Desk Plant Accent */}
            <div className={styles.deskPlant} title="Developer Setup">
              <div className={styles.plantPot}>
                <div className={styles.leaf1}></div>
                <div className={styles.leaf2}></div>
                <div className={styles.leaf3}></div>
                <div className={styles.leaf4}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Contact & Quick Info Strip (Exact match to banner footer) */}
      <div className={styles.bottomContactStrip}>
        <div className={styles.stripInner}>
          <div className={styles.stripItem}>
            <i className={`fas fa-map-marker-alt ${styles.stripIcon}`}></i>
            <span>{personalInfo.location}</span>
          </div>

          <span className={styles.stripDivider}>|</span>

          <a
            href={`mailto:${personalInfo.email}`}
            onClick={copyEmail}
            className={`${styles.stripItem} ${styles.stripLink}`}
            title="Click to copy email"
          >
            <i className={`fas fa-envelope ${styles.stripIcon}`}></i>
            <span>{personalInfo.email}</span>
            {copied && <span className={styles.copiedBadge}>Copied!</span>}
          </a>

          <span className={styles.stripDivider}>|</span>

          <a
            href="tel:+918197588688"
            className={`${styles.stripItem} ${styles.stripLink}`}
          >
            <i className={`fas fa-phone-alt ${styles.stripIcon}`}></i>
            <span>+91 8197588688</span>
          </a>

          <span className={styles.stripDivider}>|</span>

          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.stripItem} ${styles.stripLink}`}
          >
            <i className={`fab fa-github ${styles.stripIcon}`}></i>
            <span>github.com/Loharsumit</span>
          </a>

          <span className={styles.stripDivider}>|</span>

          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.stripItem} ${styles.stripLink}`}
          >
            <i className={`fab fa-linkedin ${styles.stripIcon}`}></i>
            <span>linkedin.com/in/sumit-lohar-6844a917a</span>
          </a>
        </div>
      </div>
    </section>
  );
}
