export default function Footer() {
  return (
    <footer className="py-10 border-t border-border mt-20">

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-secondary">

        {/* LEFT */}
        <p className="font-heading text-primary">
          Archit Patle
        </p>

        {/* CENTER */}
        <p>
          © {new Date().getFullYear()} All rights reserved
        </p>

        {/* RIGHT */}
        <div className="flex gap-6">

          <a
            href="https://www.linkedin.com/in/archit-patle"
            target="_blank"
            className="hover:text-primary transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            className="hover:text-primary transition"
          >
            GitHub
          </a>

        </div>

      </div>

    </footer>
  );
}