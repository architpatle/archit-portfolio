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
  return (
    <section
      id="skills"
      className={`relative z-10 py-14 md:py-18e ${styles.skills}`}
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
            Leveraging <span>modern tools </span>
            to create seamless digital experiences
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