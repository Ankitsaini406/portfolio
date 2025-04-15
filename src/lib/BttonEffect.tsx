"use client";

import { motion } from "framer-motion";

export function BtnHover({label}: {label: string;}) {
    return (
        <div className="cursor-pointer overflow-hidden">
            <motion.div
                className="relative w-full h-full"
                animate={{ top: 0 }}
                transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            >
                <div
                    className="w-full h-full text-white hover:[&>.perspectiveText]:rotate-x-90 hover:[&>.perspectiveText>p:nth-child(1)]:translate-y-[-100%] hover:[&>.perspectiveText>p:nth-child(1)]:opacity-0 hover:[&>.perspectiveText>p:nth-child(2)]:opacity-100"
                >
                    <PerspectiveText label={label} />
                </div>
            </motion.div>
        </div>
    );
}

function PerspectiveText({ label }: { label: string }) {
    return (
        <div className="perspectiveText w-full h-full flex flex-col justify-center items-center transition-transform duration-[750ms] ease-[cubic-bezier(0.76,0,0.24,1)] transform-3d relative">
            <p className="transition-all duration-[750ms] ease-[cubic-bezier(0.76,0,0.24,1)] pointer-events-none">
                {label}
            </p>
            <p className="absolute transform-origin-bottom -rotate-x-90 translate-y-[9px] opacity-0 transition-all duration-[750ms] ease-[cubic-bezier(0.76,0,0.24,1)]">
                {label}
            </p>
        </div>
    );
}
