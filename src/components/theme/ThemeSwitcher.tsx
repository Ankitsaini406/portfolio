"use client";

import { useTheme } from "next-themes";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  },[]);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {theme === "light" ? (
        <button onClick={() => setTheme("dark")}>
          <DarkModeIcon />
        </button>
      ) : (
        <button onClick={() => setTheme("light")}>
          <LightModeIcon />
        </button>
      )}
    </>
  );
};

export default ThemeSwitcher;
