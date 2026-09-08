import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

import Container from "../common/Container";
import styles from "./Hero.module.css";

export default function Hero() {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power2.out",
        },
      });

      // Initial states
      gsap.set(
        [
          "[data-hero='eyebrow']",
          "[data-hero='greeting']",
          "[data-hero='name']",
          "[data-hero='description']",
          "[data-hero='cta']",
        ],
        {
          willChange: "transform, opacity",
        }
      );

      tl.from("[data-hero='eyebrow']", {
        opacity: 0,
        scale: 0.96,
        duration: 0.4,
      })
        .from(
          "[data-hero='greeting']",
          {
            opacity: 0,
            y: 18,
            duration: 0.45,
          },
          "-=0.15"
        )
        .from(
          "[data-hero='name']",
          {
            opacity: 0,
            y: 24,
            duration: 0.5,
          },
          "-=0.3"
        )
        .from(
          "[data-hero='description']",
          {
            opacity: 0,
            y: 14,
            duration: 0.4,
          },
          "-=0.25"
        )
        .from(
          "[data-hero='cta']",
          {
            opacity: 0,
            y: 12,
            duration: 0.4,
          },
          "-=0.3"
        );

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className={`relative py-28 md:py-36 overflow-hidden ${styles.hero}`}
    > <Container> <div className="flex flex-col items-center text-center max-w-4xl mx-auto relative z-10">

      {/* EYEBROW */}
      <div
        data-hero="eyebrow"
        className={styles.eyebrow}
      >
        <span className={styles.dot}></span>
        Creative Developer
      </div>

      {/* HEADING */}
      <h1 className="mt-8 mb-6 font-heading tracking-tight leading-[1.05]">

        <span
          data-hero="greeting"
          className="block text-3xl sm:text-4xl md:text-5xl text-secondary font-medium"
        >
          Hey there, I’m
        </span>

        <span
          data-hero="name"
          className="block uppercase text-6xl sm:text-7xl md:text-8xl font-bold text-accent mt-3"
        >
          Archit Patle
        </span>

      </h1>

      {/* DESCRIPTION */}
      <p
        data-hero="description"
        className="text-secondary max-w-xl mb-10 leading-relaxed text-base sm:text-lg"
      >
        I transform ideas into meaningful digital experiences through
        thoughtful design, strategic thinking, and technology built to
        create real impact.
      </p>

      {/* CTA */}
      <div
        data-hero="cta"
        className="flex gap-4 flex-wrap justify-center"
      >
        <a
          href="#projects"
          className={styles.primaryBtn}
        >
          Explore My Work
        </a>

        <a
          href="#contact"
          className={styles.secondaryBtn}
        >
          Let’s Connect
        </a>
      </div>

    </div>
      </Container>
    </section>

  );
}
