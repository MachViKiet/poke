import React from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const ThemeToggleButton = ({ toggleTheme, themeMode }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
        {themeMode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
};

export default ThemeToggleButton;
