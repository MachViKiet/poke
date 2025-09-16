import { useState, useMemo } from "react";
import Header from "../components/Header/Header";
import Filters from "../components/Filters/Filters";
import PokemonGrid from "../components/PokemonContainer/PokemonGrid";
import Footer from "../components/Footer/Footer";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const Home = () => {
  const [mode, setMode] = useState("light");

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Header themeMode={mode} toggleTheme={toggleTheme} />
        <Filters />
        <PokemonGrid />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Home;
