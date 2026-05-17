import Container from "../common/Container";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section
      id="experience"
      className={`relative z-10 py-14 md:py-18 ${styles.experience}`}
    >
      <Container>

        {/* TOP SECTION */}
        <div className="text-center max-w-5xl mx-auto mb-14">

          {/* EYEBROW */}
          <div className={styles.eyebrow}>
            <span className={styles.dot}></span>
            Experience
          </div>

          {/* MAIN HEADING */}
          <h2 className={`text-3xl sm:text-4xl md:text-5xl ${styles.heading}`}>
            Building scalable interfaces with{" "}
            <span>performance</span>, usability,
            and real-world product thinking.
          </h2>

        </div>

        {/* EXPERIENCE BLOCK */}
        <div className={styles.timeline}>

          {/* ROW */}
          <div className={styles.row}>

            {/* LEFT */}
            <div className={styles.left}>

              <h3 className={styles.year}>
                July 2025 - Present
              </h3>

              <p className={styles.company}>
                ROYALS WEBTECH PVT. LTD.
              </p>

              <h4 className={styles.role}>
                Frontend Developer
              </h4>

            </div>

            {/* CENTER */}
            <div className={styles.center}>

              <p className={styles.description}>
                Focused on building scalable frontend systems,
                reusable React component architecture,
                and modern responsive interfaces optimized for
                usability, maintainability, and performance.
              </p>

            </div>

            {/* RIGHT */}
            <div className={styles.right}>

              <div className={styles.metricTop}>
                <span>Performance Remark</span>

                <div className={styles.metricBadge}>
                  90+
                </div>
              </div>

              <div className={styles.progressTrack}>
                <div
                  className={styles.progressFill}
                  style={{ width: "90%" }}
                ></div>
              </div>

              <p className={styles.metricInfo}>
                Appreciated for responsive design and performance-focused development.
              </p>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}