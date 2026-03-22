import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { theme, NAV_LINKS } from "../../styles/theme";

// ─── Easing ──────────────────────────────────────────────────────────────────
const EASE_OUT_EXPO = [0.16, 1, 0.3, 1];

// ─── Logo ─────────────────────────────────────────────────────────────────────
function Logo() {
  const FONT = {
    fontFamily:    theme.fonts.display,
    fontSize:      "26px",
    lineHeight:    1,
    letterSpacing: "3px",
    display:       "inline-block",
    verticalAlign: "bottom",
  };

  return (
    <a
      href="#"
      style={{
        display:        "inline-flex",
        alignItems:     "flex-end",
        textDecoration: "none",
        userSelect:     "none",
      }}
    >
      <span style={{ ...FONT, color: theme.colors.textPrimary }}>ARCHIT</span>
      <span style={{ ...FONT, color: theme.colors.lime }}>.PATLE</span>
    </a>
  );
}

// ─── Desktop Nav Link ─────────────────────────────────────────────────────────
function NavLink({ label, href, isActive, onClick, delay }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={href}
      onClick={onClick}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: EASE_OUT_EXPO }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        fontFamily:     theme.fonts.mono,
        fontSize:       "10px",
        letterSpacing:  "2px",
        textTransform:  "uppercase",
        color:          isActive ? theme.colors.lime : hovered ? theme.colors.textPrimary : theme.colors.textMuted,
        textDecoration: "none",
        position:       "relative",
        padding:        "6px 0",
        transition:     `color ${theme.transitions.fast}`,
        whiteSpace:     "nowrap",
      }}
    >
      {label}

      {/* Active underline — slides between links via layoutId */}
      {isActive && (
        <motion.span
          layoutId="nav-underline"
          style={{
            position:   "absolute",
            bottom:     0,
            left:       0,
            right:      0,
            height:     "1px",
            background: theme.colors.lime,
          }}
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}

      {/* Hover underline */}
      {hovered && !isActive && (
        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          exit={{ scaleX: 0 }}
          style={{
            position:        "absolute",
            bottom:          0,
            left:            0,
            right:           0,
            height:          "1px",
            background:      theme.colors.borderHover,
            transformOrigin: "left",
          }}
        />
      )}
    </motion.a>
  );
}

// ─── CTA Button ───────────────────────────────────────────────────────────────
function HireButton({ delay = 0, large = false, onClick }) {
  return (
    <motion.a
      href="#contact"
      onClick={onClick}
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5, ease: EASE_OUT_EXPO }}
      whileHover={{ scale: 1.03, backgroundColor: theme.colors.limeHover }}
      whileTap={{ scale: 0.97 }}
      style={{
        display:        "inline-block",
        fontFamily:     theme.fonts.mono,
        fontSize:       large ? "12px" : "10px",
        letterSpacing:  "2.5px",
        textTransform:  "uppercase",
        fontWeight:     "700",
        color:          theme.colors.bg,
        background:     theme.colors.lime,
        padding:        large ? "14px 36px" : "10px 22px",
        textDecoration: "none",
        cursor:         "pointer",
        transition:     `background ${theme.transitions.fast}`,
      }}
    >
      Hire Me
    </motion.a>
  );
}

// ─── Hamburger ────────────────────────────────────────────────────────────────
function Hamburger({ isOpen, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      style={{
        background:     "none",
        border:         "none",
        cursor:         "pointer",
        padding:        "8px",
        display:        "flex",
        flexDirection:  "column",
        justifyContent: "center",
        gap:            "5px",
        width:          "36px",
        height:         "36px",
      }}
    >
      <motion.span
        animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
        style={{
          display:         "block",
          width:           "22px",
          height:          "1.5px",
          background:      theme.colors.textPrimary,
          transformOrigin: "center",
        }}
      />
      <motion.span
        animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.2 }}
        style={{
          display:    "block",
          width:      "22px",
          height:     "1.5px",
          background: theme.colors.textPrimary,
        }}
      />
      <motion.span
        animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
        style={{
          display:         "block",
          width:           "22px",
          height:          "1.5px",
          background:      theme.colors.textPrimary,
          transformOrigin: "center",
        }}
      />
    </button>
  );
}

