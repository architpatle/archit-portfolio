import Container from "../common/Container";
import styles from "./Hero.module.css";

import {
  FaReact,
  FaNodeJs,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiExpress,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
} from "react-icons/si";

const orbitIcons = [
  <FaReact />,
  <FaNodeJs />,
  <SiExpress />,
  <SiJavascript />,
  <FaHtml5 />,
  <FaCss3Alt />,
  <SiTailwindcss />,
  <SiBootstrap />,
  <FaFigma />,
];

export default function Hero() {
  return (
    <section
      className={`relative py-28 md:py-36 overflow-hidden ${styles.hero}`}
    >
      {/* BACKGROUND */}
      <div className={styles.gradientBg}></div>

      {/* ORBIT SYSTEM */}
      <div className={styles.orbitWrapper}>

        <div className={`${styles.orbit} ${styles.orbitOne}`}>
          {orbitIcons.map((icon, i) => (
            <div
              key={i}
              className={styles.icon}
              style={{
                transform: `rotate(${i * 40}deg) translateX(var(--orbit1-radius)) rotate(-${i * 40
                  }deg)`,
              }}
            >
              {icon}
            </div>
          ))}
        </div>

        <div className={`${styles.orbit} ${styles.orbitTwo}`}>
          {orbitIcons.map((icon, i) => (
            <div
              key={i}
              className={styles.iconSecondary}
              style={{
                transform: `rotate(${i * 40}deg) translateX(var(--orbit2-radius)) rotate(-${i * 40
                  }deg)`,
              }}
            >
              {icon}
            </div>
          ))}
        </div>

      </div>

      <Container>
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto relative z-10">

          {/* EYEBROW */}
          <div className={styles.eyebrow}>
            <span className={styles.dot}></span>
            Web Developer
          </div>

          {/* HEADING */}
          <h1 className="mt-8 mb-6 font-heading tracking-tight leading-[1.05]">
            <span className="block text-3xl sm:text-4xl md:text-5xl text-secondary font-medium">
              Hey there, I’m
            </span>

            <span className="block text-6xl sm:text-7xl md:text-8xl font-bold text-accent mt-3">
              Archit Patle
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-secondary max-w-xl mb-10 leading-relaxed text-base sm:text-lg">
            I design and develop clean, scalable web interfaces focused on
            usability, performance, and meaningful user experience.
          </p>

          {/* CTA */}
          <div className="flex gap-4 flex-wrap justify-center">

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