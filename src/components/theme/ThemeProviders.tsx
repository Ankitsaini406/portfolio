"use client";

import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";

const ThemeProviders = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }
  return <ThemeProvider >{children}</ThemeProvider>;
};

export default ThemeProviders;
