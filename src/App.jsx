import Navbar from "./components/Navbar";
import { theme } from "./styles/theme";

// ─── Placeholder section component ───────────────────────────────────────────
function PlaceholderSection({ id, label }) {
  return (
    <section
      id={id}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderBottom: `1px solid ${theme.colors.border}`,
        position: "relative",
      }}
    >
      {/* Ghost label */}
      <span
        style={{
          fontFamily: theme.fonts.display,
          fontSize: "clamp(60px, 14vw, 140px)",
          fontWeight: 900,
          color: theme.colors.textDim,
          letterSpacing: "-4px",
          textTransform: "uppercase",
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        {label}
      </span>

      {/* Coming label */}
      <span
        style={{
          position: "absolute",
          fontFamily: theme.fonts.mono,
          fontSize: "10px",
          letterSpacing: "3px",
          textTransform: "uppercase",
          color: theme.colors.textMuted,
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          whiteSpace: "nowrap",
        }}
      >
        // Section coming soon
      </span>
    </section>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div style={{ background: theme.colors.bg, minHeight: "100vh" }}>
      <Navbar />

      <main>
        {/* ── Hero placeholder — replace with <Hero /> ── */}
        <PlaceholderSection id="hero" label="Hero" />

        {/* ── Sections — each will be its own component ── */}
        <PlaceholderSection id="about" label="About" />
        <PlaceholderSection id="experience" label="Experience" />
        <PlaceholderSection id="skills" label="Skills" />
        <PlaceholderSection id="projects" label="Projects" />
        <PlaceholderSection id="education" label="Education" />
        <PlaceholderSection id="certifications" label="Certifications" />
        <PlaceholderSection id="contact" label="Contact" />
      </main>
    </div>
  );
}
