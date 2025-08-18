"use client";

import { FaArrowUp } from "react-icons/fa6";

const ScrollButton = () => {

    const scrollToTop = () => {
        if (typeof window !== "undefined") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <button
            className="fixed bottom-4 right-4 p-3 rounded-full z-999 transition-transform duration-300 hover:scale-110 cursor-pointer mix-blend-difference bg-foreground"
            onClick={scrollToTop}
        >
            <FaArrowUp className="text-white text-lg" />
        </button>

    );
};

export default ScrollButton;