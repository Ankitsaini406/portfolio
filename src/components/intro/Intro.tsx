"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import style from "./intro.module.css";

const Introduction = ({children} : {children : React.ReactNode}) => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      }).from(["#title-1", "#title-2", "#title-3"], {
        opacity: 0,
        y: "+=30",
        stagger: 0.5,
      })
      .to(["#title-1", "#title-2", "#title-3"], {
        opacity: 1,
        y: "-=30",
        delay: 0.3,
        stagger: 0.5,
      })
      .to("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
      }).from('#children', {
        opacity: 0,
        duration: 0.5,
      });

    }, comp);

    return () => ctx.revert();
  }, []);

  return (
      <div ref={comp}>
        <div id="intro-slider" className={style.Intropage}>
          <h1 id="title-1" className={style.text}>
            Web Devloper
          </h1>
          <h1 id="title-2" className={style.text}>
            App Devloper
          </h1>
          <h1 id="title-3" className={style.text}>
            Full Stack Devloper
          </h1>
        </div>
        <div id="children">
        {children}
        </div>
        </div>
  );
};

export default Introduction;
