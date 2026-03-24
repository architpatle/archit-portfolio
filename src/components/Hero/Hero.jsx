import { useRef } from "react";
import { motion, useInView } from "motion/react";
import styles from "./Hero.module.css";

// ─── Animation helpers ────────────────────────────────────────────────────────
const EXPO = [0.16, 1, 0.3, 1];

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 24 },
  animate:    { opacity: 1, y: 0  },
  transition: { delay, duration: 0.65, ease: EXPO },
});

const fadeIn = (delay = 0) => ({
  initial:    { opacity: 0 },
  animate:    { opacity: 1 },
  transition: { delay, duration: 0.5, ease: EXPO },
});

// ─── Data ─────────────────────────────────────────────────────────────────────
const STACK = [
  "React", "Next.js", "Node.js", "TypeScript",
  "PostgreSQL", "MongoDB", "AWS", "Docker",
  "Tailwind CSS", "REST APIs", "Git", "Linux",
];

const NAV_LINKS = [
  { label: "Work",    href: "#projects"  },
  { label: "About",   href: "#about"     },
  { label: "Skills",  href: "#skills"    },
  { label: "Contact", href: "#contact"   },
];

// ─── Top Bar ──────────────────────────────────────────────────────────────────
function TopBar() {
  return (
    <motion.div className={styles.topbar} {...fadeIn(0.1)}>
      {/* Terminal prompt — left */}
      <div className={styles.prompt}>
        <span className={styles.promptArrow}>➜</span>
        <span className={styles.promptPath}>~/archit-patle</span>
        <span className={styles.cursor} aria-hidden="true" />
      </div>

      {/* Nav — right */}
      <nav className={styles.topNav}>
        {NAV_LINKS.map((link) => (
          <a key={link.label} href={link.href} className={styles.topNavLink}>
            {link.label}
          </a>
        ))}
        <a href="#contact" className={styles.topNavCta}>Hire Me</a>
      </nav>
    </motion.div>
  );
}

// ─── Headline ─────────────────────────────────────────────────────────────────
function Headline() {
  return (
    <motion.h1 className={styles.headline} {...fadeUp(0.28)}>
      {/* ARCHIT.PATLE — name line */}
      <span className={styles.hlName}>
        <span className={styles.hlArchit}>Archit</span>
        <span className={styles.hlDot}>.</span>
        <span className={styles.hlPatle}>Patle</span>
      </span>

      {/* Builds the WEB. */}
      <span className={styles.hlRest}>
        Builds the{" "}
        <span className={styles.hlWeb}>Web.</span>
      </span>
    </motion.h1>
  );
}

// ─── Ticker ───────────────────────────────────────────────────────────────────
function Ticker() {
  // Duplicate items for seamless infinite loop
  const items = [...STACK, ...STACK];

  return (
    <div className={styles.tickerWrap} aria-hidden="true">
      <div className={styles.tickerTrack}>
        {items.map((tech, i) => (
          <span key={i} className={styles.tickItem}>{tech}</span>
        ))}
      </div>
    </div>
  );
}

// ─── Main Hero ────────────────────────────────────────────────────────────────
export default function Hero() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="hero" className={styles.section} ref={ref}>

      {/* Backgrounds */}
      <div className={styles.gridBg}    aria-hidden="true" />
      <div className={styles.accentLine} aria-hidden="true" />
      <div className={styles.ghostBg}   aria-hidden="true">AP</div>

      {/* Top bar with terminal prompt + nav */}
      <TopBar />

      {/* Main content */}
      <div className={styles.body}>

        {/* Eyebrow */}
        <motion.div className={styles.eyebrow} {...fadeUp(0.18)}>
          <span className={styles.eyebrowLine} />
          // Introducing
        </motion.div>

        {/* Headline */}
        <Headline />

        {/* Description */}
        <motion.p className={styles.desc} {...fadeUp(0.4)}>
          Full Stack Developer crafting{" "}
          <span className={styles.descEm}>fast</span>,{" "}
          <span className={styles.descEm}>scalable</span> web
          experiences — from database architecture to
          pixel-perfect interfaces. Based in India.{" "}
          <span className={styles.descEm}>Open to work.</span>
        </motion.p>

        {/* CTA Buttons — below description */}
        <motion.div className={styles.ctaRow} {...fadeUp(0.52)}>
          <motion.a
            href="#projects"
            className={styles.btnPrimary}
            whileTap={{ scale: 0.97 }}
          >
            View Work →
          </motion.a>
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className={styles.btnSecondary}
            whileTap={{ scale: 0.97 }}
          >
            Resume ↗
          </motion.a>
        </motion.div>

      </div>

      {/* Bottom scrolling tech stack ticker */}
      <Ticker />

    </section>
  );
}