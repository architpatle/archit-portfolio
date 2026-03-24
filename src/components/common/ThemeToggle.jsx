import useTheme from "../../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed right-4 top-1/2 -translate-y-1/2 z-50 
                 w-10 h-10 flex items-center justify-center 
                 rounded-full border border-border 
                 bg-surface text-primary 
                 hover:border-accent hover:text-accent 
                 transition"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}