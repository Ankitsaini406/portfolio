"use client"

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Template = ({ children }: { children: React.ReactNode }) => {
    const templateRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (templateRef.current) {
            const ctx = gsap.context(() => {
                gsap.fromTo(templateRef.current,
                    { opacity: 0, y: 100 },
                    { opacity: 1, y: 0, duration: 1 }
                );
            }, templateRef);

            return () => ctx.revert();
        }
    }, []);

    return (
        <div ref={templateRef} className="template">
            {children}
        </div>
    );
}

export default Template;