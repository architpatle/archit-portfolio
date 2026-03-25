import Container from "../common/Container";
import SectionHeader from "../common/SectionHeader";

const stack = [
  {
    title: "Frontend",
    items: "React, JavaScript, HTML, CSS, Tailwind, Bootstrap",
  },
  {
    title: "UI / UX",
    items: "Figma, Wireframing, Prototyping, Interface Design",
  },
  {
    title: "Programming",
    items: "C, C++",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <Container>

        <SectionHeader title="Stack" />

        <div className="space-y-10">

          {stack.map((group, index) => (
            <div
              key={index}
              className="border-b border-border pb-6"
            >

              {/* TITLE */}
              <h3 className="text-xl font-heading mb-2">
                {group.title}
              </h3>

              {/* ITEMS */}
              <p className="text-secondary max-w-2xl leading-relaxed">
                {group.items}
              </p>

            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}