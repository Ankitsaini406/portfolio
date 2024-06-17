import Image from 'next/image';
import style from './about.module.css'
import { FaCode } from "react-icons/fa6";

const About = () => {
    return (
        <div className={style.aboutpage}>
            <div className={style.ImgContainer}>
                <div className={style.Imgbox}>
                    <Image className={style.myImg} width={1000} height={1000} src='/images/myimage.jpg' alt='My Hero'></Image>
                </div>
            </div>
            <div className={style.aboutbox}>
                <div className={style.titlebox}><FaCode style={{ color: 'black' }} /> <h4>Web / App Developer</h4></div>
                <h1>Hi, I&apos;m Ankit 👋</h1>
                <h1 className={style.lighttext}>your web / app developer</h1>
                <p className={style.abouttext}><b>Web</b> and <b>Mobile</b> developer with over 2 years of experience in creating user-friendly and visually appealing
                    interfaces using <b>HTML, CSS, JavaScript</b> and <b>Responsive Design</b> techniques. Proficient in the <b>Flutter</b> framework
                    for cross-platform App development, MySQL for data management, and APIs for application communication.
                    Experienced in using Firebase for real-time database and authentication services. Dedicated to continuous
                    learning and contributing to a collaborative and innovative environment.
                </p>
            </div>
        </div>
    )
}

export default About;