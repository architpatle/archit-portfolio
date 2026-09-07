import Container from "../common/Container";
import styles from "./About.module.css";
import img from "../../../src/assets/images/archit.jpeg"

export default function About() {
  return (
    <section
      id="about"
      className={`relative z-10 py-14 md:py-18 ${styles.about}`}
    >
      <Container>

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 items-center">

          {/* LEFT */}
          <div>

            {/* EYEBROW */}
            <div className={styles.eyebrow}>
              <span className={styles.dot}></span>
              About Me
            </div>

            {/* HUGE STATEMENT */}
            <h2 className={` text-3xl sm:text-4xl md:text-5xl ${styles.heading}`}>
              Turning thoughtful ideas into meaningful {" "}
              <span>digital experiences</span>
            </h2>

            {/* DESCRIPTION */}
            <p className={styles.description}>
              I’m a creative developer passionate about bringing ideas to life through thoughtful design, strategic thinking, and technology. I focus on creating experiences that are visually refined, purposeful, and built to make a meaningful impact.
            </p>

          </div>

          {/* RIGHT IMAGE */}
          <div className={styles.imageWrapper}>

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