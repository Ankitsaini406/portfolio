"use client";

import { Variants, motion, useAnimationControls, useScroll } from "framer-motion";
import { useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";

const ScrollToTopContainerVariants: Variants = {
    hide: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
};

const ScrollButton = () => {
    const { scrollYProgress } = useScroll();
    const controls = useAnimationControls();

    useEffect(() => {
        return scrollYProgress.on("change", (latestValue) => {
            if (latestValue > 0.1) {
                controls.start("show");
            } else {
                controls.start("hide");
            }
        });
    }, [scrollYProgress, controls]);

    const scrollToTop = () => {
        if (typeof window !== "undefined") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <motion.button
            className="fixed bottom-4 right-4 p-3 rounded-full z-[999] transition-transform duration-300 hover:scale-110 cursor-pointer"
            variants={ScrollToTopContainerVariants}
            initial="hide"
            animate={controls}
            onClick={scrollToTop}
        >
            <FaArrowUp className="text-white text-lg" />
        </motion.button>

    );
};

export default ScrollButton;