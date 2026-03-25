import { useState, useEffect } from "react";
import Navbar from "./components/common/Navbar";
import MobileMenu from "./components/common/MobileMenu";
import ThemeToggle from "./components/common/ThemeToggle";
import Hero from "./components/Hero/Hero";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <div className="bg-bg text-primary min-h-screen">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <ThemeToggle />

      <main>
        {/* Sections */}
        <Hero />
      </main>
    </div>
  );
}

export default App;