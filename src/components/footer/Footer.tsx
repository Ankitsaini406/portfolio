import style from './Footer.module.css'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { color } from 'framer-motion';

const Footer = () => {

    // const openInNewTab = (url: string) => {
    //     if (typeof window != "undefined") {
    //         window.open(url, '_blank', 'noopener,noreferrer');
    //     }
    // };

    return (
        <div className={style.footerbox}>
            <div className={style.footertext}>
                <h1>Let&apos;s talk about your project:</h1>
            </div>
            <div className={style.footertext}>
                <a style={{ color: 'white' }} target='_blank' rel="noopener noreferrer" href='mailto:as.ankitsaini406@gmail.com'>as.ankitsaini406@gmail.com</a>
            </div>
            <div className={style.footertext}>
                <a href='https://www.linkedin.com/in/ankit-saini-509a8a18b/'><FaLinkedinIn color='white' /></a> <a target='_blank' rel="noopener noreferrer" href='https://github.com/Ankitsaini406'><FaGithub color='white' /></a>
            </div>
        </div>
    )
}

export default Footer