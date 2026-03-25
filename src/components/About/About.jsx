import Container from "../common/Container";
import SectionHeader from "../common/SectionHeader";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <Container>

        <SectionHeader title="About" />

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT SIDE */}
          <div>

            {/* BIG STATEMENT */}
            <h3 className="text-2xl md:text-3xl font-heading leading-snug mb-6">
              I don’t just build interfaces — I make them{" "}
              <span className="text-accent">feel right</span>.
            </h3>

            {/* DESCRIPTION */}
            <p className="text-secondary leading-relaxed mb-4">
              I’m a frontend developer who focuses on clarity, structure, and
              performance. Every interface I build is designed to be intuitive,
              scalable, and easy to interact with.
            </p>

            <p className="text-secondary leading-relaxed">
              My work sits at the intersection of design and development —
              ensuring that the final product not only looks good, but actually
              works well in real-world scenarios.
            </p>

          </div>

          {/* RIGHT SIDE (TRAITS) */}
          <div className="grid grid-cols-2 gap-4">

            <div className="card">
              <p className="text-sm text-secondary mb-1">Approach</p>
              <p className="font-heading">Clarity First</p>
            </div>

            <div className="card">
              <p className="text-sm text-secondary mb-1">Focus</p>
              <p className="font-heading">Scalable UI</p>
            </div>

            <div className="card">
              <p className="text-sm text-secondary mb-1">Priority</p>
              <p className="font-heading">Performance</p>
            </div>

            <div className="card">
              <p className="text-sm text-secondary mb-1">Mindset</p>
              <p className="font-heading">User-Centric</p>
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}