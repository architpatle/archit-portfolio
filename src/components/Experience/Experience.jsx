import Container from "../common/Container";
import styles from "./Experience.module.css";

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
  return (
    <section
      id="experience"
      className={`relative z-10 py-14 md:py-18 ${styles.experience}`}
    >
      <Container>

        {/* TOP SECTION */}
        <div className="text-center max-w-5xl mx-auto lg:mb-14 mb-8">

          {/* EYEBROW */}
          <div className={styles.eyebrow}>
            <span className={styles.dot}></span>
            Experience
          </div>

          {/* MAIN HEADING */}
          <h2 className={`text-3xl sm:text-4xl md:text-5xl ${styles.heading}`}>
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
              key={`${experience.company}-${index}`}
            >

              {/* LEFT */}
              <div className={styles.left}>

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
              <div className={styles.center}>

                <p className={styles.description}>
                  {experience.description}
                </p>

              </div>

              {/* RIGHT */}
              <div className={styles.right}>

                <div className={styles.metricTop}>
                  <span>{experience.metricLabel}</span>

                  <div className={styles.metricBadge}>
                    {experience.metricValue}
                  </div>
                </div>

                <div className={styles.progressTrack}>
                  <div
                    className={styles.progressFill}
                    style={{ width: experience.progress }}
                  ></div>
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