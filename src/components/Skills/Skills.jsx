import { useEffect, useState } from "react";

import Container from "../common/Container";
import styles from "./Skills.module.css";

import {
  FiCode,
  FiFigma,
  FiCpu,
} from "react-icons/fi";

const stack = [
  {
    title: "Full-Stack Development",
    icon: <FiCode />,
    description:
      "Building modern, scalable digital applications across the frontend and backend with a focus on clean architecture, usability, and maintainable code.",
    items: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "UI / UX Design",
    icon: <FiFigma />,
    description:
      "Designing intuitive and visually refined experiences through thoughtful interfaces, structured user flows, and purposeful interactions.",
    items: [
      "Figma",
      "Wireframing",
      "Prototyping",
      "Interface Design",
    ],
  },
  {
    title: "Programming & Problem Solving",
    icon: <FiCpu />,
    description:
      "Strengthening programming fundamentals, problem-solving abilities, and algorithmic thinking through continuous learning and DSA practice.",
    items: [
      "C",
      "C++",
      "Data Structures",
      "Algorithms",
      "Problem Solving",
    ],
  },
  
];

export default function Skills() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  /* RESPONSIVE SLIDES PER VIEW */
  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth <= 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth <= 1100) {
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

  /* RESET WHEN BREAKPOINT CHANGES */
  useEffect(() => {
    setCurrentSlide(0);
  }, [slidesPerView]);

  /* TOTAL POSSIBLE SLIDES */
  const totalSlides = Math.max(
    stack.length - slidesPerView + 1,
    1
  );

  /* CHECK IF CAROUSEL IS NEEDED */
  const isCarouselActive = stack.length > slidesPerView;

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
      id="skills"
      className={`relative z-10 py-14 md:py-18 ${styles.skills}`}
    >
      <Container>

        {/* TOP */}
        <div className="text-center max-w-5xl mx-auto lg:mb-24 mb-16">

          {/* EYEBROW */}
          <div className={styles.eyebrow}>
            <span className={styles.dot}></span>
            Skills
          </div>

          {/* HEADING */}
          <h2 className={`text-3xl sm:text-4xl md:text-5xl ${styles.heading}`}>
            Leveraging <span>modern tools</span>
            {" "}to create seamless digital experiences
          </h2>

        </div>


        {/* SKILLS CAROUSEL */}
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

              {stack.map((group) => (
                <div
                  key={group.title}
                  className={styles.slide}
                  style={{
                    width: `${100 / slidesPerView}%`,
                  }}
                >

                  {/* CARD */}
                  <div className={styles.card}>

                    {/* ICON */}
                    <div className={styles.iconBox}>
                      {group.icon}
                    </div>

                    {/* TITLE */}
                    <h3 className={styles.title}>
                      {group.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className={styles.description}>
                      {group.description}
                    </p>

                    {/* TAGS */}
                    <div className={styles.tags}>
                      {group.items.map((item) => (
                        <span key={item}>
                          {item}
                        </span>
                      ))}
                    </div>

                  </div>

                </div>
              ))}

            </div>

          </div>


          {/* DOTS */}
          {isCarouselActive && (
            <div className={styles.dots}>

              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to skills group ${index + 1}`}
                  className={`${styles.carouselDot} ${
                    currentSlide === index
                      ? styles.activeDot
                      : ""
                  }`}
                  onClick={() => handleDotClick(index)}
                />
              ))}

            </div>
          )}

        </div>

      </Container>
    </section>
  );
}