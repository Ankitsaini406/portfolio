"use client";

import { Variants, motion, useAnimationControls, useScroll } from "framer-motion";
import { useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";
import style from './Sctollbutton.module.css';

const ScrollToTopContainerVariants: Variants = {
    hide: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
};

const ScrollButton = () => {
    const { scrollYProgress } = useScroll();
    const controls = useAnimationControls();

    useEffect(() => {
        return scrollYProgress.on('change', (latestValue) => {
            if (latestValue > 0.1) {
                controls.start('show');
            } else {
                controls.start('hide');
            }
        });
    });

    const isBrowser = () => typeof window !== 'undefined';
    const scrollToTop = () => {
        if (!isBrowser) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <motion.button className={style.scrollbutton} variants={ScrollToTopContainerVariants} initial="hide" animate={controls} onClick={scrollToTop}>
            <FaArrowUp />
        </motion.button>
    );
};

export default ScrollButton;