import Container from "../common/Container";
import styles from "./Education.module.css";

const education = [
  {
    course: "B.Tech in Computer Science Engineering",
    institute: "G H Raisoni University",
    duration: "2022 - 2026",
    score: "CGPA 8.9",
  },
  {
    course: "Higher Secondary Certificate (HSC)",
    institute: "IINSIGHT Jr. College",
    duration: "2022",
    score: "88.7%",
  },
  {
    course: "Secondary School Certificate (SSC)",
    institute: "Bharti Krishna Vidya Vihar",
    duration: "2020",
    score: "92.8%",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className={`relative z-10 py-14 md:py-18 ${styles.education}`}
    >
      <Container>

        {/* TOP SECTION */}
        <div className="text-center max-w-5xl mx-auto mb-14">

          {/* EYEBROW */}
          <div className={styles.eyebrow}>
            <span className={styles.dot}></span>
            Education
          </div>

          {/* MAIN HEADING */}
          <h2 className={`text-3xl sm:text-4xl md:text-5xl ${styles.heading}`}>
            Academic foundation shaped through{" "}
            <span>consistency</span>, discipline,
            and continuous technical learning.
          </h2>

        </div>

        {/* EDUCATION TIMELINE */}
        <div className={styles.timeline}>

          {education.map((item, index) => (
            <div key={index} className={styles.row}>

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
                    style={{
                      width:
                        item.score === "CGPA 8.9"
                          ? "89%"
                          : item.score === "88.7%"
                            ? "88.7%"
                            : "92.8%",
                    }}
                  ></div>
                </div>

                {/* <p className={styles.metricInfo}>
                  Consistent academic performance with strong technical focus.
                </p> */}

              </div>

            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}