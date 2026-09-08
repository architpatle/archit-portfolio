
import { useEffect, useLayoutEffect, useRef, useState } from "react";

import { gsap } from "gsap";

import logo from "../../assets/images/logo.png";

const sections = [
  "about",
  "experience",
  "projects",
  "skills",
  "education",
  "contact",
];

export default function Navbar({ menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  const navbarRef = useRef(null);

  /* =========================
     NAVBAR INTRO ANIMATION
  ========================= */

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const logoElement = navbarRef.current.querySelector(
        "[data-navbar='logo']"
      );

      const desktopNav = navbarRef.current.querySelector(
        "[data-navbar='desktop-nav']"
      );

      const rightSide = navbarRef.current.querySelector(
        "[data-navbar='right']"
      );

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      /* Ensure everything starts visible */
      gsap.set(
        [logoElement, desktopNav, rightSide],
        {
          clearProps: "opacity,transform",
        }
      );

      /* LOGO */
      tl.from(logoElement, {
        opacity: 0,
        y: -12,
        duration: 0.4,
      });

      /* DESKTOP NAVIGATION */
      tl.from(
        desktopNav,
        {
          opacity: 0,
          y: -10,
          duration: 0.4,
        },
        "-=0.2"
      );

      /* RIGHT SIDE */
      tl.from(
        rightSide,
        {
          opacity: 0,
          y: -10,
          duration: 0.4,
        },
        "-=0.25"
      );

      /* Clean animation styles after completion */
      tl.set(
        [logoElement, desktopNav, rightSide],
        {
          clearProps: "opacity,transform",
        }
      );
    }, navbarRef);

    return () => ctx.revert();
  }, []);

  /* =========================
     SCROLL + SCROLL SPY
  ========================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const aboutSection = document.getElementById("about");

      /* HERO SECTION ACTIVE */
      if (
        aboutSection &&
        window.scrollY < aboutSection.offsetTop - 200
      ) {
        setActive("");
        return;
      }

      /* OTHER SECTIONS */
      for (const id of sections) {
        const section = document.getElementById(id);

        if (!section) continue;

        const top = section.offsetTop - 140;
        const bottom = top + section.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < bottom
        ) {
          setActive(id);
          break;
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================
     CLOSE MENU ON RESIZE
  ========================= */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setMenuOpen]);

  return (
    <nav
      ref={navbarRef}
      className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-md border-b border-border"
          : "bg-bg/80 backdrop-blur-md border-b border-border"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <a
          href="#"
          data-navbar="logo"
          className="flex items-center gap-3"
        >
          <img
            src={logo}
            alt="Archit Patle Logo"
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* DESKTOP NAV */}
        <div
          data-navbar="desktop-nav"
          className="hidden md:flex items-center gap-10 text-sm text-secondary"
        >
          {sections.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`transition ${
                active === item
                  ? "text-accent"
                  : "hover:text-primary"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div
          data-navbar="right"
          className="flex items-center gap-4"
        >

          {/* CTA */}
          <a
            href="/Archit_Patle_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-block px-4 py-2 text-sm rounded-lg border border-border hover:border-accent hover:text-accent transition"
          >
            View Resume
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative z-[110] w-9 h-9 flex items-center justify-center"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
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
                  menuOpen
                    ? "opacity-0"
                    : "top-1/2 -translate-y-1/2"
                }`}
              />

              {/* BOTTOM */}
              <span
                className={`absolute left-0 w-full h-[1.6px] bg-primary transition-all duration-300 ease-in-out ${
                  menuOpen
                    ? "top-1/2 -translate-y-1/2 -rotate-[48deg] scale-x-110"
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
  
