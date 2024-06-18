"use client";

import Navlist from "./Navlist";
import style from "./Navbar.module.css";
import { useState } from "react";

const Navbar = () => {
  const [changeNav, setChangeNav] = useState(false);

  const changeNavColor = () => {
    if (window.scrollY > 50) {
      setChangeNav(true);
    } else {
      setChangeNav(false);
    }
  };

  if (typeof window != "undefined") {
    window.addEventListener("scroll", changeNavColor);
  }

  return (
    <>
      {changeNav ? (
        <div
          className={`${style.NavBar} ${style.navMask}`}
          style={{
            clipPath: changeNav
              ? "polygon(0px 0px, 100% 0px, 100% 100%, 0px 100%)"
              : "polygon(0px 0px, 100% 0px, 100% 0px, 0px 0px)",
          }}
        >
          <div className={style.NavBarName}>
            <h1>@ Ankit</h1>
          </div>
          <Navlist />
        </div>
      ) : (
        <div className={style.NavBar}>
          <div className={style.NavBarName}>
            <h1>@ Ankit</h1>
          </div>
          <Navlist />
        </div>
      )}
    </>
  );
};

export default Navbar;
