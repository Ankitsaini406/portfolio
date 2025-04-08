"use client";

import { useState } from "react";
import Navlist from "./Navlist";

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  const openNavBar = () => {
    setOpenNav(!openNav);
  };

  return (
    <div className={`sticky top-0 flex items-center justify-between p-4 text-[var(--main-color)] z-20 transition-all duration-300`}>
      <div className="font-bold text-lg">@ Ankit</div>
      <Navlist open={openNavBar} isopen={openNav} />
    </div>
  );
}
