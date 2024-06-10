"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import style from "./intro.module.css";

const Introduction = ({ children }: { children: React.ReactNode }) => {
  const comp = useRef(null);
  const [value, setValue] = useState(0);
  const [percent, setPercent] = useState(value);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 1);
    }, 40);
  }, []);

  useEffect(() => {
    setPercent(Math.min(100, Math.max(value, 0)));
    if (value >= 100) {
      setSuccess(true);
    }
  }, [value]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        yPercent: "+100",
        duration: 1,
        delay: 0.3,
      })
        .from("#percent", {
          bottom: 0,
          duration: 1.3,
          opacity: 1,
        })
        .to("#percent", {
          top: 0,
          duration: 1.3,
          opacity: 0,
        })
        .to("#intro-slider", {
          yPercent: "-100",
          duration: 0.5,
        })
        .from("#children", {
          opacity: 0,
          duration: 1,
        });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={comp}>
      <div id="intro-slider" className={style.Intropage}>
        <div className={style.cricule}>
          <div className={style.criculeColor} style={{ height: `${percent}%` }} />
            <p id="percent" className={style.criculeNumber}>
              {`${percent.toFixed()}`}
            </p>
        </div>
      </div>
      <div id="children">{children}</div>
    </div>
  );
};

export default Introduction;
