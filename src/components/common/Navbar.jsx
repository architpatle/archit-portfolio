import useTheme from "../../hooks/useTheme";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="font-heading text-lg">
          Archit Patle
        </h1>

        <div className="flex items-center gap-6 text-sm text-secondary">
          <button onClick={toggleTheme}>
            {theme === "light" ? "Dark" : "Light"}
          </button>
        </div>

      </div>
    </nav>
  );
}