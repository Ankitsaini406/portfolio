"use client";

import Navlist from "./Navlist";
import style from '@/styles/Navbar.module.css';
import { useEffect, useState } from "react";
import useUserSession from "@/lib/hook/useUserdata";

const Navbar = () => {
  const [changeNav, setChangeNav] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const [sessionUser, loading] = useUserSession();
  const [isMounted, setIsMounted] = useState(false);
  const [isHomePage, setIsHomePage] = useState(false);

  const changeNavColor = () => {
    if (window.scrollY > 50) {
      setChangeNav(true);
    } else {
      setChangeNav(false);
    }
  };

  const openNavBar = () => {
    setOpenNav(!openNav);
  }

  if (typeof window != "undefined") {
    window.addEventListener("scroll", changeNavColor);
    window.location.pathname === "/";
  }

  const homePage = window.location.pathname === "/";

  useEffect(() => {
    setIsMounted(true);
  }, [homePage]);

  useEffect(() => {
    // if (isMounted) {
      setIsHomePage(window.location.pathname === "/");
    // }
  }, [homePage]);

  return (
    <>
      {changeNav ? (
        <div
          className={`${style.NavBar} ${style.navMask}`}
        // style={{
        //   clipPath: changeNav
        //     ? "polygon(0px 0px, 100% 0px, 100% 100%, 0px 100%)"
        //     : "polygon(0px 0px, 100% 0px, 100% 0px, 0px 0px)",
        // }}
        >
          <div className={style.NavBarName}>
            <h1>@ Ankit</h1>
          </div>
          <Navlist open={openNavBar} isopen={openNav} sessionUser={sessionUser} loading={loading} isAdmin={sessionUser?.isAdmin} isHomePage={isHomePage} />
        </div>
      ) : (
        <div className={style.NavBar}>
          <div className={style.NavBarName}>
            <h1>@ Ankit</h1>
          </div>
          <Navlist open={openNavBar} isopen={openNav} sessionUser={sessionUser} loading={loading} isAdmin={sessionUser?.isAdmin} isHomePage={isHomePage}/>
        </div>
      )}
    </>
  );
};

export default Navbar;
