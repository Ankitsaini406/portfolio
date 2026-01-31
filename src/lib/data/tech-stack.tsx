import {
    FaReact,
    FaNodeJs,
} from "react-icons/fa";
import {
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiFlutter,
    SiPostgresql,
    SiMysql,
    SiFirebase,
    SiJavascript,
    SiVercel,
    SiPrisma,
    SiExpress,
    SiNestjs,
    SiRedux,
    SiZod,
    SiShadcnui,
} from "react-icons/si";
// import { TbBrandZustand } from "react-icons/tb";

export const TECH_STACK = [
    /* ───────── FRONTEND ───────── */
    {
        name: "React",
        icon: FaReact,
        color: "#61DAFB",
        category: "frontend",
    },
    {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "#000000",
        category: "frontend",
    },
    {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
        category: "frontend",
    },
    {
        name: "Tailwind",
        icon: SiTailwindcss,
        color: "#06B6D4",
        category: "frontend",
    },
    {
        name: "ShadcnUI",
        icon: SiShadcnui,
        color: "#111827",
        category: "frontend",
    },

    /* ───────── MOBILE ───────── */
    {
        name: "Flutter",
        icon: SiFlutter,
        color: "#02569B",
        category: "mobile",
    },

    /* ───────── BACKEND ───────── */
    {
        name: "Node.js",
        icon: FaNodeJs,
        color: "#339933",
        category: "backend",
    },
    {
        name: "Express",
        icon: SiExpress,
        color: "#000000",
        category: "backend",
    },
    {
        name: "NestJS",
        icon: SiNestjs,
        color: "#E0234E",
        category: "backend",
    },

    /* ───────── DATABASE ───────── */
    {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "#336791",
        category: "database",
    },
    {
        name: "MySQL",
        icon: SiMysql,
        color: "#4479A1",
        category: "database",
    },
    {
        name: "Firebase",
        icon: SiFirebase,
        color: "#FFCA28",
        category: "database",
    },
    {
        name: "Prisma",
        icon: SiPrisma,
        color: "#0C344B",
        category: "database",
    },

    /* ───────── STATE & TOOLS ───────── */
    {
        name: "Redux",
        icon: SiRedux,
        color: "#764ABC",
        category: "state",
    },
    // {
    //     name: "Zustand",
    //     icon: TbBrandZustand,
    //     color: "#2D2D2D",
    //     category: "state",
    // },
    {
        name: "Zod",
        icon: SiZod,
        color: "#3E67B1",
        category: "tools",
    },

    /* ───────── DEVOPS ───────── */
    {
        name: "Vercel",
        icon: SiVercel,
        color: "#000000",
        category: "devops",
    },
];
