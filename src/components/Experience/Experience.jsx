import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Container from "../common/Container";
import styles from "./Experience.module.css";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    year: "July 2025 - Present",
    company: "ROYALS WEBTECH PVT. LTD.",
    role: "Software Developer",
    description:
      "Contributing to modern digital experiences through thoughtful design and scalable development, while building responsive, reusable systems, taking initiative, and collaborating to create intuitive solutions.",
    metricLabel: "Performance Remark",
    metricValue: "90+",
    progress: "90%",
    metricInfo:
      "Recognized for taking initiative, collaborating effectively, and contributing to thoughtful, scalable digital experiences.",
  },
];

export default function Experience() {
  const experienceRef = useRef(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: experienceRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
        defaults: {
          ease: "power3.out",
        },
      });

      /* =========================
         SECTION INTRO
      ========================= */

      tl.from("[data-experience='eyebrow']", {
        opacity: 0,
        y: 20,
        duration: 0.35,
      });

      tl.from(
        "[data-experience='heading']",
        {
          opacity: 0,
          y: 30,
          duration: 0.5,
        },
        "-=0.1"
      );

      /* =========================
         EXPERIENCE ROWS
      ========================= */

      const rows = gsap.utils.toArray("[data-experience-row]");

      rows.forEach((row, index) => {
        const left = row.querySelector("[data-experience='left']");
        const center = row.querySelector("[data-experience='center']");
        const right = row.querySelector("[data-experience='right']");
        const progress = row.querySelector("[data-experience='progress']");

        /*
          The first row starts immediately after
          the previous animation (heading) ends.

          For additional rows, they begin after
          the previous row animation finishes.
        */

        const rowTimeline = gsap.timeline();

        rowTimeline
          .from(left, {
            opacity: 0,
            y: 30,
            duration: 0.45,
          })
          .from(
            center,
            {
              opacity: 0,
              y: 30,
              duration: 0.45,
            },
            "-=0.3"
          )
          .from(
            right,
            {
              opacity: 0,
              y: 30,
              duration: 0.45,
            },
            "-=0.3"
          )
          .fromTo(
            progress,
            {
              width: "0%",
            },
            {
              width: progress.dataset.progress,
              duration: 0.7,
              ease: "power2.out",
            },
            "-=0.15"
          );

        /*
          Add the entire row animation directly
          after the current master timeline position.
        */

        tl.add(rowTimeline, index === 0 ? ">" : "-=0.9");
      });
    }, experienceRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={experienceRef}
      id="experience"
      className={`relative z-10 py-14 md:py-18 overflow-hidden ${styles.experience}`}
    >
      <Container>
        {/* TOP SECTION */}
        <div className="text-center max-w-5xl mx-auto lg:mb-14 mb-8">

          {/* EYEBROW */}
          <div
            data-experience="eyebrow"
            className={styles.eyebrow}
          >
            <span className={styles.dot}></span>
            Experience
          </div>

          {/* MAIN HEADING */}
          <h2
            data-experience="heading"
            className={`text-3xl sm:text-4xl md:text-5xl ${styles.heading}`}
          >
            Turning ideas into{" "}
            <span>real-world digital experiences</span>{" "}
            through creativity, technology, and collaboration
          </h2>

        </div>

        {/* EXPERIENCE BLOCK */}
        <div className={styles.timeline}>

          {experiences.map((experience, index) => (
            <div
              className={styles.row}
              data-experience-row
              key={`${experience.company}-${index}`}
            >
              {/* LEFT */}
              <div
                className={styles.left}
                data-experience="left"
              >
                <h3 className={styles.year}>
                  {experience.year}
                </h3>

                <p className={styles.company}>
                  {experience.company}
                </p>

                <h4 className={styles.role}>
                  {experience.role}
                </h4>
              </div>

              {/* CENTER */}
              <div
                className={styles.center}
                data-experience="center"
              >
                <p className={styles.description}>
                  {experience.description}
                </p>
              </div>

              {/* RIGHT */}
              <div
                className={styles.right}
                data-experience="right"
              >
                <div className={styles.metricTop}>
                  <span>{experience.metricLabel}</span>

                  <div className={styles.metricBadge}>
                    {experience.metricValue}
                  </div>
                </div>

                <div className={styles.progressTrack}>
                  <div
                    className={styles.progressFill}
                    data-experience="progress"
                    data-progress={experience.progress}
                    style={{ width: "0%" }}
                  />
                </div>

                <p className={styles.metricInfo}>
                  {experience.metricInfo}
                </p>
              </div>
            </div>
          ))}

        </div>
      </Container>
    </section>
  );
}