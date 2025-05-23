
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaShopify, FaPhp, FaGithub, FaCode } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiFlutterFill, RiNextjsFill } from "react-icons/ri";
import { SiMysql, SiTypescript, SiTailwindcss } from "react-icons/si";
import { TbApi } from "react-icons/tb";

export default function Hero() {

    return (
        <div
            className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-background text-background"
            id="home"
        >

            {/* Main Content */}
            <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
                {/* Text Content */}
                <motion.div
                    className="flex flex-col items-center md:items-start text-center md:text-left space-y-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-xl md:text-2xl font-medium text-secondary">
                        Hello, I&apos;m a
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-foreground">
                        <span className="block">Full-Stack</span>
                        <span className="block mt-2">Developer</span>
                    </h1>
                    <p className="text-2xl md:text-3xl font-light text-secondary-light">
                        <span className="text-accent">{"<"}</span>
                        <span className="text-foreground font-medium">
                            Crafting digital experiences
                        </span>
                        <span className="text-accent">{"/>"}</span>
                    </p>
                    <motion.div
                        className="flex gap-6 mt-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                    </motion.div>
                </motion.div>

                {/* Tech Stack Card */}
                <div className="relative border rounded-2xl">
                    <motion.div
                        className="glass-card rounded-2xl p-8 shadow-xl"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <h3 className="text-2xl font-bold text-foreground mb-6">
                            Tech Stack
                        </h3>
                        <motion.div className="grid grid-cols-5 gap-6">
                            <TechIcon icon={<FaHtml5 />} name="HTML5" color="text-[#E34F26]" />
                            <TechIcon icon={<FaCss3Alt />} name="CSS3" color="text-[#1572B6]" />
                            <TechIcon icon={<IoLogoJavascript />} name="JavaScript" color="text-[#F7DF1E]" />
                            <TechIcon icon={<SiTypescript />} name="TypeScript" color="text-[#3178C6]" />
                            <TechIcon icon={<FaReact />} name="React" color="text-[#61DAFB]" />
                            <TechIcon icon={<RiNextjsFill />} name="Next.js" color="text-foreground" />
                            <TechIcon icon={<SiTailwindcss />} name="Tailwind" color="text-[#06B6D4]" />
                            <TechIcon icon={<RiFlutterFill />} name="Flutter" color="text-[#02569B]" />
                            <TechIcon icon={<SiMysql />} name="MySQL" color="text-[#4479A1]" />
                            <TechIcon icon={<FaPhp />} name="PHP" color="text-[#777BB4]" />
                            <TechIcon icon={<TbApi />} name="API" color="text-accent" />
                            <TechIcon icon={<FaShopify />} name="Shopify" color="text-[#7AB55C]" />
                            <TechIcon icon={<FaGithub />} name="GitHub" color="text-foreground" />
                            <TechIcon icon={<FaCode />} name="Clean Code" color="text-secondary-light" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

interface TechIconProps {
    icon: React.ReactNode;
    name: string;
    color: string;
}

const TechIcon = ({ icon, name, color }: TechIconProps) => (
    <motion.div
        className="flex flex-col items-center justify-center gap-2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
    >
        <div
            className={`text-3xl ${color} hover:scale-110 transition-all duration-300`}
        >
            {icon}
        </div>
        <span className="text-xs text-white/60">{name}</span>
    </motion.div>
);
