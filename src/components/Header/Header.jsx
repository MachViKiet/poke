import ThemeToggleButton from "../Theme/Theme";
import styles from "./Header.module.css";

const Header = ({ toggleTheme, themeMode }) => {
  return (
    <header className={styles.header}>
      <ThemeToggleButton themeMode={themeMode} toggleTheme={toggleTheme} />

      <div className="logo">
        <img src="logo.png" alt="Pokedex Logo" />
      </div>
      <div className="github-icon">
        <svg>{}</svg>
      </div>
    </header>
  );
};

export default Header;
