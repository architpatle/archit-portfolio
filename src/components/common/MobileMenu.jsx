const sections = ["about", "experience", "projects", "contact"];

export default function MobileMenu({ menuOpen, setMenuOpen }) {
  return (
    <>
      {/* OVERLAY */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[90]"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* SLIDE-IN MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-bg border-l border-border 
        transform transition-transform duration-300 z-[100]
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="relative flex flex-col items-center justify-center h-full gap-8 text-lg text-secondary">

          {/* CLOSE BUTTON (backup UX) */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-primary text-xl"
          >
            ✕
          </button>

          {/* NAV LINKS */}
          {sections.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setMenuOpen(false)}
              className="hover:text-primary transition"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}

          {/* CTA */}
          <a
            href="/resume.pdf"
            target="_blank"
            className="px-4 py-2 border border-border rounded-lg hover:border-accent hover:text-accent transition"
          >
            Hire Me
          </a>

        </div>
      </div>
    </>
  );
}