// ─── Mobile Menu Overlay ──────────────────────────────────────────────────────
function MobileMenu({ isOpen, activeLink, onLinkClick }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
          animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
          exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
          style={{
            position:       "fixed",
            inset:          0,
            zIndex:         90,
            background:     theme.colors.bg,
            display:        "flex",
            flexDirection:  "column",
            alignItems:     "center",
            justifyContent: "center",
            gap:            "4px",
            overflow:       "hidden",
          }}
        >
          {/* Ghost BG text */}
          <div
            aria-hidden="true"
            style={{
              position:       "absolute",
              inset:          0,
              display:        "flex",
              alignItems:     "center",
              justifyContent: "center",
              fontFamily:     theme.fonts.display,
              fontSize:       "clamp(80px, 18vw, 150px)",
              fontWeight:     900,
              color:          theme.colors.textDim,
              lineHeight:     0.85,
              letterSpacing:  "-6px",
              textTransform:  "uppercase",
              pointerEvents:  "none",
              userSelect:     "none",
              textAlign:      "center",
            }}
          >
            MENU
          </div>

          {/* Lime divider line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.15, duration: 0.6, ease: EASE_OUT_EXPO }}
            style={{
              position:        "absolute",
              top:             "68px",
              left:            0,
              right:           0,
              height:          "1px",
              background:      `linear-gradient(90deg, transparent, ${theme.colors.lime}, transparent)`,
              transformOrigin: "center",
            }}
          />

          {/* Nav links */}
          <nav
            style={{
              position:      "relative",
              zIndex:        1,
              display:       "flex",
              flexDirection: "column",
              alignItems:    "center",
              gap:           "2px",
            }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 + i * 0.06, duration: 0.45, ease: EASE_OUT_EXPO }}
                onClick={() => onLinkClick(link.label)}
                whileHover={{ x: 8 }}
                style={{
                  fontFamily:     theme.fonts.display,
                  fontSize:       "clamp(36px, 8vw, 58px)",
                  letterSpacing:  "4px",
                  textTransform:  "uppercase",
                  color:          activeLink === link.label ? theme.colors.lime : "rgba(255,255,255,0.12)",
                  textDecoration: "none",
                  lineHeight:     1.1,
                  transition:     `color ${theme.transitions.fast}`,
                  display:        "flex",
                  alignItems:     "center",
                  gap:            "12px",
                }}
              >
                {activeLink === link.label && (
                  <span
                    style={{
                      width:      "20px",
                      height:     "1.5px",
                      background: theme.colors.lime,
                      display:    "inline-block",
                    }}
                  />
                )}
                {link.label}
              </motion.a>
            ))}
          </nav>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.4 }}
            style={{ position: "relative", zIndex: 1, marginTop: "28px" }}
          >
            <HireButton large onClick={() => onLinkClick(null)} />
          </motion.div>

          {/* Footer meta */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
            style={{
              position:      "absolute",
              bottom:        "28px",
              fontFamily:    theme.fonts.mono,
              fontSize:      "9px",
              letterSpacing: "2px",
              color:         theme.colors.textMuted,
              textTransform: "uppercase",
            }}
          >
            Portfolio · 2025
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Main Navbar ──────────────────────────────────────────────────────────────
export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const prefersReduced              = useReducedMotion();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section via IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const label = NAV_LINKS.find((l) => l.href === `#${entry.target.id}`)?.label;
            if (label) setActiveLink(label);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (label) => {
    if (label) setActiveLink(label);
    setMenuOpen(false);
  };

  return (
    <>
      {/* ── Navbar bar ── */}
      <motion.header
        initial={prefersReduced ? false : { y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: EASE_OUT_EXPO }}
        style={{
          position:             "fixed",
          top:                  0,
          left:                 0,
          right:                0,
          zIndex:               100,
          height:               theme.nav.height,
          background:           scrolled ? theme.colors.bgOverlay : "transparent",
          backdropFilter:       scrolled ? "blur(16px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
          borderBottom:         scrolled ? `1px solid ${theme.colors.border}` : "1px solid transparent",
          transition:           `background ${theme.transitions.smooth}, border-color ${theme.transitions.smooth}, backdrop-filter ${theme.transitions.smooth}`,
        }}
      >
        {/* Lime top-edge line on scroll */}
        <motion.div
          animate={{ scaleX: scrolled ? 1 : 0 }}
          transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
          style={{
            position:        "absolute",
            top:             0,
            left:            0,
            right:           0,
            height:          "2px",
            background:      `linear-gradient(90deg, transparent 0%, ${theme.colors.lime} 40%, ${theme.colors.lime} 60%, transparent 100%)`,
            transformOrigin: "center",
          }}
        />

        <div
          style={{
            maxWidth:       "1280px",
            margin:         "0 auto",
            padding:        "0 clamp(16px, 4vw, 48px)",
            height:         "100%",
            display:        "flex",
            alignItems:     "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.5, ease: EASE_OUT_EXPO }}
          >
            <Logo />
          </motion.div>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {NAV_LINKS.map((link, i) => (
              <NavLink
                key={link.label}
                label={link.label}
                href={link.href}
                isActive={activeLink === link.label}
                onClick={() => handleLinkClick(link.label)}
                delay={0.2 + i * 0.06}
              />
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <HireButton delay={0.65} />
            </div>
            <div className="md:hidden">
              <Hamburger isOpen={menuOpen} onClick={() => setMenuOpen((v) => !v)} />
            </div>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile menu ── */}
      <MobileMenu
        isOpen={menuOpen}
        activeLink={activeLink}
        onLinkClick={handleLinkClick}
      />
    </>
  );
}