"use client";

import React, { useState } from "react";
import SplashScreen from "./SplashScreen";

export default function ChildLayOut({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <SplashScreen onComplete={() => setLoading(false)} />}
      {!loading && children}
    </>
  );
}
