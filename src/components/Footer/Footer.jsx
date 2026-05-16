import styles from "./Footer.module.css";

import {
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {

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

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=architpatle06@gmail.com"
            target="_blank"
            rel="noreferrer"
            className={styles.email}
          >
            <FiMail />
            <span>architpatle06@gmail.com</span>
          </a>

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

          <a
            href="https://wa.me/918999186683"
            target="_blank"
            rel="noreferrer"
            className={styles.topBtn}
          >
            <FaWhatsapp />
          </a>

        </div>

      </div>

    </footer>
  );
}