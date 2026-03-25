import Container from "../common/Container";
import styles from "./Hero.module.css";

const skills = [
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind",
  "Bootstrap",
  "Figma",
  "UI/UX",
  "C",
  "C++",
];

export default function Hero() {
  return (
    <section className={`relative py-28 md:py-36 overflow-hidden ${styles.hero}`}>

      {/* BACKGROUND GRADIENT */}
      <div className={styles.gradientBg}></div>

      <Container>
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">

          {/* EYEBROW */}
          <div className={styles.eyebrow}>
            Web Developer
          </div>

          {/* MAIN HEADING */}
          <h1 className="text-5xl md:text-7xl font-heading tracking-tight leading-tight mt-6 mb-6">
            Hey there, I’m{" "}
            <span className="text-accent">Archit Patle</span>.
          </h1>

          {/* DESCRIPTION */}
          <p className="text-secondary max-w-xl mb-10 leading-relaxed">
            I design and develop clean, scalable web interfaces focused on usability,
            performance, and meaningful user experience.
          </p>

          {/* CTA */}
          <div className="flex gap-4 flex-wrap justify-center">

            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-accent text-white text-sm hover:opacity-90 transition"
            >
              Explore My Work →
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-border text-sm hover:border-accent hover:text-accent transition"
            >
              Let’s Connect
            </a>

          </div>
        </div>
      </Container>

      {/* MARQUEE */}
      <div className={styles.marqueeWrapper}>
        <div className={styles.marquee}>
          {[...skills, ...skills].map((skill, i) => (
            <span key={i} className={styles.marqueeItem}>
              {skill}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}