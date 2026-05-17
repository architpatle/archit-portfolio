import Container from "../common/Container";
import styles from "./Projects.module.css";
import homeverse from "../../assets/images/homeverseImg.png"
import habitual from "../../assets/images/habitualImg.png"
import streetInfoHub from "../../assets/images/streetInfoHubImg.png"
import archinxt from "../../assets/images/archinxtImg.png"

import {
  FiArrowUpRight,
  FiHome,
  FiCheckSquare,
  FiMap,
  FiLayers
} from "react-icons/fi";

const projects = [
  {
    title: "ArchInxT",
    description:
      "ArchInxT simplifies modern technology and UI design through visual storytelling, and immersive digital learning experiences.",
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
  // {
  //   title: "Habitual",
  //   description:
  //     "A habit tracking application designed to simplify daily routines with minimal and intuitive interactions.",
  //   image: habitual,
  //   icon: <FiCheckSquare />,
  //   link: "#",
  // },
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
  return (
    <section
      id="projects"
      className={`relative z-10 py-14 md:py-18 ${styles.projects}`}
    >
      <Container>

        {/* TOP SECTION */}
        <div className="text-center max-w-5xl mx-auto mb-24">

          {/* EYEBROW */}
          <div className={styles.eyebrow}>
            <span className={styles.dot}></span>
            Selected Work
          </div>

          {/* HEADING */}
          <h2 className={`text-3xl sm:text-4xl md:text-5xl ${styles.heading}`}>
            Turning concepts into{" "}
            <span>interactive experiences </span>
            through scalable development solutions.skil
          </h2>

        </div>

        {/* PROJECT GRID */}
        <div className={styles.grid}>

          {projects.map((project, index) => (
            <div
              key={index}
              className={styles.card}
            >

              {/* ICON */}
              <div className={styles.iconBox}>
                {project.icon}
              </div>

              {/* IMAGE */}
              <div className={styles.imageWrapper}>

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
          ))}

        </div>

      </Container>
    </section>
  );
}