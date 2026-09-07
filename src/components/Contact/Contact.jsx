import Container from "../common/Container";
import styles from "./Contact.module.css";

import {
  FiArrowUpRight,
  FiMail,
  FiLinkedin,
} from "react-icons/fi";

export default function Contact() {
  return (
    <section
      id="contact"
      className={`relative z-10 py-14 md:py-18 ${styles.contact}`}
    >
      <Container>

        <div className={styles.wrapper}>

          {/* GLOW */}
          <div className={styles.glow}></div>

          {/* EYEBROW */}
          <div className={styles.eyebrow}>
            <span className={styles.dot}></span>
            Contact
          </div>

          {/* HEADING */}
          <h2 className={`text-3xl sm:text-4xl md:text-5xl ${styles.heading}`}>
            Let’s create something{" "}
            <span>impactful</span> together 
          </h2>

          {/* SUBTEXT */}
          <p className={styles.description}>
            Whether you have an idea to explore, a project to build, an opportunity to collaborate, or simply want to talk about design and technology, I’m always open to connecting.
          </p>

          {/* ACTIONS */}
          <div className={styles.actions}>

            {/* EMAIL */}
            <a
              href="mailto:architpatle06@gmail.com"
              className={styles.primaryBtn}
            >

              <div className={styles.btnLeft}>
                <FiMail />
                <span>Email Me</span>
              </div>

              <div className={styles.arrow}>
                <FiArrowUpRight />
              </div>

            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/archit-patle"
              target="_blank"
              rel="noreferrer"
              className={styles.secondaryBtn}
            >

              <div className={styles.btnLeft}>
                <FiLinkedin />
                <span>LinkedIn</span>
              </div>

              <div className={styles.arrow}>
                <FiArrowUpRight />
              </div>

            </a>

          </div>

          {/* FOOTNOTE */}
          <p className={styles.footnote}>
            Currently open to full-time opportunities, freelance projects, collaborations, and exciting new challenges.f
          </p>

        </div>

      </Container>
    </section>
  );
}