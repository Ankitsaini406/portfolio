import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
    return (
        <div className="bg-black rounded-t-[25px] flex flex-col items-center gap-8 py-8 mt-4">
            <div className="flex flex-col items-center text-white text-center">
                <h1 className="text-[calc(25px+var(--font-size))] sm:text-[clamp(10px,20px,30px)]">
                    Let&apos;s talk about your project:
                </h1>
            </div>
            <div>
                <a
                    className="text-white text-lg hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="mailto:as.ankitsaini406@gmail.com"
                >
                    as.ankitsaini406@gmail.com
                </a>
            </div>
            <div className="flex gap-4">
                <Link
                    href="https://www.linkedin.com/in/web-ankit-saini/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-xl hover:text-gray-400 transition"
                >
                    <FaLinkedinIn />
                </Link>
                <Link
                    href="https://github.com/Ankitsaini406"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-xl hover:text-gray-400 transition"
                >
                    <FaGithub />
                </Link>
            </div>
        </div>
    );
};

export default Footer;
