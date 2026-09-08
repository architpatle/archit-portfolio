import { useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Container from "../common/Container";
import styles from "./Contact.module.css";

import {
  FiArrowUpRight,
  FiMail,
  FiLinkedin,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const contactRef = useRef(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
        defaults: {
          ease: "power3.out",
        },
      });

      /* EYEBROW */
      tl.from("[data-contact='eyebrow']", {
        opacity: 0,
        y: 18,
        duration: 0.35,
      });

      /* HEADING */
      tl.from(
        "[data-contact='heading']",
        {
          opacity: 0,
          y: 30,
          duration: 0.55,
        },
        "-=0.12"
      );

      /* DESCRIPTION */
      tl.from(
        "[data-contact='description']",
        {
          opacity: 0,
          y: 20,
          duration: 0.4,
        },
        "-=0.25"
      );

      /* CTA BUTTONS */
      tl.from(
        "[data-contact-action]",
        {
          opacity: 0,
          y: 22,
          scale: 0.96,
          duration: 0.45,
          stagger: 0.1,
          clearProps: "opacity,transform",
        },
        "-=0.15"
      );

      /* FOOTNOTE */
      tl.from(
        "[data-contact='footnote']",
        {
          opacity: 0,
          y: 15,
          duration: 0.35,
          clearProps: "opacity,transform",
        },
        "-=0.2"
      );
    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={contactRef}
      id="contact"
      className={`relative z-10 py-14 md:py-18 ${styles.contact}`}
    >
      <Container>

        <div className={styles.wrapper}>

          {/* GLOW */}
          <div className={styles.glow}></div>

          {/* EYEBROW */}
          <div
            data-contact="eyebrow"
            className={styles.eyebrow}
          >
            <span className={styles.dot}></span>
            Contact
          </div>

          {/* HEADING */}
          <h2
            data-contact="heading"
            className={`text-3xl sm:text-4xl md:text-5xl ${styles.heading}`}
          >
            Let’s create something{" "}
            <span>impactful</span> together
          </h2>

          {/* SUBTEXT */}
          <p
            data-contact="description"
            className={styles.description}
          >
            Whether you have an idea to explore, a project to build,
            an opportunity to collaborate, or simply want to talk about
            design and technology, I’m always open to connecting.
          </p>

          {/* ACTIONS */}
          <div className={styles.actions}>

            {/* EMAIL */}
            <a
              data-contact-action
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
              data-contact-action
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
          <p
            data-contact="footnote"
            className={styles.footnote}
          >
            Currently open to full-time opportunities, freelance projects,
            collaborations, and exciting new challenges.
          </p>

        </div>

      </Container>
    </section>
  );
}