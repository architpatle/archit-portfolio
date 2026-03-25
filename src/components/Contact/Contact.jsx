import Container from "../common/Container";

export default function Contact() {
  return (
    <section id="contact" className="py-28 md:py-36">
      <Container>

        <div className="flex justify-center">

          {/* CARD */}
          <div className="max-w-4xl w-full text-center 
                          border border-border rounded-2xl 
                          bg-surface transition-all duration-300 
                         hover:-translate-y-1 hover:border-accent
                          p-10 md:p-12">

            {/* HEADING */}
            <h2 className="text-3xl md:text-5xl font-heading leading-tight mb-6">
              Let’s build something meaningful together.
            </h2>

            {/* SUBTEXT */}
            <p className="text-secondary mb-10 leading-relaxed">
              Whether it’s a project, collaboration, or just a conversation —
              I’m always open to connecting.
            </p>

            {/* CTA */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">

              <a
                href="mailto:architpatle06@gmail.com"
                className="px-6 py-3 rounded-lg bg-accent text-white text-sm hover:opacity-90 transition"
              >
                architpatle06@gmail.com
              </a>

              <a
                href="https://www.linkedin.com/in/archit-patle"
                target="_blank"
                className="px-6 py-3 rounded-lg border border-border text-sm hover:border-accent hover:text-accent transition"
              >
                LinkedIn Profile
              </a>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}