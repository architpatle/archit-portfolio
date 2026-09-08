import { useEffect, useLayoutEffect, useRef, useState } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Container from "../common/Container";
import styles from "./Projects.module.css";

import homeverse from "../../assets/images/homeverseImg.png";
import streetInfoHub from "../../assets/images/streetInfoHubImg.png";
import archinxt from "../../assets/images/archinxtImg.png";

import {
FiArrowUpRight,
FiHome,
FiMap,
FiLayers,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const projects = [
{
title: "ArchInxT",
description:
"ArchInxT simplifies modern technology and UI design through visual storytelling and immersive digital learning experiences.",
image: archinxt,
icon: <FiLayers />,
link: "https://archinxt.netlify.app/",
},
{
title: "HomeVerse",
description:
"A responsive real estate platform focused on clean UI, smooth navigation, and scalable frontend architecture.",
image: homeverse,
icon: <FiHome />,
link: "https://homeverse-apk.netlify.app/",
},
{
title: "Street Info Hub",
description:
"A citizen-centric road damage awareness platform, allowing citizens to report and review road damage issues.",
image: streetInfoHub,
icon: <FiMap />,
link: "https://street-info-hub.netlify.app/",
},
];

export default function Projects() {
const projectsRef = useRef(null);

const [currentSlide, setCurrentSlide] = useState(0);
const [slidesPerView, setSlidesPerView] = useState(3);

/* =========================
GSAP SCROLL ANIMATION
========================= */

useLayoutEffect(() => {
const prefersReducedMotion = window.matchMedia(
"(prefers-reduced-motion: reduce)"
).matches;

  
if (prefersReducedMotion) return;

const ctx = gsap.context(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: projectsRef.current,
      start: "top 75%",
      toggleActions: "play none none none",
    },
    defaults: {
      ease: "power3.out",
    },
  });

  /* EYEBROW */
  tl.from("[data-projects='eyebrow']", {
    opacity: 0,
    y: 18,
    duration: 0.35,
  });

  /* HEADING */
  tl.from(
    "[data-projects='heading']",
    {
      opacity: 0,
      y: 25,
      duration: 0.5,
    },
    "-=0.12"
  );

  /* PROJECT CARDS */
  tl.from(
    "[data-project-card]",
    {
      opacity: 0,
      y: 20,
      scale: 0.97,
      filter: "blur(6px)",
      duration: 0.6,
      stagger: 0.12,
      ease: "power4.out",
      clearProps: "filter",
    },
    "-=0.05"
  );

  /* DOTS */
  tl.from(
    "[data-projects='dots']",
    {
      opacity: 0,
      y: 10,
      duration: 0.3,
    },
    "-=0.2"
  );
}, projectsRef);

return () => ctx.revert();
  

}, []);

/* =========================
RESPONSIVE SLIDES
========================= */

useEffect(() => {
const updateSlidesPerView = () => {
if (window.innerWidth <= 768) {
setSlidesPerView(1);
} else if (window.innerWidth <= 1200) {
setSlidesPerView(2);
} else {
setSlidesPerView(3);
}
};

  
updateSlidesPerView();

window.addEventListener("resize", updateSlidesPerView);

return () => {
  window.removeEventListener("resize", updateSlidesPerView);
};
  

}, []);

/* RESET SLIDE ON BREAKPOINT CHANGE */

useEffect(() => {
setCurrentSlide(0);
}, [slidesPerView]);

/* TOTAL SLIDE POSITIONS */

const totalSlides = Math.max(
projects.length - slidesPerView + 1,
1
);

/* CAROUSEL REQUIRED? */

const isCarouselActive = projects.length > slidesPerView;

/* AUTO PLAY */

useEffect(() => {
if (!isCarouselActive) return;

  
const interval = setInterval(() => {
  setCurrentSlide((prevSlide) =>
    prevSlide === totalSlides - 1
      ? 0
      : prevSlide + 1
  );
}, 4500);

return () => clearInterval(interval);
  

}, [isCarouselActive, totalSlides]);

/* DOT NAVIGATION */

const handleDotClick = (index) => {
setCurrentSlide(index);
};

return (
<section
ref={projectsRef}
id="projects"
className={`relative z-10 py-14 md:py-18 ${styles.projects}`}
> <Container>

  
    {/* TOP SECTION */}
    <div className="text-center max-w-5xl mx-auto lg:mb-24 mb-16">

      {/* EYEBROW */}
      <div
        data-projects="eyebrow"
        className={styles.eyebrow}
      >
        <span className={styles.dot}></span>
        Selected Work
      </div>

      {/* HEADING */}
      <h2
        data-projects="heading"
        className={`text-3xl sm:text-4xl md:text-5xl ${styles.heading}`}
      >
        From concept to experience,{" "}
        <span>built with purpose and intention</span>
      </h2>

    </div>

    {/* PROJECT CAROUSEL */}
    <div className={styles.carousel}>

      {/* VIEWPORT */}
      <div className={styles.viewport}>

        {/* TRACK */}
        <div
          className={styles.track}
          style={{
            transform: `translateX(-${
              currentSlide * (100 / slidesPerView)
            }%)`,
          }}
        >
          {projects.map((project) => (
            <div
              key={project.title}
              className={styles.slide}
              style={{
                 "--slides-per-view": slidesPerView,
              }}
            >

              {/* ANIMATION WRAPPER */}
              <div
                className={styles.cardReveal}
                data-project-card
              >

                {/* CARD */}
                <div className={styles.card}>

                  {/* IMAGE */}
                  <div className={styles.imageWrapper}>

                    {/* ICON */}
                    <div className={styles.iconBox}>
                      {project.icon}
                    </div>

                    <img
                      src={project.image}
                      alt={project.title}
                      className={styles.image}
                    />

                  </div>

                  {/* CONTENT */}
                  <div className={styles.content}>

                    <div>

                      <h3 className={styles.title}>
                        {project.title}
                      </h3>

                      <p className={styles.description}>
                        {project.description}
                      </p>

                    </div>

                    {/* LINK */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.link}
                    >
                      <span>Live Demo</span>

                      <div className={styles.arrow}>
                        <FiArrowUpRight />
                      </div>
                    </a>

                  </div>

                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* DOTS */}
      {isCarouselActive && (
        <div
          className={styles.dots}
          data-projects="dots"
        >
          {Array.from({ length: totalSlides }).map(
            (_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to project ${index + 1}`}
                className={`${styles.carouselDot} ${
                  currentSlide === index
                    ? styles.activeDot
                    : ""
                }`}
                onClick={() => handleDotClick(index)}
              />
            )
          )}
        </div>
      )}

    </div>

  </Container>
</section>
  

);
}
