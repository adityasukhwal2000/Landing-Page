"use client";

import { useTheme } from "../ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <section className="toggle-btn">
      <div className="main-container">
        <button
          onClick={toggleTheme}
          aria-label="Toggle Theme"
          className="theme-btn"
        >
          {theme === "light" ? (
            <FaMoon size={24} />
          ) : (
            <FaSun className="sun" size={24} />
          )}
        </button>
      </div>
    </section>
  );
};

export default ThemeToggleButton;
