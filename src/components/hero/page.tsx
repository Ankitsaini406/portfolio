// "use client";

// import useSessionData from "@/lib/hook/useSessionData";
import styles from "./hero.module.css";
import { FaHtml5, FaCss3Alt, FaReact, FaShopify, FaPhp } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiFlutterFill, RiNextjsFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { TbApi } from "react-icons/tb";


const Hero = () => {

    // const user = useSessionData();

    // if (!user) {
    //     return (
    //         <div className={styles.bodyFlex}>
    //             <div>Loading user data...</div>
    //         </div>
    //     );
    // }

    return (
        <div className={styles.bodyFlex}>
            <div className={styles.herotext}>
                <div className={styles.introtext}>
                    <h1 className={styles.imtext}>I&apos;m</h1>
                    {/* <h1>{user.name}</h1> */}
                    <ul className={styles.alltext}>
                        <li><span className={styles.typingText}>Web Developer</span></li>
                        <li><span className={styles.typingText}>App Developer</span></li>
                    </ul>
                </div>
                <div className={styles.skills}>
                    <FaHtml5 /> <FaCss3Alt style={{ color: 'blue '}}/> <IoLogoJavascript style={{ color: 'yellow ', backgroundColor: 'black'}}/> <RiFlutterFill  style={{ color: 'skyblue'}}/> <FaReact  style={{ color: 'skyblue'}}/> <RiNextjsFill style={{ color: 'black'}}/> <SiMysql /> <TbApi /> <FaShopify style={{ color: 'green'}}/> <FaPhp />
                </div>
            </div>
            <div className={styles.heroImage}></div>
        </div>
    );
};

export default Hero;
