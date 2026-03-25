import Container from "../common/Container";
import SectionHeader from "../common/SectionHeader";

const education = [
  {
    degree: "B.Tech in Computer Science",
    institute: "G H Raisoni University",
    meta: "2022 — 2026 · CGPA 8.9",
  },
  {
    degree: "HSC",
    institute: "IINSIGHT Jr. College",
    meta: "2022 · 88.7%",
  },
  {
    degree: "SSC",
    institute: "Bharti Krishna Vidya Vihar",
    meta: "2020 · 92.8%",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32">
      <Container>

        <SectionHeader title="Education" />

        <div className="space-y-10">

          {education.map((item, index) => (
            <div
              key={index}
              className="border-b border-border pb-6"
            >

              {/* DEGREE */}
              <h3 className="text-xl font-heading mb-1">
                {item.degree}
              </h3>

              {/* INSTITUTE */}
              <p className="text-secondary">
                {item.institute}
              </p>

              {/* META */}
              <p className="text-sm text-secondary mt-1">
                {item.meta}
              </p>

            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}