import style from '@/styles/Footer.module.css'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {

    // const openInNewTab = (url: string) => {
    //     if (typeof window != "undefined") {
    //         window.open(url, '_blank', 'noopener,noreferrer');
    //     }
    // };

    return (
        <div className={style.footerbox}>
            <div className={style.footertext}>
                <h1 className={style.footerlet}>Let&apos;s talk about your project:</h1>
            </div>
            <div >
                <a style={{ color: 'white' }} target='_blank' rel="noopener noreferrer" href='mailto:as.ankitsaini406@gmail.com'>as.ankitsaini406@gmail.com</a>
            </div>
            <div className={style.footertext}>
                <Link href='https://www.linkedin.com/in/web-ankit-saini/'><FaLinkedinIn color='white' /></Link> <Link target='_blank' rel="noopener noreferrer" href='https://github.com/Ankitsaini406'><FaGithub color='white' /></Link>
            </div>
        </div>
    )
}

export default Footer