import resume from "../../../public/Archit_Patle_Resume.pdf";

const sections = [
  "about",
  "experience",
  "projects",
  "skills",
  "education",
  "contact",
];

export default function MobileMenu({ menuOpen, setMenuOpen }) {
  return (
    <>
      {/* OVERLAY */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[90]
        transition-opacity duration-300
        ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      {/* MENU */}
      <div
        className={`fixed top-0 right-0 h-screen w-[82%] max-w-[340px]
        bg-[#0E0E10]/95 backdrop-blur-2xl
        border-l border-white/10
        z-[100]
        transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >

        <div className="relative flex flex-col h-full px-8 py-8">

          {/* TOP BAR */}
          <div className="flex items-center justify-between mb-16">

            <span className="text-sm tracking-[0.35em] text-white font-medium">
              MENU
            </span>

            {/* CLOSE */}
            <button
              onClick={() => setMenuOpen(false)}
              className="w-11 h-11 rounded-full border border-white/10
              flex items-center justify-center text-white
              hover:border-accent hover:text-accent
              transition-all duration-300"
            >
              ✕
            </button>

          </div>

          {/* NAV LINKS */}
          <div className="flex flex-col gap-8">

            {sections.map((item, index) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                className="group flex items-center justify-between
                text-[1.15rem] text-white/80
                hover:text-white transition-all duration-300"
                style={{
                  transitionDelay: `${index * 40}ms`,
                }}
              >

                <span className="capitalize">
                  {item}
                </span>

                <span
                  className="opacity-0 translate-x-[-10px]
                  group-hover:opacity-100 group-hover:translate-x-0
                  text-accent transition-all duration-300"
                >
                  ↗
                </span>

              </a>
            ))}

          </div>

          {/* BOTTOM CTA */}
          <div className="mt-10 pt-10">

            <a
              href={resume}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center
              px-5 py-4 rounded-2xl
              bg-white/5 border border-white/10
              text-white
              hover:border-accent hover:text-accent
              transition-all duration-300"
            >
              View Resume
            </a>

          </div>

        </div>
      </div>
    </>
  );
}