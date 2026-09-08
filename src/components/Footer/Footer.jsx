import { useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./Footer.module.css";

import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
} from "react-icons/fi";

import { FaWhatsapp } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        defaults: {
          ease: "power3.out",
        },
      });

      /* TOP COLUMNS */
      tl.from("[data-footer-column]", {
        opacity: 0,
        y: 28,
        duration: 0.5,
        stagger: 0.12,
      });

      /* BOTTOM */
      tl.from(
        "[data-footer-bottom]",
        {
          opacity: 0,
          y: 15,
          duration: 0.35,
          clearProps: "opacity,transform",
        },
        "-=0.15"
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className={styles.footer}
    >
      <div className={styles.wrapper}>

        {/* TOP */}
        <div className={styles.top}>

          {/* COLUMN 1 */}
          <div
            className={styles.column}
            data-footer-column
          >
            <h3 className={styles.brand}>
              Archit Patle
            </h3>

            <p className={styles.text}>
              Crafting meaningful experiences through creativity and technology.
            </p>
          </div>

          {/* COLUMN 2 */}
          <div
            className={styles.column}
            data-footer-column
          >
            <h4 className={styles.label}>
              Contact
            </h4>

            <a
              href="mailto:architpatle06@gmail.com"
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
          <div
            className={styles.column}
            data-footer-column
          >
            <h4 className={styles.label}>
              Socials
            </h4>

            <div className={styles.socials}>

              <a
                href="https://www.linkedin.com/in/archit-patle"
                target="_blank"
                rel="noreferrer"
                className={styles.iconBtn}
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>

              <a
                href="https://github.com/architpatle"
                target="_blank"
                rel="noreferrer"
                className={styles.iconBtn}
                aria-label="GitHub"
              >
                <FiGithub />
              </a>

              <a
                href="https://wa.me/918999186683"
                target="_blank"
                rel="noreferrer"
                className={styles.iconBtn}
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>

            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div
          className={styles.bottom}
          data-footer-bottom
        >
          <p>
            © {new Date().getFullYear()} Archit Patle. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}