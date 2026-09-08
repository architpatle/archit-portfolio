import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Container from "../common/Container";
import styles from "./About.module.css";
import img from "../../../src/assets/images/archit.jpeg";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
        defaults: {
          ease: "power3.out",
        },
      });

      /* LEFT SIDE */
      tl.from("[data-about='eyebrow']", {
        opacity: 0,
        y: 20,
        duration: 0.45,
      })
        .from(
          "[data-about='heading']",
          {
            opacity: 0,
            y: 30,
            duration: 0.55,
          },
          "-=0.25"
        )
        .from(
          "[data-about='description']",
          {
            opacity: 0,
            y: 20,
            duration: 0.45,
          },
          "-=0.3"
        )
        /* IMAGE */
        .from(
          "[data-about='image']",
          {
            opacity: 0,
            x: 50,
            scale: 0.96,
            duration: 0.7,
          },
          "-=0.55"
        );

    }, aboutRef);

    return () => ctx.revert();

  }, []);

  return (
    <section
      ref={aboutRef}
      id="about"
      className={`relative z-10 py-14 md:py-18 overflow-hidden ${styles.about}`}
    > <Container>

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 items-center">

          {/* LEFT */}
          <div>

            {/* EYEBROW */}
            <div
              data-about="eyebrow"
              className={styles.eyebrow}
            >
              <span className={styles.dot}></span>
              About Me
            </div>

            {/* HUGE STATEMENT */}
            <h2
              data-about="heading"
              className={`text-3xl sm:text-4xl md:text-5xl ${styles.heading}`}
            >
              Turning thoughtful ideas into meaningful{" "}
              <span>digital experiences</span>
            </h2>

            {/* DESCRIPTION */}
            <p
              data-about="description"
              className={styles.description}
            >
              I’m a creative developer passionate about bringing ideas to life
              through thoughtful design, strategic thinking, and technology.
              I focus on creating experiences that are visually refined,
              purposeful, and built to make a meaningful impact.
            </p>

          </div>

          {/* RIGHT IMAGE */}
          <div
            data-about="image"
            className={styles.imageWrapper}
          >
            <img
              src={img}
              alt="About"
              className={styles.image}
            />
          </div>

        </div>

      </Container>
    </section>

  );
}
