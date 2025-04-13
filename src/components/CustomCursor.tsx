
import { useEffect, useRef } from 'react';
import gsap from "gsap";

interface CustomCursorProps {
    isHoverd: boolean;
}

const colors = [
    "#c32d27",
    "#f5c63f",
    "#457ec4",
    "#356fdb",
]

export default function CustomCursor({ isHoverd }: CustomCursorProps) {
    const size = isHoverd ? 300 : 50;
    const delay = isHoverd ? 0.015 : 0.005;
    const mouse = useRef({
        x: 0,
        y: 0,
    });
    const delayMouse = useRef({
        x: 0,
        y: 0
    })
    const circles = useRef<(HTMLDivElement | null)[]>([]);

    const moveCircle = (x: number, y: number) => {
        circles.current.forEach(( circle) => {
            gsap.set(circle, { x, y, xPercent: -50, yPercent: -50 })
        })
    }

    const mangeMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        mouse.current = {
            x: clientX,
            y: clientY
        }
    }

    const lerp = (x: number, y: number, a: number): number => x * (1 - a) + y * a;

    const animate = () => {

        const { x, y } = delayMouse.current;
        delayMouse.current = {
            x: lerp(x, mouse.current.x, 0.75),
            y: lerp(y, mouse.current.y, 0.75)
        }

        moveCircle(mouse.current.x, mouse.current.y)
        window.requestAnimationFrame(animate);
    }

    useEffect(() => {
        animate();
        window.addEventListener('mousemove', mangeMouseMove);
        return () => window.removeEventListener('mousemove', mangeMouseMove);
    }, []);

    return (
        <>
            {
                colors.map((color, i, array) => {
                    return <div key={color}
                        ref={ref => { circles.current[i] = ref; }}
                        className="fixed top-0 left-0 rounded-full mix-blend-difference pointer-events-none"
                        style={{
                            width: size,
                            height: size,
                            backgroundColor: color,
                            filter: `blur(${isHoverd ? 30 : 2}px)`,
                            transition: `height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out, transform ${(array.length - i) * delay}s linear`
                        }}
                    />
                })
            }
        </>
    );
}
