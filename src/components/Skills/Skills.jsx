import Container from "../common/Container";
import styles from "./Skills.module.css";

import {
  FiCode,
  FiFigma,
  FiCpu,
} from "react-icons/fi";

const stack = [
  {
    title: "Frontend Development",
    icon: <FiCode />,
    description:
      "Building responsive and scalable interfaces with modern frontend technologies and reusable component architecture.",
    items: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind",
      "Bootstrap",
    ],
  },
  {
    title: "UI / UX Design",
    icon: <FiFigma />,
    description:
      "Designing intuitive user experiences with structured wireframes, clean interfaces, and thoughtful interaction flow.",
    items: [
      "Figma",
      "Wireframing",
      "Prototyping",
      "Interface Design",
    ],
  },
  {
    title: "Programming",
    icon: <FiCpu />,
    description:
      "Strong understanding of programming fundamentals, logic building, and problem-solving concepts.",
    items: [
      "C",
      "C++",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className={`relative z-10 py-14 md:py-18e ${styles.skills}`}
    >
      <Container>

        {/* TOP */}
        <div className="text-center max-w-5xl mx-auto mb-24">

          {/* EYEBROW */}
          <div className={styles.eyebrow}>
            <span className={styles.dot}></span>
            Skills
          </div>

          {/* HEADING */}
          <h2 className={`text-3xl sm:text-4xl md:text-5xl ${styles.heading}`}>
            Leveraging <span>modern tools </span>
to create seamless digital experiences.
          </h2>

        </div>

        {/* GRID */}
        <div className={styles.grid}>

          {stack.map((group, index) => (
            <div
              key={index}
              className={styles.card}
            >

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

                {group.items.map((item, i) => (
                  <span key={i}>
                    {item}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}