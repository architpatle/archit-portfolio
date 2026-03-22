// ─── Theme N · The Kinetic Type ───────────────────────────────────────────────
// Palette: Black + Acid Lime
// Typography: Bebas Neue (display) + DM Mono (body/ui)

export const theme = {
  colors: {
    bg:           "#0F0F0F",
    bgElevated:   "#161616",
    bgOverlay:    "rgba(15,15,15,0.96)",
    lime:         "#E8FF47",
    limeHover:    "#F4FF7A",
    limeDim:      "rgba(232,255,71,0.12)",
    limeBorder:   "rgba(232,255,71,0.25)",
    white:        "#FFFFFF",
    textPrimary:  "#F5F5F0",
    textMuted:    "rgba(255,255,255,0.28)",
    textDim:      "rgba(255,255,255,0.08)",
    border:       "rgba(255,255,255,0.06)",
    borderHover:  "rgba(255,255,255,0.14)",
  },
  fonts: {
    display: "'Bebas Neue', sans-serif",
    mono:    "'DM Mono', monospace",
  },
  nav: {
    height:     "68px",
    heightMob:  "60px",
  },
  transitions: {
    fast:   "0.15s ease",
    smooth: "0.3s cubic-bezier(0.22, 1, 0.36, 1)",
    slow:   "0.6s cubic-bezier(0.22, 1, 0.36, 1)",
  },
};

export const NAV_LINKS = [
  { label: "About",          href: "#about" },
  { label: "Experience",     href: "#experience" },
  { label: "Skills",         href: "#skills" },
  { label: "Projects",       href: "#projects" },
  { label: "Education",      href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact",        href: "#contact" },
];
