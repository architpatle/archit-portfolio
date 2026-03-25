import Container from "../common/Container";
import SectionHeader from "../common/SectionHeader";

const projects = [
  {
    title: "HomeVerse",
    description:
      "A responsive real estate platform focused on clean UI, smooth navigation, and scalable frontend architecture.",
    tech: ["React", "Bootstrap"],
    link: "https://homeverse-apk.netlify.app/",
  },
  {
    title: "Habitual",
    description:
      "A habit tracking application designed to simplify daily routines with minimal and intuitive interactions.",
    tech: ["React", "UI/UX"],
    link: "#",
  },
  {
    title: "Vigista",
    description:
      "A concept-based image platform exploring modern layouts and user-focused visual browsing experiences.",
    tech: ["UI Design", "Frontend"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <Container>

        <SectionHeader title="Selected Work" />

        <div className="grid md:grid-cols-3 gap-6">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group border border-border rounded-2xl p-6 
                         bg-surface transition-all duration-300 
                         hover:-translate-y-1 hover:border-accent"
            >

              {/* TITLE */}
              <h3 className="text-lg font-heading mb-3 group-hover:text-accent transition">
                {project.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm text-secondary mb-5 leading-relaxed">
                {project.description}
              </p>

              {/* TECH */}
              <div className="flex flex-wrap gap-2 text-xs text-secondary mb-6">
                {project.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>

              {/* ACTION */}
              <a
                href={project.link}
                target="_blank"
                className="text-sm text-accent"
              >
                View →
              </a>

            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}