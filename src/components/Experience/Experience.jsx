import Container from "../common/Container";
import SectionHeader from "../common/SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <Container>

        <SectionHeader title="Experience" />

        {/* MAIN BLOCK */}
        <div className="max-w-7xl">

          <div className="border border-border rounded-2xl p-8 md:p-10 relative overflow-hidden">

            {/* SUBTLE ACCENT LINE */}
            <div className="absolute left-0 top-0 h-full w-[2px] bg-accent opacity-60"></div>

            {/* HEADER */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">

              <div>
                <h3 className="text-2xl font-heading">
                  Frontend Developer
                </h3>
                <p className="text-secondary text-sm">
                  Royals Webtech Pvt. Ltd.
                </p>
              </div>

              <span className="text-sm text-secondary">
                July 2025 — Present
              </span>

            </div>

            {/* STRONG LINE */}
            <p className="text-lg leading-relaxed mb-8 max-w-2xl">
              Focused on building scalable frontend systems and delivering
              clean, high-performance user interfaces for real-world products.
            </p>

            {/* IMPACT GRID */}
            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <p className="text-sm text-secondary mb-1">What I built</p>
                <p className="font-heading">
                  Reusable component systems using React
                </p>
              </div>

              <div>
                <p className="text-sm text-secondary mb-1">What improved</p>
                <p className="font-heading">
                  Faster load times & smoother UI interactions
                </p>
              </div>

              <div>
                <p className="text-sm text-secondary mb-1">How I worked</p>
                <p className="font-heading">
                  Close collaboration with design & product teams
                </p>
              </div>

              <div>
                <p className="text-sm text-secondary mb-1">Focus area</p>
                <p className="font-heading">
                  Performance, scalability & usability
                </p>
              </div>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}