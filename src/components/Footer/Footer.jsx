import styles from "./Footer.module.css";

import {
  FiGithub,
  FiLinkedin,
  FiArrowUp,
} from "react-icons/fi";

export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={styles.footer}>

      <div className={styles.wrapper}>

        {/* LEFT */}
        <div className={styles.left}>

          <h3 className={styles.brand}>
            Archit Patle
          </h3>

          <p className={styles.text}>
            Frontend developer crafting modern,
            scalable and immersive web experiences.
          </p>

        </div>

        {/* CENTER */}
        <div className={styles.center}>

          <p>
            © {new Date().getFullYear()} All rights reserved
          </p>

        </div>

        {/* RIGHT */}
        <div className={styles.right}>

          <a
            href="https://www.linkedin.com/in/archit-patle"
            target="_blank"
            rel="noreferrer"
            className={styles.iconBtn}
          >
            <FiLinkedin />
          </a>

          <a
            href="https://github.com/architpatle"
            target="_blank"
            rel="noreferrer"
            className={styles.iconBtn}
          >
            <FiGithub />
          </a>

          <button
            onClick={scrollToTop}
            className={styles.topBtn}
          >
            <FiArrowUp />
          </button>

        </div>

      </div>

    </footer>
  );
}