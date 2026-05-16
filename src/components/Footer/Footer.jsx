import styles from "./Footer.module.css";

import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
} from "react-icons/fi";

import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.wrapper}>

        {/* TOP */}
        <div className={styles.top}>

          {/* COLUMN 1 */}
          <div className={styles.column}>

            <h3 className={styles.brand}>
              Archit Patle
            </h3>

            <p className={styles.text}>
              Frontend developer crafting modern,
              scalable and immersive web experiences.
            </p>

          </div>

          {/* COLUMN 2 */}
          <div className={styles.column}>

            <h4 className={styles.label}>
              Contact
            </h4>

            <a
              href="mailto:architpatle06@gmail.com"
              target="_blank"
              rel="noreferrer"
              className={styles.contactItem}
            >
              <FiMail />
              <span>architpatle06@gmail.com</span>
            </a>

            <a
              href="https://wa.me/918999186683"
              target="_blank"
              rel="noreferrer"
              className={styles.contactItem}
            >
              <FiPhone />
              <span>+91 89991 86683</span>
            </a>

          </div>

          {/* COLUMN 3 */}
          <div className={styles.column}>

            <h4 className={styles.label}>
              Socials
            </h4>

            <div className={styles.socials}>

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
                className={styles.iconBtn}
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className={styles.bottom}>

          <p>
            © {new Date().getFullYear()} Archit Patle. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}