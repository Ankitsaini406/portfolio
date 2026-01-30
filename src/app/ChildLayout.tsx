"use client";

import React, { useState, useEffect } from "react";
import SplashScreen from "./SplashScreen";
import Template from "./template";

export default function ChildLayOut({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Senior Touch: Check if user has already seen the splash this session
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");
    if (hasSeenSplash) {
      setLoading(false);
    }
  }, []);

  const handleComplete = () => {
    sessionStorage.setItem("hasSeenSplash", "true");
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <SplashScreen onComplete={handleComplete} />
      ) : (
        /* The Template handles the 'entrance' after the splash is gone */
        <Template>
          {children}
        </Template>
      )}
    </>
  );
}