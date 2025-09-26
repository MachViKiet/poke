import styles from "./Header.module.css";
import { useState } from "react";
import { useTheme } from "../Theme/Theme";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <div className={styles.themeToggle}>
        <label
          htmlFor="themeSwitch"
          className={styles.toggle}
          aria-label="Switch-Theme"
        >
          <input
            type="checkbox"
            id="themeSwitch"
            checked={theme === "dark"}
            onChange={toggleTheme}
            className={styles.input}
          />
          <span className={styles.track}></span>
          <span className={styles.thumb}>
            <img
              src={theme === "dark" ? "/moon.png" : "/sun.png"}
              alt=""
              width="70%"
              height="70%"
            />
          </span>
        </label>
      </div>

      <div className={styles.logoContainer}>
        <img className={styles.logo} src="/logo.png" alt="Pokedex Logo" />
      </div>

      <div className={styles.githubIcon}>
        <a
          href="https://github.com/thiagosampaiog/pokedex"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <svg width="100%" height="100%" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.304 3.492.997.108-.775.418-1.304.762-1.604-2.665-.304-5.466-1.334-5.466-5.93 0-1.31.469-2.38 1.236-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.624-5.479 5.921.43.372.823 1.103.823 2.222 0 1.604-.015 2.896-.015 3.293 0 .32.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z"
            />
          </svg>
        </a>
      </div>
    </header>
  );
};

export default Header;
