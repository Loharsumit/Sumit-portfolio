import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <span>
          Designed &amp; built by{" "}
          <a href="#home" className={styles.footerLink}>
            Sumit Lohar
          </a>
        </span>
        <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
      </div>
    </footer>
  );
}
