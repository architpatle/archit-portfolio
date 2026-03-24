import { useEffect, useState } from "react";

const sections = ["about", "experience", "projects", "contact"];

export default function Navbar({ menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  // Scroll + Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 120;
          const bottom = top + section.offsetHeight;

          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setMenuOpen]);

  return (
    <nav
      className={`sticky top-0 z-30 transition-all duration-300 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <h1 className="font-heading text-lg tracking-tight">
          Archit Patle
        </h1>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-10 text-sm text-secondary">
          {sections.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`transition ${
                active === item ? "text-accent" : "hover:text-primary"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* CTA */}
          <a
            href="/resume.pdf"
            target="_blank"
            className="hidden md:inline-block px-4 py-2 text-sm rounded-lg border border-border hover:border-accent hover:text-accent transition"
          >
            Hire Me
          </a>

          {/* PREMIUM ASYMMETRIC HAMBURGER */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative z-[110] w-9 h-9 flex items-center justify-center"
          >
            <div className="relative w-7 h-5">

              {/* TOP */}
              <span
                className={`absolute left-0 w-full h-[1.6px] bg-primary transition-all duration-300 ease-in-out ${
                  menuOpen
                    ? "top-1/2 -translate-y-1/2 rotate-[42deg] scale-x-110"
                    : "top-0"
                }`}
              />

              {/* MIDDLE */}
              <span
                className={`absolute left-0 w-full h-[1.6px] bg-primary transition-all duration-200 ${
                  menuOpen ? "opacity-0" : "top-1/2 -translate-y-1/2"
                }`}
              />

              {/* BOTTOM */}
              <span
                className={`absolute left-0 w-full h-[1.6px] bg-primary transition-all duration-300 ease-in-out ${
                  menuOpen
                    ? "top-1/2 -translate-y-1/2 -rotate-[48deg] scale-x-90"
                    : "bottom-0"
                }`}
              />

            </div>
          </button>

        </div>
      </div>
    </nav>
  );
}