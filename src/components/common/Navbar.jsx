import { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png"
const sections = ["about", "experience", "projects", "skills", "education", "contact"];

export default function Navbar({ menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  // Scroll + Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const aboutSection = document.getElementById("about");

      // HERO SECTION ACTIVE
      if (aboutSection && window.scrollY < aboutSection.offsetTop - 200) {
        setActive("");
        return;
      }

      // OTHER SECTIONS
      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (section) {
          const top = section.offsetTop - 140;
          const bottom = top + section.offsetHeight;

          if (
            window.scrollY >= top &&
            window.scrollY < bottom
          ) {
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
      className={`fixed top-0 left-0 w-full top-0 z-30 bg-bg/80 backdrop-blur-md border-b border-border transition-all duration-300 ${scrolled
        ? "bg-bg/80 backdrop-blur-md border-b border-border"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <a
          href="#"
          className="flex items-center gap-3"
        >

          <img
            src={logo}
            alt="Archit Patle Logo"
            className="h-10 w-auto object-contain"
          />

          {/* <div className="hidden sm:flex flex-col leading-none">

            <span className="text-sm tracking-[0.35em] text-white font-medium">
              ARCHIT
            </span>

            <span className="text-[11px] tracking-[0.45em] text-accent mt-1">
              PATLE
            </span>

          </div> */}

        </a>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-10 text-sm text-secondary">
          {sections.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`transition ${active === item ? "text-accent" : "hover:text-primary"
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
            href="/Archit_Patle_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-block px-4 py-2 text-sm rounded-lg border border-border hover:border-accent hover:text-accent transition"
          >
            View Resume
          </a>

          {/* PREMIUM ASYMMETRIC HAMBURGER */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative z-[110] w-9 h-9 flex items-center justify-center"
          >
            <div className="relative w-7 h-5">

              {/* TOP */}
              <span
                className={`absolute left-0 w-full h-[1.6px] bg-primary transition-all duration-300 ease-in-out ${menuOpen
                  ? "top-1/2 -translate-y-1/2 rotate-[42deg] scale-x-110"
                  : "top-0"
                  }`}
              />

              {/* MIDDLE */}
              <span
                className={`absolute left-0 w-full h-[1.6px] bg-primary transition-all duration-200 ${menuOpen ? "opacity-0" : "top-1/2 -translate-y-1/2"
                  }`}
              />

              {/* BOTTOM */}
              <span
                className={`absolute left-0 w-full h-[1.6px] bg-primary transition-all duration-300 ease-in-out ${menuOpen
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