import { useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Container from "../common/Container";
import styles from "./Education.module.css";

gsap.registerPlugin(ScrollTrigger);

const education = [
  {
    course: "B.Tech in Computer Science Engineering",
    institute: "G H Raisoni University",
    duration: "2022 - 2026",
    score: "CGPA 8.98",
    progress: "89%",
  },
  {
    course: "Higher Secondary Certificate (HSC)",
    institute: "IINSIGHT Jr. College",
    duration: "2022",
    score: "88.7%",
    progress: "88.7%",
  },
  {
    course: "Secondary School Certificate (SSC)",
    institute: "Bharti Krishna Vidya Vihar",
    duration: "2020",
    score: "92.8%",
    progress: "92.8%",
  },
];

export default function Education() {
  const educationRef = useRef(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: educationRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
        defaults: {
          ease: "power3.out",
        },
      });

      /* EYEBROW */
      tl.from("[data-education='eyebrow']", {
        opacity: 0,
        y: 18,
        duration: 0.35,
      });

      /* HEADING */
      tl.from(
        "[data-education='heading']",
        {
          opacity: 0,
          y: 28,
          duration: 0.5,
        },
        "-=0.12"
      );

      /* EDUCATION ROWS */
      tl.from(
        "[data-education-row]",
        {
          opacity: 0,
          y: 35,
          duration: 0.55,
          stagger: 0.14,
          ease: "power4.out",
        },
        "-=0.05"
      );

      /* PROGRESS BARS */
      tl.from(
        "[data-education-progress]",
        {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 0.7,
          stagger: 0.14,
          ease: "power3.out",
        },
        "-=0.45"
      );
    }, educationRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={educationRef}
      id="education"
      className={`relative z-10 py-14 md:py-18 overflow-hidden ${styles.education}`}
    >
      <Container>

        {/* TOP SECTION */}
        <div className="text-center max-w-5xl mx-auto mb-14">

          {/* EYEBROW */}
          <div
            data-education="eyebrow"
            className={styles.eyebrow}
          >
            <span className={styles.dot}></span>
            Education
          </div>

          {/* MAIN HEADING */}
          <h2
            data-education="heading"
            className={`text-3xl sm:text-4xl md:text-5xl ${styles.heading}`}
          >
            A journey of learning,{" "}
            <span>evolving through consistency</span> and new challenges
          </h2>

        </div>

        {/* EDUCATION TIMELINE */}
        <div className={styles.timeline}>

          {education.map((item, index) => (
            <div
              key={index}
              className={styles.row}
              data-education-row
            >

              {/* LEFT */}
              <div className={styles.left}>
                <h3 className={styles.course}>
                  {item.course}
                </h3>
              </div>

              {/* CENTER */}
              <div className={styles.center}>

                <p className={styles.institute}>
                  {item.institute}
                </p>

                <p className={styles.duration}>
                  {item.duration}
                </p>

              </div>

              {/* RIGHT */}
              <div className={styles.right}>

                <div className={styles.metricTop}>
                  <span>Academic Score</span>

                  <div className={styles.metricBadge}>
                    {item.score}
                  </div>
                </div>

                <div className={styles.progressTrack}>
                  <div
                    className={styles.progressFill}
                    data-education-progress
                    style={{
                      width: item.progress,
                    }}
                  ></div>
                </div>

              </div>

            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}